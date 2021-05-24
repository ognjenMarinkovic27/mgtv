export async function getImageUrls(articlesWithoutUrl) {

    return (articlesWithoutUrl.map((article) => {
        let imgUrl = `https://firebasestorage.googleapis.com/v0/b/mg-tv-308523.appspot.com/o/${article.id}?alt=media`

        return {
            imgUrl,
            ...article
        }
    }))
}
