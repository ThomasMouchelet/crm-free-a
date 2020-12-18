import React , {useEffect, useState} from "react"
import usersAPI from "../services/usersAPI"

const HomePage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchAllUsers()
    },[])

    const fetchAllUsers = async () => {
        try{
            const data = await usersAPI.findAll()
            setUsers(data)
        }catch (e){
            console.log(e)
        }
    }

    const usersList = users.map(user => (
        <div key={user.id}>
            <strong>
                {user.firstName} {user.lastName} :
            </strong>
            {user.email}
        </div>
    ))

    return (
        <div>
            {usersList}
        </div>
    )
}

export default HomePage