import { Box, ListItem, UnorderedList, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import ArticleCard from '../components/article-card/article-card'

import TopBar from '../components/topbar/topbar'

import { getArticlesData } from '../lib/articles'
import { getImageUrls } from '../lib/adminImages'

import NextLink from 'next/link'

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
        <Box backgroundImage='url(email-pattern.png)'>
            <TopBar />
            <Heading textAlign='center' m='16px' size='2xl'>Најновија дешавања</Heading>
            <Box h='100vh' w={['100%', '100%', '90%', '75%']} m='auto' bg='#FAFAFA'>
                <UnorderedList listStyleType='none' m='0' p='8px'>
                    {articles.map((article) => (
                        <ListItem key={article.id} mb='8px'>
                            <LinkBox as='article' >
                                <NextLink href={`/articles/${article.id}`} passHref>
                                    <LinkOverlay>
                                        <ArticleCard article={article} />
                                    </LinkOverlay>
                                </NextLink>
                            </LinkBox>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
    )
}