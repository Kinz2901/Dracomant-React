import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null)
  const [nome, setNome] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [login, setLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  return (
    <UserContext.Provider
      value={{ nome, setNome, login, setLogin, avatar, setAvatar }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext