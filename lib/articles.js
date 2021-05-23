import firebase from '../firebase'
import { deleteImage } from './images'
import srbenda from './srbDate'

export async function getArticlesData() {
    const res = firebase.firestore().collection('articles').orderBy('createdAt', 'desc')
    const data = await res.get()
    const articles = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: srbenda(new Date(doc.data().createdAt.toDate()).toString()),
    }))

    return articles
}

export async function getArticleData(id) {
    const res = firebase.firestore().collection('articles').doc(id)
    const data = await res.get()
    
    return {
        id: data.id,
        ...data.data(),
        createdAt: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data.timestamp),
    }
}

export async function deleteArticle(id) {
    try {
        const res = await firebase.firestore().collection('articles').doc(id).delete()
        const res2 = await deleteImage(id)
        return {
            code: 'SUCCESS'
        }
    }
    catch(err) {
        console.log(err)
        return {
            code: 'ERROR'
        }
    }
}

export async function addArticle(title, content) {
    let id
    
    try {
        const res = await firebase.firestore().collection('articles').add({
            title: title,
            content: content,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then((docRef) => {
            id = docRef.id
        })
        console.log(res)
        return {
            code: 'SUCCESS',
            id: id
        }
    }
    catch(err) {
        return {
            code: 'ERROR'
        }
    }
    
}

