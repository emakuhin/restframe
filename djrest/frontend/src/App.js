import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/users.js'
import TodoList from './components/todos.js'
import ProjectList from './components/projects.js'
import axios from 'axios'
import {HashRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/Auth.js'
import Cookies from 'universal-cookie';


const NotFound404 = ({ location }) => {
  return (
    <div>
        <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'todos': [],
            'projects': [],
            'users': [],
            'token': ''
        }
    }
    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, ()=>this.load_data())
    }
    is_authenticated() {
        return this.state.token != ''
    }
    logout() {
        this.set_token('')
    }
    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, ()=>this.load_data())
    }
    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated())
        {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }
    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/todos/', {headers})
            .then(response => {
                this.setState({todos: response.data})
            }).catch(error => {console.log(error)
            this.setState({todos: []})
            })
        axios.get('http://127.0.0.1:8000/api/projects/', {headers})
            .then(response => {
                this.setState({projects: response.data})
            }).catch(error => {console.log(error)
            this.setState({projects: []})
            })
        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(response => {
                this.setState({users: response.data})
            }).catch(error => {console.log(error)
            this.setState({users: []})
            })
    }

    componentDidMount() {
        this.get_token_from_storage()
       }
    get_token(username, password) {
       axios
       .post('http://127.0.0.1:8000/api-token-auth/',
            {"username": username, "password": password}
       )
        .then(response => {
            this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
     }

    render() {
        return (
            <div>
            <HashRouter>
            <nav  class='navbar navbar-inverse' role='navigation'>
                <div class='container'>
                        <ul class='nav navbar-nav'>
                            <li>
                                <Link to='/users'>Users</Link>
                            </li>
                            <li>
                                <Link to='/todos'>Todos</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                             </li>
                             <li>
                                {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                             </li>
                        </ul>
                </div>
                </nav>
                <div>
                    <Switch>
                     <Route exact path='/users' component = {() => <UserList users={this.state.users} />} />
                     <Route exact path='/todos' component = {() => <TodoList todos={this.state.todos} />} />
                     <Route exact path='/projects' component = {() => <ProjectList projects={this.state.projects} />} />
                     <Route exact path='/login' component = {() => <LoginForm get_token={(username, password) => this.get_token(username, password)}/>} />
                     <Redirect from='/' to='users' />
                     <Route component={NotFound404} />
            </Switch>

                </div>
                <div class='clr'></div>
                <div class='footer'>
                    Footer
                </div>
                </HashRouter>
                </div>
        )
    }
}

export default App;
