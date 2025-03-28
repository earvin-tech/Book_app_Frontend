import { useState } from "react";

function Home() {
    return(
        <>
            <div>
                <h1>Welcome to the Book App!</h1>
                <a href="/login">
                    <button id="loginBtn">Log In</button>
                </a>
                <a href="/signup" target="_blank">
                    <button id="signupBtn">Sign Up</button>
                </a>
            </div>
        </>
    )
}

export default Home;