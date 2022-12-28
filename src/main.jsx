import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route } from 'wouter'
import App from './App'
import Help from './Help'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Switch>
    <Route path = "/" component={App} />
    <Route path='/help' component={Help} />
  </Switch>

  

)
