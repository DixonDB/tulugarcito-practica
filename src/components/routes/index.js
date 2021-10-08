import { routes } from './routes'
import  { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { NavBar } from '../organims/index'

export default function Routes () {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Redirect exact path='/' to='/home' />
                {
                    routes.map(rute => <Route exact path={rute.path} component={rute.component} />)
                }
            </Switch>
        </Router>
    )
}