import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserStorage = ({children}) => {
  const [username, setUsername] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [login, setLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  return (
    <UserContext.Provider
      value={{ username, setUsername, avatar, setAvatar, login, setLogin, userEmail, setUserEmail }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext