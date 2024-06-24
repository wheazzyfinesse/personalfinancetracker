import { SignedOut, SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { Link, Navigate } from "react-router-dom";

const Auth = () => {
    const { user } = useUser();
    if (user) return <Navigate to="/" />;
    return (
        <div className="sign-in-container">
            <h1>Welcome to Your Personal Finance Tracker</h1>
            <p>Keep track of all your finances and manage your expenses</p>
            <div>
                <SignedOut>
                    <SignUpButton mode="modal" />
                    <SignInButton mode="modal" />
                </SignedOut>
            </div>
            <span>&copy;2024 <Link to="https://www.techfinesse.studio">techfinesse.studio</Link></span>
        </div>
    )
}

export default Auth