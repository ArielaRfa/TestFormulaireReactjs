const initialState = {
    formData: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM':
        return { ...state, formData: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  