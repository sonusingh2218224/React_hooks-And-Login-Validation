
import React, { useState } from 'react'
import "./login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newEntry, setNewEntry] = useState([])

    const emailHandler = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)

    }
    const passwordHandler = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (email && password) {
            const allentry = { email: email, password: password };
            setNewEntry([...newEntry, allentry]);
            console.log(allentry)
            setEmail("");
            setPassword("")
        } else {
            alert("Please fill Input field")
        }


    }

    return (
        <>
            <form className=' d-flex flex-column justify-content-center align-items-center mt-4 con' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label for="email" className="form-label ">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={emailHandler} />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={passwordHandler} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            <div>
                {newEntry.map((e) => {
                    return <div >
                        <p>{e.email}</p>
                        <p>{e.password}</p>
                    </div>

                })}
            </div>
        </>
    )
}

export default Login