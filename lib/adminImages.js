import firebaseAdmin from '../firebaseAdmin'
import * as nodedt from 'node-datetime'

export async function getImageUrls(articlesWithoutUrl) {
    const dt = nodedt.create((new Date()).valueOf() + 120)
    const exp = dt.format("m-d-Y H:M:S")

    return await Promise.all (articlesWithoutUrl.map(async (article) => {
        const file = firebaseAdmin.storage().bucket().file(article.id)
        let imgUrl
        await file.getSignedUrl({
            action: 'read',
            expires: exp
        }).then(signedUrls => {
            imgUrl = signedUrls[0]
        })
        return {
            imgUrl,
            ...article
        }
    }))
}
