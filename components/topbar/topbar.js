import { Box, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import NavBar from '../nav-bar/nav-bar.js'

export default function TopBar() {
    return(
        <Box zIndex='1' position='relative' w="100%" bg="linear-gradient(#AE72CE, #9C56C2);" h="45px" pl="4px" boxShadow="0px 5px 20px rgba(156, 86, 194, 0.4)" display='flex' justifyContent='space-between' color='white'>
            <NextLink href='/' passHref><Link><Heading as="h1" size="xl" fontWeight="bold">МГ ТВ</Heading></Link></NextLink>
            <NavBar></NavBar>
        </Box>
    )
}