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
  addUser,
  removeUser
}