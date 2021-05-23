import { Box, Text, Link } from '@chakra-ui/react'
import Image from 'next/image'

export default function VideoCard ({ videoId, title }) {

    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

    return (
        <Link href={videoUrl}>
            <Box position="relative">
                
                <Image
                    src={thumbnailUrl}
                    width={445}
                    height={250}
                    priority={true}
                    alt='Youtube Video Thumbnail'
                />
                {
                    /*  TODO:
                    *  Fix lazy workaround for image not being same size as Box (bottom=6px)
                    */
                }
                <Box position="absolute" bottom='5.5px' w='100%' h='100%' bg="linear-gradient(180deg, rgba(196, 196, 196, 0) 42.4%, rgba(0, 0, 0, 0.5) 99.99%, rgba(196, 196, 196, 0) 100%, rgba(0, 0, 0, 0) 100%)" />
                <Text position="absolute" bottom="8px" left="8px" fontWeight='600' color='white'>{title}</Text>

            </Box>
        </Link>
    )
}