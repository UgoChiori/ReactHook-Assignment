import React, { useState, useEffect } from "react";
import Users from "./Components/Users";
import { USER_PER_PAGE } from "./Files/MyUser";

import axios from "axios";
import Pagination from "./Components/Pagination";

import { Link } from "react-router-dom";
import "./index.css";

import { NavLink } from "react-router-dom";
import "./index.css";

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
        <p>LOADING...</p>
      ) : (
        <>
          <Users users={users} page={page} />
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
            setPage={setPage}
            page={page}
          />
        </>
      )}

      <div className="homelink">
        <Link to="/">Home</Link>

        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
}

export default FetchUsers;
