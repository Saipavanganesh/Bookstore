import axios from "axios";

let token;
function Authorize(){
    return token = {
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
} 

export const getBooks = async () => {
    let response = await axios.get(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book"
    )
    return response;
}