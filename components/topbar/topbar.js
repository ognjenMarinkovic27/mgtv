import { Box, Heading } from '@chakra-ui/react'

export default function TopBar() {
    return(
        <Box zIndex='1' position='relative' w="100%" bg="linear-gradient(#AE72CE, #9C56C2);" h="45px" pl="4px" boxShadow="0px 5px 20px rgba(156, 86, 194, 0.4)">
            <Heading as="h1" size="xl" color="white" fontWeight="bold">МГ ТВ</Heading>
        </Box>
    )
}