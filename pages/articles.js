import { Box, ListItem, List, UnorderedList } from '@chakra-ui/react'
import ArticleCard from '../components/article-card/article-card'

import TopBar from '../components/topbar/topbar'

export async function getStaticProps() {
    return {
        props: {
            articles: [
                {
                    title: 'Невероватно! Члан српског тима ЕЈОИ-а пришао женској особи на близини мањој од 1.2 метара.',
                    imgUrl: 'https://www.mg.edu.rs/uploads/attachment/vest/6346/large_%D0%95EJOI-1.jpg'
                },
                {
                    title: 'Ексклузивно! 100% интернационалног тима из информатике тврди да тренутно не желе романтичну везу.',
                    imgUrl: 'https://www.mg.edu.rs/uploads/attachment/vest/6346/large_EJOI-2.jpg'
                },
                {
                    title: 'Невероватно! Члан српског тима ЕЈОИ-а пришао женској особи на близини мањој од 1.2 метара.',
                    imgUrl: 'https://www.mg.edu.rs/uploads/attachment/vest/6346/large_%D0%95EJOI-1.jpg'
                }
            ]
        }
    }
}

export default function Articles({ articles }) {
    return (
        <Box backgroundImage='url(email-pattern.png)'>
            <TopBar />
            <Box h='100vh' w={['100%', '100%', '90%', '75%']} m='auto' bg='white'>
                <UnorderedList listStyleType='none' m='0'>
                    {articles.map((article) => (
                        <ListItem m='8px'>
                            <ArticleCard article={article} />
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
    )
}