import './Player.css'
import Sidebar from '../../Components/SideBar/Sidebar'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'
const Player = ({spotify}) => {
    return (
        <div className="player">
        <div className="player_body">
           {/* sideBar */}
           <Sidebar />
           {/* body */}
        <Body spotify={spotify} />
        </div>
           {/* footer */}
           <Footer />
        </div>
    )
}

export default Player
