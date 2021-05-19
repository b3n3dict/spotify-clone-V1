import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { useStateProviderValue } from '../../Context/stateProvider';
const Sidebar = () => {
    const [{playlists},dispatch] = useStateProviderValue()
    console.log(playlists)
    return (
        <div className="sidebar">
         <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />

         <SidebarOption Icon={HomeIcon} title="Home"/>
         <SidebarOption Icon={SearchIcon} title="Search"/>
         <SidebarOption  Icon={LibraryMusicIcon}title="Your Library"/>
         <br />
         
         <strong className="sidebar_title"><QueueMusicIcon />
         PLAYLISTS</strong>
            <hr />
         {playlists?.items?.map((playlist)=>{
             return(
             <SidebarOption title={playlist.name} />

             )
         })}
        </div>
    )
}

export default Sidebar
