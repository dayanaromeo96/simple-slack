import React from 'react';
import userData from "../../context/user.json";

function useLogin(usuario, password) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsAuthenticated(true);
        }
      }, [isAuthenticated])

    function login(usuario, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = findUser(usuario, password);
                if (response) {
                    localStorage.setItem('token', response.token);
                    resolve(response);
                    setIsAuthenticated(true);
                } else {
                }
            }, 2000)
        })
    }
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('channeList')
        setIsAuthenticated(false);
    }
    function findUser(usuario, password) {
        const response = (userData).find((user) => user.name === usuario && user.password === password)
        return response || undefined
    }
    return {
        isAuthenticated,
        login,
        logout
    };
}

export { useLogin };