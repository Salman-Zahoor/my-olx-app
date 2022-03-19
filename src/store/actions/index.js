import {db} from "../../config/firebase"
import {collection,onSnapshot} from "firebase/firestore";

function addAds(){
  return(dispatch)=>{
    onSnapshot(collection(db, "Products"),(querySnapshot)=>{
      const ads = []
      querySnapshot.forEach((doc) => {
        ads.push({ ...doc.data(), id: doc.id })
      })
      dispatch({
        type: 'ADD_ADS',
        payload:ads
      })
    })
  }
}

function addUser(user) {
return{
  type:'ADD_USER',//nishani
  payload:user
}
}

function removeUser() {
return{
  type:'REMOVE_USER',//nishani
}
}

export {
  addAds,
  addUser,
  removeUser
}