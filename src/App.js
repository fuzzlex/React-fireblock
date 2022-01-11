import React from 'react';
import './App.css';
import {  createMuiTheme, ThemeProvider } from '@material-ui/core';
import AppRouter from "./app-router/AppRouter"
import AuthContextProvider from './contexts/AuthContext';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#980F5A",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})




function App() {

  return (
    <ThemeProvider theme={theme}>   
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider> 
    </ThemeProvider>
  );
}

export default App;