import { UnorderedList, ListItem, LinkBox, LinkOverlay, Button, Box} from '@chakra-ui/react'
import NextLink from 'next/link'
import ArticleCard from '../article-card/article-card'

import { deleteArticle } from '../../lib/articles'
import { useRouter } from 'next/router'

export default function ArticlesList({ articles, deleteButtons }) {

    const router = useRouter();

    return (
        <UnorderedList listStyleType='none' m='0' p='8px'>
            {articles.map((article, index) => {
                
                const lazyLoad = (index < 3)

                return (
                <Box key={article.id} position='relative'>
                    <ListItem key={article.id} mb='8px'>
                        <LinkBox as='article' >
                            <NextLink href={`/articles/${article.id}`} passHref>
                                <LinkOverlay>
                                    <ArticleCard article={article} lazyLoad={lazyLoad}/>
                                </LinkOverlay>
                            </NextLink>
                        </LinkBox>
                    </ListItem>
                    {deleteButtons ? 
                        <Button bg='white' color='red' position='absolute' right='8px' bottom='8px' zIndex='1' shadow='xl'
                            onClick={async () => {
                                let res = await deleteArticle(article.id)
                                router.replace(router.asPath)
                            }}
                        >
                        Обриши
                    </Button> : null}
                </Box>
            )})}
        </UnorderedList>
    )
}