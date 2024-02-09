import React from 'react'
import { Route} from 'react-router-dom'
import Layout from '../../layout/layout'

const isAuth = true
export const PrivateRoute = ({children,...rest}) => {
  return (
    <Route
    render = {()=>
     (isAuth ? 
        <Layout>{children}</Layout> : <Redirect to="/" />)
    }
    />

  )
}

