import React, {useEffect, useState} from "react"
import customersAPI from "../services/customersAPI"
import {Link} from "react-router-dom"

const CustomersPage = () => {
    const [cutomers, setCustomers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAllCustomers()
    },[])

    const fetchAllCustomers = async () => {
        try{
            const data = await customersAPI.findAll()
            setCustomers(data)
            setIsLoading(false)
        }catch (e){
            console.log(e)
        }
    }

    const customersList = cutomers.map(customer => (
        <tr key={customer.id}>
            <th scope="row">1</th>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.company}</td>
            <td>
                <Link to={`/customers/${customer.id}`} className="btn btn-secondary">Edit</Link>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ))

    return (
        <div className="container">
            <h1>Customers</h1>
            <Link to='/customers/create' className="btn btn-primary">Add customer</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? "Is loading..." : customersList}
                </tbody>
            </table>
        </div>
    )
}

export default CustomersPage