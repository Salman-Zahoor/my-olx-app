function reducer(state={},action) {
switch(action.type){
case 'ADD_USER':return{...state,user:action.payload}
case 'REMOVE_USER':return{...state,user:null}
default:return state
}
}

export default reducer
// {
// user:{name:'Kashif',...}
// }