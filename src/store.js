import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'
import loggerMiddleware from './reducer/middleware/loggerMiddleware';
import monitorReducersEnhancer from './reducer/middleware/monitorReducersEnhancer';

   export const store = configureStore({
       reducer: rootReducer ,
       middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
       enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(monitorReducersEnhancer),
   });


