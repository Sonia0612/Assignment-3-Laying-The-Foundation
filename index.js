import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
const Search=()=>{
    return(
        <div className="search">
        <input type="text" className="text" placeholder="Search Bar" />
        <button type="submit" className="btn"><i className="fa fa-search"></i></button>
        </div>
    )
}
const Header=()=>{
    return(
        <div className="head">
        <img className="image" src="https://img.freepik.com/free-vector/creative-square-logo-vector-template_460848-13897.jpg?w=740&t=st=1682861137~exp=1682861737~hmac=bb6a7174e7c38495e7ff8dd720f9f6b6c30237bb39265db73e27fbe831ba20c4" alt="Logo here"/>
        <Search/>
        <div className="icon">
        <i className='fas fa-user-circle'></i>
        </div>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));

//Passing attributes in React
root.render(<Header/>);
