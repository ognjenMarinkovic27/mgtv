import { UnorderedList, ListItem, Link } from "@chakra-ui/layout";
import NextLink from 'next/link'
import { useAuth } from "../../auth/authProvider";

export default function NavBar() {

    const { user } = useAuth()

    let width = '200px'
    if(user) {
        width = '400px'
    }

    return <UnorderedList display='flex' w={width} justifyContent='space-around' listStyleType='none' fontWeight='700' color='white' alignItems='center'>
        {user!=null ? <ListItem><NextLink href='/control-panel' passHref>Контролна табла</NextLink></ListItem> : null}
        <ListItem><NextLink href='/' passHref><Link>Почетна</Link></NextLink></ListItem>
        <ListItem><NextLink href='/articles' passHref><Link>Чланци</Link></NextLink></ListItem>
    </UnorderedList>
}