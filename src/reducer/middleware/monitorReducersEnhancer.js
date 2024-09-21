const monitorReducersEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const nextState = reducer(state, action);
      
      console.group(action.type);
      console.log('Previous State:', state);
      console.log('Action:', action);
      console.log('Next State:', nextState);
      console.groupEnd();
  
      return nextState;
    };
  
    return createStore(monitoredReducer, initialState, enhancer);
  };
  
  export default monitorReducersEnhancer;