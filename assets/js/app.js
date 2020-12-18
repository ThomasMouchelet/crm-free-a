import React from "react"
import ReactDOM from "react-dom"
import HomePage from "./pages/HomePage"
import {HashRouter, Switch, Route, withRouter} from "react-router-dom"
import InvoicesPage from "./pages/InvoicesPage"
import CustomersPage from "./pages/CustomersPage"
import NavBar from "./components/NavBar"

const App = () => {

    const NavBarWithRouter = withRouter(NavBar)

    return (
        <HashRouter>
            <NavBarWithRouter />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/invoices" component={InvoicesPage} />
                <Route path="/customers" component={CustomersPage} />
            </Switch>
        </HashRouter>
    )
}

const rooElement = document.getElementById("app")
ReactDOM.render(<App />, rooElement)