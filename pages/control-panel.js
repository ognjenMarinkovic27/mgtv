import { addArticle, getArticlesData } from '../lib/articles'
import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../lib/images';
import { getImageUrls } from '../lib/adminImages'

import { checkToken } from '../auth/checkToken'
import nookies from 'nookies'
import TopBar from '../components/topbar/topbar';

import firebase from '../firebase'
import ArticlesList from '../components/articles-list/articles-list';




export async function getServerSideProps(ctx) {

    const cookies = nookies.get(ctx);
    let res = await checkToken(cookies.token, '/login')

    const articlesWithoutUrl = await getArticlesData()

    const articles = await getImageUrls(articlesWithoutUrl)

    return {
        ...res,
        props: {
            articles
        }
    }
}

export default function ControlPanel({ articles }) {


    const [showCreatePost, setShowCreatePost] = useState(0);
    const [image, setImage] = useState(null);
    const [imgSize, setImgSize] = useState({w:0,h:0});

    const { register, handleSubmit } = useForm()

    const router = useRouter()

    async function onSubmit (data) {

        const res = await addArticle(data.title, data.content, imgSize)
        if(image) {
            const res1 = await uploadImage(image, res.id)
        }
        router.replace(router.asPath)
    }



    async function onImageChange (e) {
        const reader = new FileReader();
        let file = e.target.files[0];

        const u = URL.createObjectURL(file)
        const img = new Image();

        img.onload = () => {
            setImgSize({w: img.width, h: img.height})
        }

        img.src = u

        if(file) {
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage(file);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            } 
        else {
            setImage(null);
        }
    }

    return (
        <Box>
            <TopBar/>
            <Box display='flex' flexDirection='column' alignItems='center' bg='url(email-pattern.png)' minH='100vh'>
                {!showCreatePost ? <Button my='16px' w={['100%', '100%', '90%', '75%']} bg='#FAFAFA' shadow='lg' onClick={()=>{setShowCreatePost(1)}}>
                    Нови чланак
                </Button> :
                null}
                <Box bg='#FAFAFA' w={['100%', '100%', '90%', '75%']} display='flex' flexDir='column' alignItems='center'>
                    {showCreatePost ? 
                        <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
                            <Box w='95%' m='16px' display='flex' flexDir='column' alignItems='end'>
                                <Input borderColor='black' focusBorderColor='#9C56C2' placeholder='Наслов' variant='flushed' mb='8px' {...register('title')}></Input>
                                <Textarea borderColor='black' focusBorderColor='#9C56C2' mb='16px' {...register('content')}></Textarea>
                                <Box display='flex' w='40%' justifyContent='space-between'>
                                    <Button w='48%' variant='outline' onClick={()=>{setShowCreatePost(0)}}>Откажи</Button>
                                    <Button w='48%' type='submit'>Објави</Button>
                                </Box>
                                <Input type='file' border='none' _focus="{{outline:none}}" accept="image/x-png,image/jpeg" onChange={(e) => {onImageChange(e);}}></Input>   
                            </Box>
                        </form>
                    : null}
                    <ArticlesList articles={articles} deleteButtons={true} />
                </Box>
            </Box>
            <Button shadow='xl' _hover={null} bg='linear-gradient(#AE72CE, #9C56C2);' color='white' position='fixed' bottom='32px' right='32px' 
                onClick={async () => {
                    await firebase
                        .auth()
                        .signOut()
                        .then(() => {
                        router.push("/");
                        });
                    }}>
                Излогуј се
            </Button>
        </Box>
    );
}