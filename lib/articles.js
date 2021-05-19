import firebase from '../firebase'

export async function getArticlesData() {
    const res = firebase.firestore().collection('articles').orderBy('createdAt', 'desc')
    const data = await res.get()
    const articles = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: new Date(doc.data().createdAt.toDate()).toUTCString(),
    }))

    return articles
}

export async function getArticleData(id) {
    const res = firebase.firestore().collection('articles').doc(id)
    const data = await res.get()
    
    console.log(data)
    
    return {
        id: data.id,
        ...data.data(),
        createdAt: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.timestamp),
    }
}

export async function deleteArticle(id) {
    try {
        const res = await firebase.firestore().collection('articles').doc(id).delete()
        return {
            code: 'SUCCESS'
        }
    }
    catch(err) {
        return {
            code: 'ERROR'
        }
    }
}

export async function addArticle(title, content, imgUrl) {
    try {
        const res = await firebase.firestore().collection('articles').add({
            title: title,
            content: content,
            imgUrl: imgUrl,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        return {
            code: 'SUCCESS'
        }
    }
    catch(err) {
        return {
            code: 'ERROR'
        }
    }
    


}