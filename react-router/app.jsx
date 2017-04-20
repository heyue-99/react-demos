 var { Router,
       Route,
       hashHistory,
       IndexRoute
} = ReactRouter;

default class Home extends React.Component{
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






ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={Home} />
        	<Route path="/weiboform" component={ListTodo} />
       		<Route path="/todolist" component={TodoList} />
       		<Route path="/music" component={Music} />
       	</Route>
    </Router>
), document.getElementById('app'));
