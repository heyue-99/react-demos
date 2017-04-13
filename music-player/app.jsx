class Music extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isPlay : false
		};
	}

	play(event){
		this.setState({
       		isPlay : true
  		});
	}

	pause(event){
		this.setState({
       		isPlay : false
  		});
	}

	componentDidMount(){
		var audio = this.refs.audio;
		audio.addEventListener('play',this.play.bind(this));
		audio.addEventListener('pause',this.pause.bind(this));
	}

	render(){
		var record = this.state.isPlay ? 'play img' :'img';
		return(
			<div>
				<div className={record}></div>
				<div className="music">
					<audio ref="audio" controls="controls" loop="loop" src='music.mp3'>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Music />,
	document.getElementById("example")
);
