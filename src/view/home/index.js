import { QueueListIcon } from "@heroicons/react/16/solid";
import Header from "../../component/header";
import "./style.css"
import React, { useEffect, useState } from "react"
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { userData } from "../../data/users"
import { Button, Pagination } from "@mui/material";
import AddBookingForm from "../../component/addBookingForm";
import CustomerTable from "../../component/customerTable"

const Home = (props) => {

  const [user, setUser] = useState(userData);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [filterUser, setFilterUser] = useState([]);
  const [openAddForm, setOpenAddForm] = useState(false);


  useEffect(() => {

    setFilterUser(user);
  }, [user])

  function addNewCustomer(obj) {
    let list = [...user];
    list.unshift(obj);
    setUser(list);
    setSearch("");
  }

  useEffect(() => {
    if (search == "") {
      setFilterUser(user);
    } else {

      let list = user.filter((e) => search.toLowerCase() == e[searchBy].slice(0, search.length).toLowerCase())
      setFilterUser(list)
    }
  }, [search, searchBy])

  return (
    <div className="home">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "18px", fontWeight: "600" }}>Manage Transactions</div>
        <Button className="customer-add-btn" onClick={() => setOpenAddForm(true)} variant="contained" style={{ background: "#6e13c3", display: "flex", gap: "2px", fontSize: "14px", fontWeight: "600" }}><QueueListIcon style={{ width: "20px" }} /> <span style={{ display: "block", transform: "translateY(-1px)" }}> Add Customer</span> </Button>

      </div>
      <div className="transaction-menu">
        <div className="transaction-menu-btn active-menu-btn">All Transactions</div>
        <div className="transaction-menu-btn " >Manage Subscriptions </div>
      </div>
      <div className="search">
        <div className="search-cont">
          <input value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" placeholder="Select search by..." />
          <select className="search-select" name="cars" id="cars" defaultValue={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            <option value="" disabled selected>Select By</option>
            <option value="name">Name</option>
            <option value="email">Email</option>

          </select>
        </div>
      </div>

      <div  >
        <CustomerTable user={filterUser} search={search} addUser={user}/>

        {openAddForm && <AddBookingForm setOpenAddForm={setOpenAddForm} addNewCustomer={addNewCustomer} />}

      </div>


    </div>
  )
};

export default Home;
