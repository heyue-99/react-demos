 var { Router,
       Route,
       hashHistory,
       IndexRoute,
       IndexLink,
       Link
} = ReactRouter;

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			opacity: 0.5
		};
	}

	componentDidMount(){
		var timer = setInterval(function(){
			var opacity = this.state.opacity;
			opacity = opacity-0.05;
			if(opacity<0.1){
				this.setState({opacity: 1});
			}else{
				this.setState({opacity: opacity});
			}
		}.bind(this),300)
	}

	render(){
		return <div className="container">
				<h1 style={{ opacity:this.state.opacity }}>Welcome</h1>
			   </div>
	}
}

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
			<div className="container">
			<div className="box2">
				<div className={record}></div>
				<div className="music">
					<audio ref="audio" controls="controls" loop="loop" src='music.mp3'>
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="list">
        <div className="left">
            <div className='bac'></div>
            <ul role="nav" className="leftul">
            	<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            	<li><Link to="/weiboform" activeClassName="active">weibo-form</Link></li>
            	<li><Link to="/todolist" activeClassName="active">todolist</Link></li>
                <li><Link to="/music" activeClassName="active">music-player</Link></li>
            </ul>
            <div className="mygit">
                <a href="https://github.com/heyue-99">Follow me on Github</a>
            </div>
        </div>
            {this.props.children}
         </div>
        );
    }
}

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             todolist:[]
        }
    }

    handleAdd(mes){
        this.setState({
            todolist: mes
        });
    }

    render(){
         return(
            <div className="container">
                <div className='box1'>
                    <h2 className="top">react-todolist</h2>
                    <TypeNew add={this.handleAdd.bind(this)} todo={this.state.todolist} />
                    <ListTodo todo={this.state.todolist} del={this.handleAdd.bind(this)} />
                </div>
            </div>
        );
    }
};

class TypeNew extends React.Component{
    addContent(e){
         e.preventDefault();
        var tet = this.refs.content.value.trim();
        if(tet!=''){
            this.props.todo.push(tet);
            this.props.add(this.props.todo);
        }
        this.refs.content.value='';
    }

    render(){
        return(
            <form onSubmit={this.addContent.bind(this)} className="form">
                <input type="text" ref="content" placeHolder="请输入您的todolist" className="input" />
                <input type="submit" value="添加" className="add" />
            </form>
        );  
    }
 };

class ListTodo extends React.Component{
    delContent(e){
        var i = e.target.getAttribute("data-index");
        this.props.todo.splice(i,1);
        this.props.del(this.props.todo);
    }

    render(){
         return(
            <ul id="todo-list">
            {
                this.props.todo.map(function(mes,i){
                    return(
                        <li className="content">
                            <label>{mes}</label>
                            <span className="del" onClick={this.delContent.bind(this)} data-index={i}>×</span>
                        </li>
                    );
                }.bind(this))
            }
            </ul>
        );
    }
}

class weiboform extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			number: 0
		}
	}

	addContent(e){
		e.target.style.border = "2px solid #fa7d3c";
		this.refs.link.style.display = "none";
		this.refs.tip.style.display = "block";
	}

	handleBlur(e){
		e.target.style.border = "2px solid #cccccc";
		this.refs.link.style.display = "block";
		this.refs.tip.style.display = "none";
	}

	handleChange(e){
		this.setState({
			number: e.target.value.length
		});
	}
	handleclick(){
		this.refs.text.value='';
	}

	render(){
		return(
		<div className="container">
		<div className="box">
			<div className="title">
				<div ref="link">
					<a href="#">三生三世十里桃花</a>
				</div>
				<div className="tip" ref="tip">
					<span>{this.state.number<=140 ? '还可以输入' : '已超出'}<strong>{this.state.number<=140 ? 140-this.state.number : this.state.number-140}</strong>字</span>
				</div>
			</div>
			<form>
				<textarea ref="text" onFocus={this.addContent.bind(this)} onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)}></textarea>
				<input type="submit"  onClick={this.handleclick.bind(this)} value="发布" className={this.state.number>0 && this.state.number<=140 ? 'submit' : 'disabled'} disabled={this.state.number>0 && this.state.number<=140 ? '' : 'disabled'} />
			</form>
		</div>
		</div>
		);
	}
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={Home} />
        	<Route path="/weiboform" component={weiboform} />
       		<Route path="/todolist" component={TodoList} />
       		<Route path="/music" component={Music} />
       	</Route>
    </Router>
), document.getElementById('app'));
