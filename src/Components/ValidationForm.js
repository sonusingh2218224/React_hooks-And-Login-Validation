import React, { useState, useEffect } from 'react'

function ValidationForm() {
    const initialValue = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValue)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);

    }

    // forom submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true);

    }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }


    }, [formErrors])

    //validate function
    const validate = (values) => {
        const error = {}
        const regex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
        if (!values.username) {
            error.username = "Username is required"
        } if (!values.email) {
            error.email = "Email is required"
        } else if (!regex.test(values.email)) {
            error.email = "This is not a valid email"
        }
        if (!values.password) {
            error.password = "Password is required"
        } else if (values.password < 4) {
            error.password = "password must be more than 4 characacter"
        } else if (values.password > 10) {
            error.password = "password must be less than 10 character"
        }
        return error;
    }

    return (
        <div className='container'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='Ui message'></div>) : (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}


            <form onSubmit={handleSubmit}>
                <div className='ui-divider'></div>
                <div className='ui-form'>
                    <div className='field'>
                        <label>Username</label>
                        <input type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange}></input>
                    </div>
                    <p>{formErrors.username}</p>
                    <div className='field'>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='User Email' value={formValues.email} onChange={handleChange}></input>
                    </div>
                    <p>{formErrors.email}</p>

                    <div className='field'>
                        <label>Password</label>
                        <input type="text" name='password' placeholder='password' value={formValues.password} onChange={handleChange}></input>
                    </div>
                    <p>{formErrors.password}</p>

                    <button className='button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ValidationForm