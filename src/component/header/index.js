import { Bars3Icon, BellAlertIcon, BellIcon, QuestionMarkCircleIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import "./style.css"
import React from "react"

const Header = (props) => {
  return (
    <div className="header">
        <div className="left-header">
            <div >
                <Bars3Icon className="icon"/>
            </div>
            <div className="logo">
                Exly
            </div>
        </div>
        <div className="right-header">
            
                <BellIcon className="icon"/>
                <QuestionMarkCircleIcon className="icon"/>
                <UserCircleIcon className="icon"/>
        
        </div>
    </div>
  )
};

export default Header;
