import React, { useState } from 'react';

function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function loginHandle(event) {

        if (user.length < 4 || password.length < 4) {
            alert("please enter correct values")

        } else {
            alert("GREAT")
        }
        event.preventDefault()
    }

    function userHandler(event) {
        let item = event.target.value;
        if (item.length < 4) {
            setUserError(true)
        } else {
            setUserError(false);
        }
        setUser(item);
    }

    function passwordHandler(event) {
        let item = event.target.value;
        if (item.length < 4) {
            setPasswordError(true)
        } else {
            setPasswordError(false);
        }
        setPassword(item);
    }


    return (
        <>
            <h1>LOGIN FORM</h1>
            <form onSubmit={loginHandle}>

                <div className="input">
                    <label htmlFor="name" > NAME</label>
                    <input
                        type="name"
                        autoComplete='off'
                        name='name'
                        id='name'
                        placeholder='Enter your full name'
                        onChange={userHandler} />
                    {userError ? <span>user name not valid</span> : ""}
                </div>
                
                <div className="input">
                <label htmlFor="number" > NUMBER</label>
                <input
                    type="number"
                    autoComplete='off'
                    name='number'
                    id='number'
                    placeholder='Enter your contact number' />
                    </div>
                
                <div className="input">
                    <label htmlFor="email">EMAIL</label>
                <input
                    type="email"
                    autoComplete='off'
                    name='email'
                    id='email'
                    placeholder='Enter your email ID' />
                    </div>
                
                <div className="input">
                    <label htmlFor="password">PASSWORD</label>
                <input
                    type="password"
                    autoComplete='off'
                    name='password'
                    id='password'
                    placeholder='Enter password'
                    onChange={passwordHandler} />
                {passwordError ? <span> password not valid</span> : ""}
                </div>
                
                <div className="submit">
                <button
                    type="submit"
                    placeholder='Submit' >LogIn</button>
                    </div>
            </form>
        </>
    )
}
export default Login;
