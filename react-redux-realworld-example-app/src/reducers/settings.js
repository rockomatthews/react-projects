export default (state = {}, action) => {
    switch (action.type) {
        case 'SETTINGS_SAVED':
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.eorros : null
            };
        case 'ASYNC_START':
            return {
                ...state,
                inProgress: true   
            };
    }
    return state;
};