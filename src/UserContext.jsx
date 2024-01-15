import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  return (
    <UserContext.Provider
      value={{ data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext