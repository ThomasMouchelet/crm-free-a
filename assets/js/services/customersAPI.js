import axios from "axios"
import {API_CUSTOMERS} from "../config"

function findAll(){
    return axios.get(API_CUSTOMERS)
    .then(res => res.data["hydra:member"])
}

export default {
    findAll
}