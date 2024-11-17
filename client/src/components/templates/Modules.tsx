import React from 'react';
import Navbar from '../organisms/NavBar';
import { useGetModulesQuery } from '../../api/endpoints/modules';

const Modules: React.FC = () => {
    const { data: modulesData, isLoading, error } = useGetModulesQuery();
    console.log("Data received from API:", modulesData);


    const moduleList = Array.isArray(modulesData) ? modulesData : modulesData?.modules || [];

    // formatage de date en JJ/MM/AAAA
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return isNaN(date.getTime())
            ? "Date non valide"
            : date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
    };

    return (
        <div className="flex min-h-screen">
            <Navbar />
            <div className="w-full max-w-md p-4 bg-gray-100">
                {isLoading && <p>Chargement des modules...</p>}
                {error && <p>Erreur lors du chargement des modules</p>}
                {moduleList.length > 0 ? (
                    <ul>
                        {moduleList.map((module, index) => (
                            <li key={module.id || index} className="p-4 border-b border-gray-300">
                                <h2 className="text-xl font-bold">{module.title}</h2>
                                <p className="text-gray-600">{module.description}</p>
                                <p className="text-sm text-gray-500">
                                    Créé le {formatDate(module.createdAt)}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun module disponible pour le moment</p>
                )}
            </div>
        </div>
    );
};

export default Modules;
