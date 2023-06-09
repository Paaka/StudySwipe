import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import AllSet from './pages/allSets/AllSet';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound/NotFound';
import Set from './pages/set/Set';
import Study from './pages/study/Study';
import { Provider } from 'react-redux';
import store from './redux/store';
import EditSet from './pages/editSet/editSet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/all" element={<AllSet />} />
            <Route path="/set/:setID" element={<Set />} />
            <Route path="/set/:setID/edit" element={<EditSet />} />
            <Route path="/set/:setID/:index/keyword" element={<Study />} />
            <Route path="/set/:setID/:index/definition" element={<Study />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
