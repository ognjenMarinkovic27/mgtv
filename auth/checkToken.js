import firebaseAdmin from '../firebaseAdmin';

export async function checkToken(t, redirectUrl) {
    try {
        const token = await firebaseAdmin.auth().verifyIdToken(t);
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
                destination: redirectUrl,
            },
            props: {},
        };
    }
}