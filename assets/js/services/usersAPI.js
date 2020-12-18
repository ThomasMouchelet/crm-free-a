import axios from "axios"
import {API_USERS} from "../config"

function findAll(){
    return axios.get(API_USERS)
    .then(res => res.data["hydra:member"])
}

export default {
    findAll
}