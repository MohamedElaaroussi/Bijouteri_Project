import React from 'react'
import Header from '../../utilisateur/USerComponent/Header/Header'
import { usePathname } from 'next/navigation'

const Index = () => {
    const Path=usePathname()
    return (
        <div>
            
            <Header path={Path} />

        </div>
    )
}

export default Index
