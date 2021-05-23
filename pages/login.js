import { Box, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form'
import firebase from '../firebase'
import firebaseAdmin from '../firebaseAdmin'
import nookies from 'nookies'
import Head from 'next/head'

export async function getServerSideProps(ctx) {
    try {
        const cookies = nookies.get(ctx);
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
        return {
            redirect: {
                permanent: false,
                destination: '/authenticated',
            },
            props: {}
        }
    }
    catch(err) {
        return {
            props: {},
        };
    }
}

export default function Login() {
    const { register, handleSubmit } = useForm()

    async function onSubmit(data) {
        console.log(data.email, data.password);
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        window.location.href='/authenticated';
    }

    return (
        <>
            <Head>
                <title>{'МГ ТВ: Улогуј се'}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box h='100vh' bg="linear-gradient(#AE72CE, #9C56C2);" display='grid' placeItems='center'>

                <Box w='40%' minW='300px'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb='16px'>
                            <FormLabel htmlFor='email' color='white'>e-mail</FormLabel>
                            <Input type='email' {...register("email")}></Input>
                        </FormControl>
                        <FormControl mb='16px'>
                            <FormLabel htmlFor='password' color='white'>password</FormLabel>
                            <Input type='password' {...register("password")}></Input>
                        </FormControl>
                        <Button type="submit">Log in</Button>
                    </form>
                </Box>
                
            </Box>
        </>
    );
}