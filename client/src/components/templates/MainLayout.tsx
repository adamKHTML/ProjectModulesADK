import React from 'react';
import LoginSection from '../organisms/LoginSection';
import Navbar from '../organisms/NavBar';
import { useLoginMutation } from '../../api/endpoints/auth';
import CompanySection from '../organisms/CompanySection';

interface MainLayoutProps {

    onLogin: (email: string, password: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
    const [login] = useLoginMutation();

    const handleLogin = async (email: string, password: string) => {
        try {
            await login({ email, password }).unwrap();
            alert('Connexion réussie!');
        } catch {
            alert('Erreur lors de la connexion');
        }
    };

    return (
        <div className="flex min-h-screen">
            <Navbar />
            <div className='Main'>
                <div className="w-full max-w-md p-4 bg-gray-100">
                    <LoginSection onLogin={handleLogin} />
                </div>
                <div className="w-full max-w-md p-4 bg-gray-100">
                    <CompanySection />
                </div>
            </div>
            <div className="flex-grow bg-white"></div>
        </div>
    );
};

export default MainLayout;
