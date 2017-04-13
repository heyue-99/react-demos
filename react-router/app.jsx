import App from 'test.js';
import TodoList from 'todolist.js';
import ListTodo from 'weiboform.js';
import Home from 'home.js';
import Music from 'music.js'

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
