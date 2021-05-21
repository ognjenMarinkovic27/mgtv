import firebaseAdmin from '../firebaseAdmin'
import * as nodedt from 'node-datetime'

export async function getImageUrls(articlesWithoutUrl) {
    const dt = nodedt.create((new Date()).valueOf() + 100000)
    const exp = dt.format("m-d-Y H:M:S")

    return await Promise.all (articlesWithoutUrl.map(async (article) => {
        const file = firebaseAdmin.storage().bucket().file(article.id)
        let imgUrl = `https://firebasestorage.googleapis.com/v0/b/mg-tv-308523.appspot.com/o/${article.id}?alt=media`
        return {
            imgUrl,
            ...article
        }
    }))
}
