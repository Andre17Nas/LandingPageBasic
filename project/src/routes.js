import react from  'react'
/* Libs instaladas */
import { BrowserRouter, Switch, Route} from 'react-router-dom'
/* components */
import Header from './components/header/Header'
import Product from './components/product'

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header}/>
            <Route path="/" component={Product}/>
        </Switch>
    </BrowserRouter>
    );
}