import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/users.js'
import TodoList from './components/todos.js'
import ProjectList from './components/projects.js'
import axios from 'axios'
import {HashRouter, Route, Link, Switch, Redirect} from 'react-router-dom'


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
            'users': []
        }
    }

    componentDidMount() {
       axios
       .get('http://127.0.0.1:8000/api/todos/')
       .then(response => {
           const todos = response.data
               this.setState(
               {
                   'todos': todos
               }
           )
       }).catch(error => console.log(error))
       axios
       .get('http://127.0.0.1:8000/api/users/')
       .then(response => {
           const users = response.data
               this.setState(
               {
                   'users': users
               }
           )
       }).catch(error => console.log(error))
       axios
       .get('http://127.0.0.1:8000/api/projects/')
       .then(response => {
           const projects = response.data
               this.setState(
               {
                   'projects': projects
               }
           )
       }).catch(error => console.log(error))
       }

    render() {
        return (
            <div>
            <HashRouter>
                <div class='header'>
                                    <ul>
                            <li>
                                <Link to='/users'>Users</Link>
                            </li>
                            <li>
                                <Link to='/todos'>Todos</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                        </ul>
                </div>
                <div>
                    <Switch>
                     <Route exact path='/users' component = {() => <UserList users={this.state.users} />} />
                     <Route exact path='/todos' component = {() => <TodoList todos={this.state.todos} />} />
                     <Route exact path='/projects' component = {() => <ProjectList projects={this.state.projects} />} />
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
