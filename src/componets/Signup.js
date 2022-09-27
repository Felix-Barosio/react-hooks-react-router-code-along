import React from "react";

function Signup() {
    return (
        <div>
            <h1>Signup</h1>
            <h3>Create Accout</h3>
            <form>
                <div><input type="text" placeholder="Enter your email address" /></div>
                <div><input type="text" placeholder="Enter your password" /></div>
                <input type="submit" value="Submit" />
            </form >
        </div >
    )
}

export default Signup;