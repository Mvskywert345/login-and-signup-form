import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Loginf() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/loginf', { email, password })
            .then(result => {
                console.log(result.data);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                   
                    alert(result.data);
                }
            })
            .catch(err => {
                console.log("Login error:", err);
                alert("An error occurred during login.");
            });
    };
    

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-5 rounded shadow-lg w-50">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-2"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-2"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-2">
                        Login
                    </button>
                </form>
                
                <p className="mt-3 text-center">NO user found</p>
                <Link to="/register" className="btn btn-outline-secondary w-100 rounded-2">
                    signup
                </Link>
            </div>
        </div>
    );
}

export default Loginf;
