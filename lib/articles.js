import firebase from '../firebase'

export async function getArticlesData() {
    const res = firebase.firestore().collection('articles')
    const data = await res.get()
    const articles = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    return articles
}

export async function getArticleData(id) {
    const res = firebase.firestore().collection('articles').doc(id)
    const data = await res.get()
    
    console.log(data)
    
    return {
        id: data.id,
        ...data.data()
    }
}