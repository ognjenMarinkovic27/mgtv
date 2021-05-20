import { getArticleData, getArticlesData } from "../../lib/articles"
import { Text, Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import TopBar from "../../components/topbar/topbar"
import * as nodedt from 'node-datetime'

import firebaseAdmin from '../../firebaseAdmin'

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
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const articleData = await getArticleData(params.id)

    const dt = nodedt.create((new Date()).valueOf() + 100000)
    const exp = dt.format("m-d-Y H:M:S")

    const file = firebaseAdmin.storage().bucket().file(params.id)
    let imgUrl
    await file.getSignedUrl({
        action: 'read',
        expires: exp
    }).then(signedUrls => {
        imgUrl = signedUrls[0]
    })

    return {
        props: {
            articleData,
            imgUrl
        }
    }
}

export default function Article({ articleData, imgUrl }) {
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