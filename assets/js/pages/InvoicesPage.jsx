import React, {useEffect, useState} from "react"
import invoicesAPI from "../services/invoicesAPI"

const InvoicesPage = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(()=>{
        fetchAllInvoices()
    },[])

    const fetchAllInvoices = async () => {
        try{
            const data = await invoicesAPI.findAll()
            setInvoices(data)
        }catch (e){
            console.log(e)
        }
    }

    const invoicesList = invoices.map(invoice => (
        <tr key={invoice.id}>
            <th scope="row">1</th>
            <td>{invoice.amount}</td>
            <td>{invoice.sendingAt}</td>
            <td>{invoice.status}</td>
            <td>{invoice.customer.company}</td>
            <td>
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ))

    return (
        <div className="container">
            <h1>Invoices</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Sending At</th>
                        <th scope="col">Status</th>
                        <th scope="col">Customuer</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {invoicesList}
                </tbody>
            </table>
        </div>
    )
}

export default InvoicesPage