import React, { useState } from 'react'

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const [usererror, SetUserError] = useState("");
    const [userpassError, SetUserpassError] = useState("");

    //useremail validation
    const userHanlder = (e) => {
        let items = e.target.value
        if (items.length < 3) {
            SetUserError(true)

        } else {
            SetUserError(false)
        }
        setUser(items)
    }

    //user password validation

    const passwordHandler = (e) => {
        const item = e.target.value
        if (item.length < 3) {
            SetUserpassError(true)
        } else {
            SetUserpassError(false)
        }
        setPassword(item)
    }





    function submitHandler(e) {
        if (user.length < 3 || password.length < 3) {
            alert("type correct value")
        } else {
            alert("all good");
        }
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter User id' onChange={userHanlder} /> {usererror ? <span>User Not valid</span> : ""}
                <br></br>
                <input type="text" placeholder='Enter User password' onChange={passwordHandler} /> {userpassError ? <span>password is less then 8 charcter</span> : ""}<br className='mt-4'></br>
                <button type='submit' className='mt-4 d-flex ms-4'>Login</button>
            </form>
        </div>
    )
}

export default Login