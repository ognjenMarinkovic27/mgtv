import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function ArticleCard({ article }) {
    return (
        <Box w='100%' m='auto' bg='#F4F4F4' p='16px' display='flex' justifyContent='space-between' flexWrap='wrap-reverse'>
            <Box w={['100%', '100%', '70%']} display='flex' flexDir='column'>
                <Heading mb='4px' fontFamily='Oswald' fontSize={['16px', '16px', '16px', '16px', '32px']}>{article.title}</Heading>
                <Text fontFamily='Oswald' opacity='50%' fontSize={['12px', '12px', '12px', '12px','16px']}>Лорем ипсум долор сит амет, цонсецтетур адиписцинг елит. Пхаселлус пеллентесqуе нунц ид рисус пеллентесqуе, ут посуере лео темпор. Сед дицтум пхаретра еџ, ид цонваллис метус вестибулум qуис. Нам сит амет вариус дуи. Нам алиqует нец сем вел бландит. Морби qуис тристиqуе еџ. Вестибулум анте ипсум примис ин фауцибус орци луцтус ет ултрицес посуере цубилиа цурае; Вестибулум анте ипсум примис ин фауцибус орци луцтус ет ултрицес посуере цубилиа цурае; Ин ид ултрицес лацус, ат сцелерисqуе лацус. Ин егет ерат лео.
                    Дуис еу сапиен содалес, тристиqуе рисус егет, вулпутате нулла. Фусце а аугуе орнаре, вехицула еџ а, финибус велит. Вестибу...</Text>
            </Box>
            <Box w={['100%', '100%', '25%']} maxH='200px' overflow='hidden' m='auto'>
                <Box>
                    <Image
                        src={article.imgUrl}
                        width={1024}
                        height={683}
                    />
                </Box>
            </Box>
        </Box>
    )
}