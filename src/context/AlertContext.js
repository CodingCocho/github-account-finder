import {createContext, useReducer} from 'react';
import alertReducer from './AlertReducer'

// Implement React's Context API
const AlertContext = createContext();

/*
Create a Provider component to maintain the Alert components message
and type
@param children the application that is rendered under the provider
@ return none
*/
export const AlertProvider = ({children}) =>
{

    /* 
    Initial state of the GithubProvider
    Fields: object - null if there is no Alert component to be rendered
                object - an alert object with 
                        string - message rendered in Alert component
                        type - the type of Alert component 

    */
    const initialState = null;

    // Implement the useReducer hook for the provider 
    const [state, dispatch] = useReducer(alertReducer, initialState);

    /*
    Dispatch the SET_ALERT action and create the alert object. Dispatch
    the REMOVE_ALERT action after a timeout to unmount the Alert component
    @param msg the message that renders on the Alert component
                   type the type of Alert component that should be rendered
    @return none   
    */
    const setAlert = (msg, type) =>
    {
        
        // Dispatch the alert object
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        // Set a timeout so the Alert component unmounts
        setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000);
    }

    // Return the Provider component
    return (

         // Pass in the initial state and functions used by Alert Context
        <AlertContext.Provider
        value={{alert: state, setAlert}}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;