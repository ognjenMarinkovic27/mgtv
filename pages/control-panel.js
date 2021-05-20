import ArticleCard from '../components/article-card/article-card';
import { addArticle, deleteArticle, getArticlesData } from '../lib/articles'
import { Box, ListItem, UnorderedList, Button, LinkBox, LinkOverlay, Input, Textarea } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../lib/images';
import { getImageUrls } from '../lib/adminImages'

import { checkToken } from '../auth/checkToken'
import nookies from 'nookies'




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

    const { register, handleSubmit } = useForm()

    const router = useRouter()

    async function onSubmit (data) {

        const res = await addArticle(data.title, data.content)
        if(image) {
            const res1 = await uploadImage(image, res.id)
        }
        router.replace(router.asPath)
    }

    async function onImageChange (e) {
        const reader = new FileReader();
        let file = e.target.files[0];

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
                <UnorderedList w='100%' listStyleType='none' m='0' p='8px'>
                    {articles.map((article) => (
                        <ListItem key={article.id} mb='8px' position='relative'>
                            <LinkBox as='article' >
                                <NextLink href={`/articles/${article.id}`} passHref>
                                    <LinkOverlay>
                                        <ArticleCard article={article} />
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                            <Button bg='white' color='red' position='absolute' right='8px' bottom='8px' zIndex='1' shadow='xl'
                                onClick={async () => {
                                    let res = await deleteArticle(article.id)
                                    router.replace(router.asPath)
                                }}
                            >
                                Обриши
                            </Button>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
    );
}