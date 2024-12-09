const initialState = {
    isAuthorized: false,
    token: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN': return { ...state, loading: true, error: null };
        case 'REGISTER': return { ...state, loading: true, error: null };

        case 'LOGIN_SUCCESS': return { ...state, isAuthorized: true, loading: false, token: action.payload };
        case 'REGISTER_SUCCESS': return { ...state, loading: false, error: null };

        case 'LOGIN_FAILED': return { ...state, loading: false, error: action.payload };
        case 'REGISTER_FAILED': return { ...state, loading: false, error: action.payload };

        default: return state;
    }
};