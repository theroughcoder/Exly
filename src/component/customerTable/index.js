import { ArrowPathIcon } from "@heroicons/react/16/solid";
import "./style.css"
import React, { useEffect, useState } from "react"
import Pagination from "../pagination";

const avatarArr = ["#7af5ab", "#c58ade", "#de8a98", "#8aded1", "#ded58a", "#8aa8de" ]

const CustomerTable = (props) => {

    const [pagination , setPagination] = useState(1);

    useEffect(()=> {
        setPagination(1);
    }, [props.addUser, props.search])
    return (
        <>
            <div style={{ overflow: "auto" }}>

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

                        {props.user.slice(pagination*5-5, pagination*5).map((e) => <tr key={e.name}>
                            <td >
                                <div style={{
                                    display: "inline-block", margin: "0 10px",
                                    width: "30px", height: "30px", borderRadius: "20px",
                                    background: avatarArr[(Math.floor( (e.name.slice(0, 1).toUpperCase().charCodeAt() - 64) % 4))], color: "white", fontSize: "20px", textAlign: "center"
                                }}
                                    className="avatar">{e.name.slice(0, 1).toUpperCase() }</div>
                                {e.name}
                            </td>
                            <td>{e.phone}<img style={{ width: "16px" }} src="./whatapp.jpg" /> </td>
                            <td>{e.email}</td>
                            <td>{e.owner}</td>
                            <td>{e.offeringName}</td>
                            <td style={{ color: "white" }}>
                                <div style={{ background: "#3fd97a", padding: "5px", borderRadius: "6px" }}>
                                    <ArrowPathIcon style={{ width: "20px", transform: "translateY(4px)" }} />
                                    {e.payout}
                                </div>
                            </td>

                        </tr>
                        )}
                    </tbody>
                </table >
            </div>
            <Pagination length={props.user.length} pagination={pagination} setPagination={setPagination} />
        </>
    )
};

export default CustomerTable;
