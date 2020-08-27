import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import {Header} from './Header';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  media: {
    margin: "-70px auto 0",
    width: "80%",
    height: 140,
    borderRadius: "4px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


const audioBookPlaylist = [
	{
		title: 'Hamlet - Act I',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act II',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act III',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act IV',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act V',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	}
]


export class AudioCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  		isPlaying: false,
  		playbackInstance: null,
  		currentIndex: 0,
  		volume: 1.0,
  		isBuffering: true,
      play: false,
      pause: true,
  	};
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audioIcon=useStyles.playIcon;
    this.audio = new Audio(this.url);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.loadAudio = this.loadAudio.bind(this);
    this.onPlaybackStatusUpdate = this.onPlaybackStatusUpdate.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handlePreviousTrack = this.handlePreviousTrack.bind(this);
    this.handleNextTrack = this.handleNextTrack.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

	async componentDidMount() {
		try {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
				playsInSilentModeIOS: true,
				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
				shouldDuckAndroid: true,
				staysActiveInBackground: true,
				playThroughEarpieceAndroid: true
			})

			this.loadAudio()
		} catch (e) {
			console.log(e)
		}
	}

	async loadAudio() {
		const { currentIndex, isPlaying, volume } = this.state

		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: audioBookPlaylist[currentIndex].uri
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume
			}

			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
			await playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})
		} catch (e) {
			console.log(e)
		}
	}

	onPlaybackStatusUpdate = status => {
		this.setState({
			isBuffering: status.isBuffering
		})
	}

	handlePlayPause = async () => {
		const { isPlaying, playbackInstance } = this.state
		isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

		this.setState({
			isPlaying: !isPlaying
		})
	}

	handlePreviousTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}

	handleNextTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}


  render(){

    const item = this.props.item;

    return (
      <Card className={useStyles.root} variant="outlined">

        <Header item={item}/>

        <div className={useStyles.details}>

          <CardContent className={useStyles.content}>
            <Typography component="h5" variant="h5">
              {item.titulo}
            </Typography>

            <Typography variant="subtitle1" color="textSecondary">
              {item.descripcion}
            </Typography>

            <br />
            <img src={item.portada_url} alt="Portada" />

            <div>
              <br />
              <audio controls="controls">
                <source src={item.audio_url} type="audio/mp3"></source>
                Your browser does not support the audio element.
              </audio>
            </div>
            {/*<CardMedia
              className={useStyles.media}
              src={logo}
              component="img"
              title="Live from space album cover"
            />*/}

          </CardContent>

        </div>

      </Card>
    );
  }
}





  //<AudioPlayer
    //src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    // Try other props!
  ///>

  //<audio controls="controls">
    //<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3"></source>
    //Your browser does not support the audio element.
  //</audio>

  //<AudioPlayer
    //autoPlay
    //src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    //onPlay={e => console.log("onPlay")}
    // other props here
  ///>

  /*<div className={useStyles.controls}>
    <Button color="primary" Click={this.handlePreviousTrack}>
      {useTheme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
    </Button>
    <Button aria-label="play/pause" onClick={this.togglePlay}> {this.state.play ? 'Pause' : 'Play'}
      <PlayArrowIcon className={this.audioIcon} />
    </Button>
    <Button aria-label="next" onClick={this.handleNextTrack}>
      {useTheme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
    </Button>

    <audio controls="controls">
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3"></source>
      Your browser does not support the audio element.
    </audio>

  </div>*/
