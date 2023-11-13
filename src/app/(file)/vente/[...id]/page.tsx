import React from 'react'
import Details_Status from '../details/Details_Status'
import Detils_Categories from '../details/Detils_Categories'
import Historique_Payment from '../details/Historique_Payment'
import Detils_Client from '../details/details_client_V/Detils_Client'
import Details_Articles from '../details/Details_Articles'


const page = () => {
    return (
        <div className='flex gap-6'>
            <div>
                <Details_Status />
                <Detils_Categories />
                <Historique_Payment />
            </div>
            <div>
                <Detils_Client/>
                <Details_Articles/>
            </div>
        </div>
    )
}

export default page
