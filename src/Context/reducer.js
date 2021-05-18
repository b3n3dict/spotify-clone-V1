export const intialState = {
    user: null,
    token: null,
    playlists : [],
    playing: false,
    item: null
}

 const reducer =(state,action)=>{

   switch(action.type){
      case 'SET_USER':
          return{
              ...state,
              user: action.user
          };
       case 'SET_TOKEN':
       return{
          ...state,
          token:action.token
       }   
          default : 
          return state


        }
}
export default reducer;