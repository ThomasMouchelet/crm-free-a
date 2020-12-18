import axios from "axios"
import {API_INVOICES} from "../config"

function findAll(){
    return axios.get(API_INVOICES)
    .then(res => res.data["hydra:member"])
}

export default {
    findAll
}