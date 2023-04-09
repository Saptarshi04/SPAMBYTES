import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import useNavigation from "../hooks/use-navigation";

const CustomerSignup_1 = ({ contract, signer, provider }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const { navigate } = useNavigation();

    const handleSubmit = (e) => {
        if ((!firstName, !lastName, !email)) {
            alert("Fill details");
        } else {
            e.preventDefault();
            console.log(
                `First Name is ${firstName}, Last Name is ${lastName} and the email address is ${email}`
            );
            navigate("/buyer_signup_2");
        }
    };

    return (
        <div>
            <h1>Buyer SignUp</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={firstName}
                    placeholder="Enter First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                />
                <input
                    value={lastName}
                    placeholder="Enter Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                />
                <input
                    value={email}
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <Button primary type="submit">
                    Continue
                </Button>
            </form>
        </div>
    );
};

export default CustomerSignup_1;