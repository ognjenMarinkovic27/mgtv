import { getArticleData, getArticlesData } from "../../lib/articles"
import { Text, Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import TopBar from "../../components/topbar/topbar"
import { useRouter } from 'next/router'

export async function getStaticPaths() {

    //Dumb because I'm fetching from firestore again, but oh well
    const articles = await getArticlesData()

    const paths = (articles).map(article => {
        return {
            params: {
                id: article.id
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const articleData = await getArticleData(params.id)

    let imgUrl = `https://firebasestorage.googleapis.com/v0/b/mg-tv-308523.appspot.com/o/${params.id}?alt=media`
    return {
        props: {
            articleData,
            imgUrl
        },
        revalidate: 60
    }
}

export default function Article({ articleData, imgUrl }) {

    const router = useRouter()

    if (router.isFallback) {
        return <Box>Loading...</Box>
    }

    return (
        <>
            <TopBar />
            <Box backgroundImage='url(/email-pattern.png)'>
                <Box m='auto' w={['100%', '100%', '70%']} display='flex' flexDir='column' position='relative'>
                    <Image
                        src={imgUrl}
                        width={1920}
                        height={1080}
                        priority={true}
                        layout='responsive'
                    />
                    <Box w='100%' h='100%' position='absolute' bg="linear-gradient(180deg, rgba(196, 196, 196, 0) 42.4%, rgba(0, 0, 0, 0.5) 99.99%, rgba(196, 196, 196, 0) 100%, rgba(0, 0, 0, 0) 100%)" />
                </Box>
                <Box bg='white' w={['100%', '100%', '60%']} minH='75px' m='auto' position='relative' top={['0', '0', '-64px']} p='16px'>
                    <Heading fontSize={['24px', '24px', '32px', '40px', '48px']} fontFamily='Oswald' mb='8px' textAlign='center'>{articleData.title}</Heading>
                    <Text fontSize={['12px', '12px', '16px', '20px', '24px']} fontFamily='Oswald'>{articleData.content}</Text>
                </Box>
            </Box>
        </>
    )
}