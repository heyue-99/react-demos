import App from 'test.jsx';
import TodoList from 'todolist.jsx';
import ListTodo from 'weiboform.jsx';
import Home from 'home.jsx';
import Music from 'music.jsx'

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
