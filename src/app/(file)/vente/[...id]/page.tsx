import React from 'react'
import Details_Status from '../details/Details_Status'
import Detils_Categories from '../details/Detils_Categories'
import Historique_Payment from '../details/Historique_Payment'

const page = () => {
    return (
        <div>
            <Details_Status/>
            <Detils_Categories/>
            <Historique_Payment/>
        </div>
    )
}

export default page
