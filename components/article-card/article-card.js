import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function ArticleCard({ article }) {
    return (
        <Box w='100%' m='auto' bg='#F2F2F2' p='16px' display='flex' justifyContent='space-between' flexWrap='wrap-reverse'>
            <Box w={['100%', '100%', '70%']} display='flex' flexDir='column'>
                <Heading mb='4px' fontFamily='Oswald' fontSize={['16px', '16px', '16px', '16px', '32px']}>{article.title}</Heading>
                <Text noOfLines={4} fontFamily='Oswald' opacity='50%' fontSize={['12px', '12px', '12px', '12px','16px']}>{article.content}</Text>
            </Box>
            <Box w={['100%', '100%', '25%']} maxH='200px' overflow='hidden' m='auto' filter="drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.15));">
                <Box>
                    <Image
                        src={article.imgUrl}
                        width={734}
                        height={478}
                    />
                </Box>
            </Box>
        </Box>
    )
}