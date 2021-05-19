
import { useEffect } from 'react';
import './App.css';
import Login from './Screen/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Screen/Player/Player';
import {useStateProviderValue} from './Context/stateProvider';

const spotify = new SpotifyWebApi();
function App() {
    // const [token,setToken] = useState(null);
    const [{user,token},dispatch] = useStateProviderValue();
     useEffect(()=>{
         const hash = getTokenFromUrl();
         window.location.hash = "";
          const _token = hash.access_token;

           if(_token){

            dispatch({
              type:"SET_TOKEN",
              token:_token
            })
            //  setToken(_token)
     
             spotify.setAccessToken(_token)
 
             spotify.getMe().then((user)=>{
              dispatch({
                type:"SET_USER",
                user:user,
              })
             })

            spotify.getUserPlaylists().then((playlists)=>{
                   dispatch({
                     type:"SET_PLAYLISTS",
                      playlists:playlists
                      
                   })
                   
             })
             spotify.getPlaylist('37i9dQZF1E37fKyADuTW3e').then((response)=>(
               dispatch({
                 type:"SET_DISCOVER_WEEKLY",
                 discover_weekly:response,
               })
             ))
           }
           
           
     },[token,dispatch])
    // console.log(user)
  
    // console.log(token)

  return (
    <div className="App">
    {
      token ? (
        <Player spotify={spotify}/>
      ) :
      (
        <Login/>
      )
    }
    
    </div>
  );
}

export default App;
