import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../../context/UserDetailContext'
import useFavourites from '../../hooks/useFavourites'
import useBookings from '../../hooks/useBookings'

const Layout = () => {
    useFavourites();
    useBookings();
    const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
    const { setUserDetails } = useContext(UserDetailContext);

    const { mutate } = useMutation({
        mutationKey: [user?.email],
        mutationFn: async () => {

            const token = await getAccessTokenWithPopup({
                audience: "http://localhost:8000",
                scope: "openid profile email",
            });

            localStorage.setItem("access_token", token);
            setUserDetails((prev) => ({ ...prev, token: token }));
            // console.log(token);
            return createUser(user?.email, token);
        },
    });

    useEffect(() => {
        const getTokenAndRegister = async () => {
            if (isAuthenticated) {
                await mutate();
            }
        };

        getTokenAndRegister();
    }, [isAuthenticated]);

    return (
        <>
            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout