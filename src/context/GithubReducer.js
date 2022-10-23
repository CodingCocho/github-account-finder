/*
Use the appropraite actions for Github Provider 
@params state the data fields of the Github Provider
                action the action that the Github Provider is going to use
@return object the state of the Github Provider
*/
const githubReducer = (state, action) =>
{

    // Hold the switch statement to apply the correct logic for the action passed
    switch(action.type)
    {

        // Case for GET_USERS
        case 'GET_USERS':
            
            // Return the state with the users updated 
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        // Case for GET_USER
        case 'GET_USER':

            // Return the state with the user updated
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        // Case for GET_REPOS
        case 'GET_REPOS':

            // Return the state with the repos updated
            return {
                ...state,
                repos: action.payload,
                loading: false
            }

        // Case for CLEAR_USERS
        case 'CLEAR_USERS':
            
            // Return the state with empty users
            return {
                ...state,
                users: []
            }

        // Case for SET_LOADING
        case 'SET_LOADING':
            
            // Return the state to allow for component remounting once data is fetched
            return {
                ...state,
                loading: true
            }
            
        // Default case
        default:

            // Return the state unchanged 
            return state;
    }
}

export default githubReducer;