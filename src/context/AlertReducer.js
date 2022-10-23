/*
Use the appropraite actions for Alert Provider 
@params state the data fields of the Alert Provider
                action the action that the Alert Provider is going to use
@return object the state of the Alert Provider
*/
const alertReducer = (state, action) =>
{

    // Hold the switch statement to apply the correct logic for the action passed
    switch(action.type)
    {

        // Case for SET_ALERT
        case 'SET_ALERT':

            // Return the state with the alert object 
            return action.payload;

        // Case for REMOVE_ALERT
        case 'REMOVE_ALERT':
           
            // Return the state with no alert object
            return null;

        // Default case 
        default:
            
            // Return the state unchanged 
            return state;
    }
}

export default alertReducer;