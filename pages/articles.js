import { Box, Heading } from '@chakra-ui/react'

import TopBar from '../components/topbar/topbar'

import { getArticlesData } from '../lib/articles'
import { getImageUrls } from '../lib/adminImages'

import ArticlesList from '../components/articles-list/articles-list'

import Head from 'next/head'

export async function getStaticProps() {

    const articlesWithoutUrl = await getArticlesData()

    const articles = await getImageUrls(articlesWithoutUrl)

    return {
        props: {
            articles
        },
        revalidate: 60
    }
}

export default function Articles({ articles }) {
    return (
        <>
            <Head>
                <title>{'МГ ТВ: Чланци'}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box backgroundImage='url(email-pattern.png)'>
                <TopBar />
                <Heading textAlign='center' m='16px' size='2xl'>Најновија дешавања</Heading>
                <Box h='100vh' w={['100%', '100%', '90%', '75%']} m='auto' bg='#FAFAFA'>
                    <ArticlesList articles={articles} deleteButtons={false}></ArticlesList>
                </Box>
            </Box>
        </>
    )
}