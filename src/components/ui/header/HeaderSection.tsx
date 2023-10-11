import React from 'react'
import PathName from './PathName'
import InputHeader from '../Input/InputHeader'

const HeaderSection = ({ pageTitle }: { pageTitle: string }) => {
    return (
        <div className="flex justify-between mb-6">
            <PathName pageTitle={pageTitle}></PathName>
            <InputHeader></InputHeader>
        </div>
    )
}

export default HeaderSection