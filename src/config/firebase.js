import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, collection, doc, addDoc, setDoc, getDocs,getDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCUTHRQMY-qHiXmXEW6YRzY6K03onz-KlQ",
  authDomain: "olx-fin.firebaseapp.com",
  projectId: "olx-fin",
  storageBucket: "olx-fin.appspot.com",
  messagingSenderId: "846020266738",
  appId: "1:846020266738:web:65b893e69013e2ce689e6b",
  measurementId: "G-RDV8CD5E5D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage()



async function register(name,email,password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const uid = userCredential.user.uid
        await setDoc(doc(db, "users", uid), {
          email,
          name,
          password
        })
        alert('Successfully Registered and added in database')
      } catch (e) {
        alert(e.message)
      }
    
    }

  async function login(email,password){
    try{
      const userObj = await signInWithEmailAndPassword(auth, email, password)
      // const user = await getDoc(doc(db, 'users', userObj.user.uid))
      // return user.data()
      const docRef = doc(db, "users",userObj.user.uid);
      const docSnap = await getDoc(docRef);
      return docSnap.data()
      // console.log(user,'user data---------->');
      } catch (e) {
    alert(e.message)
  }
}
  async function SellAdd(proname,price,category,discription,urls){
    try{
      const selldata = addDoc(collection(db, "Products"), {
        proname,
        price,
        category,
        discription,
        urls
    })
    alert("Add Successfully posted")
    console.log(category,"CATEGORYYYyYYY");
    }
    catch(e){
      alert(e.message)
    }
  }

  async function uploadImagesInStorage(files) {
    let urls = []
    for(let i = 0; i < files.length; i++) {
      const storageRef = ref(storage, `/ProductsImages/${files[i].name}`);
      const response = await uploadBytes(storageRef, files[i])
      const url = await getDownloadURL(response.ref)
      urls.push(url)
    }
  
    return urls
  }

  async function getAds() {
    const querySnapshot = await getDocs(collection(db, "Products"))
    const ads = []
    querySnapshot.forEach((doc) => {
      ads.push({ ...doc.data(), id: doc.id })
    })
    return ads
  }

  const getaAdd = async (paramState) => {
    const docRef = doc(db, "Products", paramState);
    const docSnap = await getDoc(docRef);



    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }



    return docSnap.data()


}

    export{
        register,
        login,
        SellAdd,
        uploadImagesInStorage,
        getAds,
        getaAdd
    }