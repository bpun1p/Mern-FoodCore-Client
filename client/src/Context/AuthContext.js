import React, {createContext, useState, useEffect} from 'react';
import AuthService from '../service/AuthService';

//Context provides a way to share values without having to pass props down every level of tree in between files
export const AuthContext = createContext();  //gives provider and consumer to have access and consume the global state 

export default ({children}) => {
    const [user, setUser] = useState(null);                             // if user is loggedin
    const [isAuthenticated, setIsAuthenticated] = useState(false);      // if user is authenticated 
    const [isLoaded, setIsLoaded] = useState(false);                    // if user is loaded

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);
    return (
        <div>
            {!isLoaded ? 
                <h1>Loading</h1> 
                : 
                <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
                    {children}
                </AuthContext.Provider>
            }
        </div>
    );
};