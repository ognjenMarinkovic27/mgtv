import { UnorderedList, ListItem, Link } from "@chakra-ui/layout";
import NextLink from 'next/link'

export default function NavBar() {
    return <UnorderedList display='flex' w='10%' justifyContent='space-around' listStyleType='none' fontWeight='700' color='white' alignItems='center'>
        <ListItem><NextLink href='/' passHref><Link>Почетна</Link></NextLink></ListItem>
        <ListItem><NextLink href='/articles' passHref><Link>Чланци</Link></NextLink></ListItem>
    </UnorderedList>
}