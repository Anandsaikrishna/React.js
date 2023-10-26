import React from "react";
import ReactDom  from "react-dom/client";
import Headerlogo from "./Header Component/Headerlogo";
import Navbar from "./Header Component/Navitems";
import Cards from "./Header Component/cards";



var htmlroot=document.getElementById("root");
var rootReact=ReactDom.createRoot(htmlroot);



const AppLayout=()=>{
    return(
        <div className="AppLayout">
            <div className="header">
                <Headerlogo/>
                <Navbar/>
                
            </div>
            <Cards/>
        </div>
    )
}
rootReact.render(<AppLayout/>)