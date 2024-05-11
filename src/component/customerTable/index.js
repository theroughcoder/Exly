import { ArrowPathIcon } from "@heroicons/react/16/solid";
import "./style.css"
import React from "react"

const CustomerTable = (props) => {
    return (
        
        <table>
            <thead>
                <tr className="table-head">
                    <th style={{ maxWidth: "160px", width: "500px" }}>Customer Name</th>
                    <th>Phone No</th>
                    <th>Email ID</th>
                    <th>Offering Owner</th>
                    <th>Offering Name</th>
                    <th>Payout Status</th>
                </tr>
            </thead>
            <tbody>

                {props.user.map((e) => <tr key={e.name}>
                    <td >
                        <div style={{
                            display: "inline-block", margin: "0 10px",
                            width: "30px", height: "30px", borderRadius: "20px",
                            background: "#7af5ab", color: "white", fontSize: "20px", textAlign: "center"
                        }}
                            className="avtar">{e.name.slice(0, 1)}</div>
                        {e.name}
                    </td>
                    <td>{e.phone}<img style={{ width: "16px" }} src="./whatapp.jpg" /> </td>
                    <td>{e.email}</td>
                    <td>{e.owner}</td>
                    <td>{e.offeringName}</td>
                    <td style={{color: "white"}}>
                        <div style={{background: "#3fd97a", padding: "5px", borderRadius: "6px" }}>
                        <ArrowPathIcon style={{width : "20px", transform: "translateY(4px)"}}/>
                        {e.payout}
                        </div>
                    </td>

                </tr>
                )}
            </tbody>
        </table >
    )
};

export default CustomerTable;
