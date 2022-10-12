import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const USER_ROLES = {
    ADMIN: 'ADMIN',
    STUDENT: 'STUDENT',
    LECTURER: 'LECTURER',
    GUEST: 'GUEST'
}

const ERROR_MESSAGE = "You are not authorized to this page. Please Login!"

function ProtectedRoute({ children }) {

    const loggedUserDetails = useSelector((state) => state.login)
    const [notAuthorized, setNotAuthorized] = useState(false)

    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

    useEffect(() => {
        if (!isLoggedIn) {
            setNotAuthorized(true)
        }

    }, [loggedUserDetails, isLoggedIn])

    if (notAuthorized) {
        return <Navigate to="/" replace />
    }

    return children
}

export const SuperAdminProtectedRoute = ({ children }) => {
    const userRole = useSelector((state) => state.login.userRole)
    if (userRole !== USER_ROLES.ADMIN) {
        return <Navigate to="/" replace />
    }
    return children
}

export const LecturerProtectedRoute = ({ children }) => {
    const userRole = useSelector((state) => state.login.userRole)

    if (userRole !== USER_ROLES.LECTURER) {
        return <Navigate to="/" replace />
    }

    return children
}

export const StudentProtectedRoute = ({ children }) => {
    const userRole = useSelector((state) => state.login.userRole)
    if (userRole !== USER_ROLES.STUDENT) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute