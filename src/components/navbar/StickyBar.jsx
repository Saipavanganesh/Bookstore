import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function StickyBar(){
    const Location = useLocation();
    const removePages = ["/", "/signup"];
    let result = removePages.includes(Location.pathname) ? null : <NavBar/> 
    return result;
}

export default StickyBar