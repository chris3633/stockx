import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, authed, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}

/*       {...rest}
      render={routeProps =>
        !!currentUser ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      } */
    ></Route>
  )
}