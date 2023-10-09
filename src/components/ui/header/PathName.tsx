import React, { ReactNode } from 'react'

const PathName = ({ pageTitle }: { pageTitle: string }) => {
    return (
        <h1 className='text-3xl font-semibold text-[#4D4D4D]'>{pageTitle}</h1>
    )
}

export default PathName