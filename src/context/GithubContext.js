import {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

// Implement React's Context API 
const GithubContext = createContext()

// Retrieve environment variables 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

/* 
Create a Provider component to maintain the Github API calls and distinguish what
users/user are in the global state
@param children the application that is rendered under the provider
@return none
*/
export const GithubProvider = ({children}) =>
{
    
    /* 
        Initial state of the GithubProvider
        Fields: users - holds the users retrieve from the Github search API call
                    loading - track the phase of the component's lifecycle
                    for components that uses the GithubContext

    */
    const initialState = 
    {
        users: [],
        loading: false
    }

    // Implement the useReducer hook for the provider 
    const [state, dispatch] = useReducer(githubReducer, initialState)

    /*
    Changes the state to match the appropraite phase of 
    the component that uses the GithubContext
    @param none
    @return none
    */
    const setLoading = () =>
    {
        dispatch({type: 'SET_LOADING'});
    }

    
    /*
    Fetch random user objects from the Github API and dispatch
    the GET_USERS action to update the users field of the state
    @param none
    @return none
    NOTE: This function is not used the main application. It is intended 
    for testing purposes only.
    */
    const fetchUsers = async () =>
    {

        // Call local function to dispatch SET_LOADING action
        setLoading();

        // Use our environment variables to fetch the random user objects
        const response = await fetch(`${GITHUB_URL}/users`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        // Allow for the response to succeed and convert the data to a JSON object
        const data = await response.json();
        
        // Dispatch to the state to update the users field
        dispatch({
            type: "GET_USERS",
            payload: data
        });
    }

    /*
    Search user objects from the Github API and dispatch 
    the GET_USERS action to update the users field of the state
    @param text the parameters used to retrieve the most accurate list of users
    @return none
    */
    const searchUsers = async (text) =>
    {

        // Call local function to dispatch SET_LOADING action
        setLoading();

        // Format the text parameter to be used inside the Github API call
        const params = new URLSearchParams(
            {
                q: text
            }
        );

        // Use our environment variables to fetch the user objects matching the params
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        // Retrieve the list of user objects 
        const {items} = await response.json();
        
        // Dispatch to the state to update the users field 
        dispatch({
            type: "GET_USERS",
            payload: items
        });
    }

    /*
    Empty the users field by dispatching the CLEAR_USERS action to the state
    @param none
    @return none
    */
    const clearUsers = () =>
    {
        dispatch({
            type: "CLEAR_USERS"
        })
    }

    // Return the Provider component 
    return (

        // Pass in the initial state and functions used by Github Context
        <GithubContext.Provider
        value={{
            users: state.users,
            loading: state.loading,
            fetchUsers,
            searchUsers,
            clearUsers
        }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;