import React, { Children } from 'react'
import { Header } from './'

export default function Layout({children}) {
    return ( 
            <>
            <Header />
            {children}
            </>
    )
}
