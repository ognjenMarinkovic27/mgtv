import { Box, Heading,Button, AspectRatio } from '@chakra-ui/react'
import { useState } from 'react'

import Image from 'next/image'

import YoutubeEmbed from '../youtube-embed/youtube-embed'


export default function NewestVideo ({ video }) {

    const [showEmbed, setShowEmbed] = useState(0)

    return (
        <Box backgroundImage='url(email-pattern.png)' w="100%" display="flex" flexDir="column" alignItems="center" p="32px">
            <div dangerouslySetInnerHTML={{__html:"<!-- Background pattern from Toptal Subtle Patterns -->"}} />
            <Box display="flex" flexDir="column" alignItems="center" mb="24px">
                <Heading as="h1" textTransform="uppercase" fontSize={['32px','40px','56px']}>Најновије</Heading>
                <Heading as="h2" align='center' fontSize={['16px','20px','28px']} fontWeight="600">{video.snippet.title}</Heading>
            </Box>
            <Box filter="drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.15));">
                {showEmbed ? <YoutubeEmbed key={video.snippet.resourceId.videoId} embedId={video.snippet.resourceId.videoId} /> : 
                <Box>
                    <AspectRatio w={[320,400,560,800,800]} ratio={16 / 9} position='relative'>
                        <Button aria-label='youtube video' borderRadius='0' onClick={() => {
                            setShowEmbed(1)
                        }}>
                            <Image
                                src={`https://i.ytimg.com/vi/${video.snippet.resourceId.videoId}/maxresdefault.jpg`}
                                layout='fill'
                                objectFit='contain'
                                alt='Newest Video Thumbnail'
                            />
                            <Box position='absolute' zIndex='1'>
                                <Image 
                                    src={'/youtube.png'}
                                    height={64}
                                    width={64}
                                    priority={true}
                                    alt='Youtube Logo'
                                />
                            </Box>
                            <Box w='100%' h='100%' position='absolute' bg='rgba(0, 0, 0, 0.3);'></Box>
                        </Button>
                    </AspectRatio>
                </Box>
                }
            </Box>
        </Box>
    )
}