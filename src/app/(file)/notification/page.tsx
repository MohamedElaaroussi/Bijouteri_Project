import Notification from '@/components/Notification/Notification'
import React from 'react'
import Header from '../utilisateur/USerComponent/Header/Header'

const Page = () => {
    const Path="Notification"
    return (
        <div>
            <Header path={Path}/>
            <Notification/>
        </div>
    )
}

export default Page
