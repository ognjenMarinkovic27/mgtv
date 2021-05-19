import React from 'react';
import nookies from 'nookies';
import { useRouter } from 'next/router'

import { Box, Text, Button } from '@chakra-ui/react'

import firebaseAdmin from '../firebaseAdmin';
import firebase from '../firebase'
import Link from 'next/link';

export async function getServerSideProps(ctx) {

    try {
        const cookies = nookies.get(ctx);
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
        console.log(token);
        const { uid, email } = token;

        const message = `Улоговани сте као ${email}`;

        return {
            props: { 
                message
            }
        }
    }
    catch(err) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
            props: {},
        };
    }

}

export default function Authenticated({ message }) {

    const router = useRouter();

    return (
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
    );
}