//import hook react
import React, { useState, useEffect } from "react";

//import useNavigate
import { useNavigate } from "react-router-dom";

//import api
import api from "../api";

//import axios
import axios from "axios";

function Dashboard() {
  //state user
  const [user, setUser] = useState({});

  //useNavigate
  const navigate = useNavigate();

  //token
  const token = localStorage.getItem("token");

  //function "fetchData"
  const fetchData = async () => {
    //set axios header dengan type Authorization + Bearer token
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      //fetch user from Rest API
      await api.get("/api/user").then((response) => {
        //set response user to state
        setUser(response.data);
      });
    }
  };

  //hook useEffect
  useEffect(() => {
    //check token empty
    if (!token) {
      //redirect to login page
      navigate("/login");
    }

    //call function "fetchData"
    fetchData();
  }, []);

  //function logout
  const logoutHanlder = async () => {
    //set axios header dengan type Authorization + Bearer token
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    //fetch Rest API
    await api.post("/api/logout").then(() => {
      //remove token from localStorage
      localStorage.removeItem("token");

      //redirect to login
      navigate("/login");
    });
  };

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              SELAMAT DATANG{" "}
              <strong className="text-uppercase">{user.name}</strong>
              <hr />
              <button onClick={logoutHanlder} className="btn btn-md btn-danger">
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
