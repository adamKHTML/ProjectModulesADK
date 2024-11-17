import React from 'react';
import LoginForm from '../molecules/LoginForm';

interface LoginSectionProps {
    onLogin: (email: string, password: string) => void;
}

const LoginSection: React.FC<LoginSectionProps> = ({ onLogin }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <LoginForm onLogin={onLogin} />
        </div>
    );
};

export default LoginSection;
