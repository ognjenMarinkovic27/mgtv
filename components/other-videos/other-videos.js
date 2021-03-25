import { ListItem, UnorderedList, Box, Heading } from "@chakra-ui/layout";
import Image from 'next/image'

import VideoCard from '../video-card/video-card'

export default function OtherVideos ({ videos }) {
    return (
    <Box as="section" w="100%" bg="linear-gradient(#AE72CE, #9C56C2)" p="8px" pb="16px">
        <Heading as="h3" color="white" mb="16px">Остале емисије</Heading>
        <Box display="flex" alignItems="center" h="90%">
            <UnorderedList display="flex" justifyContent="space-around" w="100%" listStyleType="none" flexWrap="wrap"> 
                {videos.map((video) => (
                    <ListItem key={video.snippet.resourceId.videoId}>
                        <VideoCard key={video.snippet.resourceId.videoId} videoId={video.snippet.resourceId.videoId} title={video.snippet.title}/>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    </Box>
    )
}