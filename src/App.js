import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import BasicInfo from "./BasicInfo"
//import TextField from 'material-ui/TextField'

//function onSubmit(data) {
  //console.log(data)
//}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <BasicInfo onSubmit={()=>{}}/>
      </MuiThemeProvider>
    )
  }
}

export default App
