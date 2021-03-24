import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'

import YoutubeEmbed from '../youtube-embed/youtube-embed'


export default function NewestVideo ({ video }) {
    return (
        <Box bg="tomato" backgroundImage='url(email-pattern.png)' w="100%" display="flex" flexDir="column" alignItems="center" p="32px">
            <div dangerouslySetInnerHTML={{__html:"<!-- Background pattern from Toptal Subtle Patterns -->"}} />
            <Box display="flex" flexDir="column" alignItems="center" mb="24px">
                <Heading as="h1" textTransform="uppercase" size="2xl">Најновије</Heading>
                <Heading as="h2" size="lg" fontWeight="600">{video.snippet.title}</Heading>
            </Box>
            <Box filter="drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.15));">
                <YoutubeEmbed key={video.id.videoId} embedId={video.id.videoId} />
            </Box>
        </Box>
    )
}