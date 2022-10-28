import React, { useState, useEffect } from "react";
import Users from "./Components/Ugo";
import { USER_PER_PAGE } from "./Files/MyUser";
import ErrorBoundary  from "./Components/ErrorBoundary";
import axios from "axios";
import Pagination from "./Components/Pagination";
import { NavLink} from "react-router-dom";
import './index.css';


const url = `https://randomuser.me/api/?page=3&results=50&seed=abc`;

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const FetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setLoading(false);
      setUsers(res.data.results);

      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
    };
    FetchUsers();
  }, []);
  const handleClick = (num) => {
    setPage(num);
  };
  

  return (
    <div>
      <h1 className="customer-data">Client Records</h1>
      
      {loading ? (
        <p>loading...</p>
        
      ) : (
        <>
       
          <Users users={users} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} setPage={setPage} page={page} />
          <ErrorBoundary />
        </>
      )}

      <div className="homelink">
      <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
}

export default FetchUsers;
