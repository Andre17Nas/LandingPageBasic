import react from  'react'
/* Libs instaladas */
import { BrowserRouter, Switch, Route} from 'react-router-dom'
/* components */
import Header from './components/header/Header'

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header}/>
        </Switch>
    </BrowserRouter>
    );
}