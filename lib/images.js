import firebase from '../firebase'


export async function uploadImage(image, id) {
    
    if (image) {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(id);
        await imageRef.put(image)
        .then(() => {
            return {message: "Image uploaded successfully to Firebase."};
        });
    } else {
        return {message: "Please upload an image first."};
    }
}

export async function deleteImage(id) {
    const storageRef = firebase.storage().ref()
    const imageRef = storageRef.child(id)
    await imageRef.delete()
        .then(() => {
            return {message: "Image deleted successfully from Firebase."};
        }).catch(err => {
            console.log(err)
        }) ; 
}