import React from "react"
import "../styles/app.css"
import ReactDOM from "react-dom"
import HomePage from "./pages/HomePage"
import {HashRouter, Switch, Route, withRouter} from "react-router-dom"
import InvoicesPage from "./pages/InvoicesPage"
import CustomersPage from "./pages/CustomersPage"
import NavBar from "./components/NavBar"
import CustomerForm from "./pages/CustomerForm"

const App = () => {

    const NavBarWithRouter = withRouter(NavBar)

    return (
        <HashRouter>
            <NavBarWithRouter />
            <Switch>
                <Route path="/customers/:id" component={CustomerForm} />
                <Route path="/invoices" component={InvoicesPage} />
                <Route path="/customers" component={CustomersPage} />
                <Route path="/" exact component={HomePage} />
            </Switch>
        </HashRouter>
    )
}

const rooElement = document.getElementById("app")
ReactDOM.render(<App />, rooElement)