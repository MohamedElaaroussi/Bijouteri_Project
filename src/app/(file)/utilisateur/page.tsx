import React from 'react'
import User_Info from './User_Info/user_Info'
import Header from './USerComponent/Header/Header'
import Section1 from './USerComponent/section1/Section1'

const Home = () => {
    return (    
        <div>
            <Header/>
            <Section1/>
            <User_Info/>
        </div>
    )
}

export default Home
