import {createContext, useContext, useState} from "react"; 

const AlertContext = createContext(undefined); 

/**
 * Provides a custom hook for managing alerts within a React application.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components wrapped by AlertProvider.
 * @returns {Object} - An object containing alert state and functions for showing and hiding alerts.
 */
export const AlertProvider = ({ children }) => { 
    const [state, setState] = useState({ 
        isOpen: false, 
        type: 'success', 
        message: '', 
    }); 

    return ( 
        <AlertContext.Provider 
        value={{ 
            ...state, 
            onOpen: (type, message) => setState({ isOpen: true, type, message }), 
            onClose: () => setState({ isOpen: false, type: '', message: '' }), 
        }} 
        > 
        {children} 
        </AlertContext.Provider> 
    ); 
}; 

export const useAlertContext = () => useContext(AlertContext);