import React, {useContext, useEffect} from 'react'
import {Context as AuthContext} from '../context/AuthContext'

const Starter = () => {
    const {localSignup} = useContext(AuthContext)
    useEffect(()=> {
        localSignup()
    },[])

    return null
}

export default Starter