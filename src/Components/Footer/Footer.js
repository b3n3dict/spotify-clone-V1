import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from '@material-ui/core';
const Footer = () => {
    return (
        <div className="footer">
           <div className="footer-left">
           <img  className="footer-albumLogo"src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe529a64193929.5aca8500ba9ab.jpg" alt="" />
           <div className="footer-songInfo">
               <h4>Yeah!</h4>
               <p>Album</p>
           </div>
           </div>
           <div className="footer-center">
           <ShuffleIcon className="footer__green" />
           <SkipPreviousIcon className="footer__icon" />
           <PlayCircleOutlineIcon  fontSize="large" className="footer__icon"
          />
               <SkipNextIcon  className="footer__icon" />
               <RepeatIcon className="footer__green" />
           </div>
           <div className="footer-right">
           <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
           </div>
        </div>
    )
}

export default Footer
