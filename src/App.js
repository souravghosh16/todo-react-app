
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './reducer/counter';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './routes'

import { fetchApiData } from './api/api'
import { useEffect } from 'react';

function App() {
  const { t } = useTranslation();
  const count = useSelector((state) => state.reducer.value);
  const {name, address} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const swicthlanguage = (param)=>{
    i18n.changeLanguage(param)
  }

const router = createBrowserRouter(routes)


useEffect(()=> {
  const data = fetchApiData()
}, [])
  
  return (
      <div>
          {/* <h1>Count: {count} {t('Welcome to React')} </h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => swicthlanguage('fr')}>FR</button>
          <button onClick={() => swicthlanguage('en')}>EN</button> */}
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
