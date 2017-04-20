 var { Router,
       Route,
       hashHistory,
       IndexRoute
} = ReactRouter;

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
