import { ListItem, UnorderedList, Box, Heading } from "@chakra-ui/layout";
import Image from 'next/image'

export default function OtherVideos ({ videos }) {
    return (
    <Box as="section" w="100%" bg="#AE72CE" p="8px" pb="16px">
        <Heading as="h3" color="white" mb="16px">Остале емисије</Heading>
        <Box display="flex" alignItems="center" h="90%">
            <UnorderedList display="flex" justifyContent="space-around" w="100%" listStyleType="none" flexWrap="wrap"> 
                {videos.map((video) => (
                    <ListItem key={video.id.videoId}>
                        <VideoCard thumbnailUrl={`https://i.ytimg.com/vi/${video.id.videoId}/maxresdefault.jpg`} title={video.snippet.title}/>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    </Box>
    )
}