import React from 'react';
import nookies from 'nookies';
import { useRouter } from 'next/router'

import { Box, Text, Button } from '@chakra-ui/react'


import firebase from '../firebase'
import Link from 'next/link';
import { checkToken } from '../auth/checkToken';

import Head from 'next/head'

export async function getServerSideProps(ctx) {

    const cookies = nookies.get(ctx);
    return await checkToken(cookies.token, '/login')

}

export default function Authenticated({ message }) {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>{'МГ ТВ: ' + message}</title>
            </Head>
            <Box h='100vh' display='grid' placeItems='center'>
                <Box display='flex' alignItems='center' flexDirection='column'>
                    <Text mb='16px'>{ message }</Text>
                    <Button
                        onClick={async () => {
                        await firebase
                            .auth()
                            .signOut()
                            .then(() => {
                            router.push("/");
                            });
                        }}
                        mb='16px'
                    >
                        Излогуј се
                    </Button>
                    <Link href='/control-panel'>
                        <Button>
                            Контролна табла
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    );
}