import React from "react";

interface InputProps {
    email: string;
    password: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ email, password, onEmailChange, onPasswordChange }) => {
    return (
        <>
            <div className="login-head">
                <h2 className='login-title'>Login In</h2>
                <div className="input-wrapper">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={onEmailChange}
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={onPasswordChange}
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
        </>
    );
};

export default Input;
