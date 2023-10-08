import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    // User,
    // UserCredential
  } from 'firebase/auth'
  
  import React, {
    useContext,
    createContext,
    useState,
    ReactNode,
    useEffect
  } from 'react'
  import { auth } from '../services/firebaseConfig.js'

  const AuthContext = createContext({
    signup: () => undefined,
    login: () => undefined,
    logout: () => undefined
  })
  
  const AuthProvider = ({ children })  => {
    // <User | null>
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
    const signup = ({
      email: email = '',
      password: password = ''
    }) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const login = ({
      email: email = '',
      password: password = ''
    }) => {
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const logout = () => {
      return signOut(auth)
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user)
        setLoading(false)
      })
      return unsubscribe
    }, [])
  
    return (
      <AuthContext.Provider
        value={{
          currentUser: currentUser,
          signup: signup,
          login: login,
          logout: logout
        }}
      >
        {!loading && children}
      </AuthContext.Provider>
    )
  }
  
  const useAuth = () => useContext(AuthContext)
  
  export { AuthProvider, useAuth }
  