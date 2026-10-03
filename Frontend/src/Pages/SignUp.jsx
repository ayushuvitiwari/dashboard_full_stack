import React, { useState } from "react";
import "./CSS/SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [error, seterror] = useState('')
    const navigate = useNavigate();
    const loginpage =()=>{
        navigate('/login')
    }
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        seterror('')
        console.log(formData);
        console.log("Button clicked");


        try {
            const response = await fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                navigate('/dashboard');
            } else {
                seterror(data.message);

            }
        } catch (error) {
            seterror("Somthing Went Wrong");

        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1>Create Account</h1>
                <p className="signup-subtitle">Create your account to continue</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>


                <p className="login-text">
                    Already have an account? <a onClick={loginpage}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;