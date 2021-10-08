import { routes } from './routes'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Routes () {
    return(
        <Router>
            <Switch>
                {
                    routes.map(rute => <Route exact path={rute.path} component={rute.component} />)
                }
            </Switch>
        </Router>
    )
}