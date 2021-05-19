import ArticleCard from '../components/article-card/article-card';
import { addArticle, deleteArticle, getArticlesData } from '../lib/articles'
import { Box, ListItem, UnorderedList, Button, LinkBox, LinkOverlay, Input, Textarea } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export async function getServerSideProps() {

    const articles = await getArticlesData()
    
    console.log(articles)
    return {
        props: {
            articles
        }
    }
}

export default function ControlPanel({ articles }) {

    const router=useRouter();

    const [showCreatePost, setShowCreatePost] = useState(0);

    const { register, handleSubmit } = useForm()

    async function onSubmit (data) {
        console.log('lol')
        const res = await addArticle(data.title, data.content, 'https://www.mg.edu.rs/uploads/attachment/vest/6346/large_%D0%95EJOI-1.jpg')
        console.log(res)
        router.replace(router.asPath)
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
                                    console.log(res)
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