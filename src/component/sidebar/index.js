import React from "react"
import "./style.css"
import { ArrowDownIcon, ArrowsRightLeftIcon, ChevronDownIcon, CurrencyDollarIcon, FireIcon, GlobeAltIcon, QrCodeIcon, SparklesIcon, Squares2X2Icon, StarIcon, UsersIcon } from "@heroicons/react/16/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

const Sidebar = (props) => {
    return (
        <div className="sidebar" style={{left : props.openSidebar ? "0" : ""}}>
            <div className="sidebar-up">

                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <QrCodeIcon className="icon" />
                        <span>Dashboard</span>
                    </div>
                    <div className="down-arrow">

                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <Squares2X2Icon className="icon" />
                        <span>My Offerings</span>
                    </div>
                    <div className="down-arrow">

                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <CurrencyDollarIcon className="icon" />
                        <span>Sales & Marketing</span>
                    </div>
                    <div className="down-arrow">

                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <ArrowsRightLeftIcon className="icon" />
                        <span>Transactions</span>
                    </div>
                    <div className="down-arrow">

                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <UsersIcon className="icon" />
                        <span>Contacts</span>
                    </div>
                    <div className="down-arrow">
                        <ChevronDownIcon className="icon down-arrow" />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <GlobeAltIcon className="icon" />
                        <span>Manage Webpack</span>
                    </div>
                    <div className="down-arrow">

                        <ChevronDownIcon className="icon down-arrow" />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <StarIcon className="icon" />
                        <span>Workflow Tools</span>
                    </div>
                    <div className="down-arrow">

                        <ChevronDownIcon className="icon down-arrow" />
                    </div>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-items-left">
                        <SparklesIcon className="icon" />
                        <span>Exly Plus</span>
                    </div>
                    <div className="down-arrow">
                        <ChevronDownIcon className="icon down-arrow" />

                    </div>
                </div>
            </div>
            <div className="sidebar-down">
                <div style={{marginBottom: "40px ", padding: "10px 5px", background: "#f1edfa", color:"#a27dff", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
                        <FireIcon className="icon"style={{color:"#a27dff" }} />
                        <span>Talk to our expert</span>
                    </div>
                    <ChevronDoubleRightIcon className="icon"style={{color:"#a27dff"}} />
                </div>
            </div>

        </div>
    )
};

export default Sidebar;
