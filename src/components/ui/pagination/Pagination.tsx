import { numberPerPage, numbers } from '@/utils/seed'
import Image from 'next/image'
import { useState } from 'react'
import Select from 'react-select'

const Pagination = () => {
    const [page, setPage] = useState<number>(1)


    // request for the previous page
    const prevPage = () => setPage(pg => pg - 1)

    // request for the next page
    const nextPage = () => setPage(pg => pg + 1)


    return (
        <div className='text-sm text-[var(--textColor)] mt-6 flex justify-between items-center px-8 py-2 bg-white rounded-[20px]'>
            <p className='text-sm text-[var(--textColor)]'>Résultats: 1 - 15 sur 300</p>
            <div className='flex items-center gap-2'>
                <Select menuPlacement='top' defaultValue={numberPerPage[1]} className='' options={numberPerPage} ></Select>

                <button onClick={prevPage} disabled={page == 1} className='w-[5px] h-[9px] relative'>
                    <Image src="/minus-arrow.svg" alt="previous" fill></Image>
                </button>
                {numbers.map(number =>
                    <div key={number} className='flex flex-col gap-3'>
                        <button onClick={() => setPage(() => number)} className={`py-1 px-2 rounded-[10px] outline-none ${page == number ? "bg-[color:var(--goldColor)] text-white" : ""}`} >
                            {number}
                        </button>
                    </div>
                )}
                <button onClick={nextPage} disabled={page == numbers.length} className='w-[5px] h-[9px] relative'>
                    <Image src="/greater-arrow.svg" alt="previous" fill></Image>
                </button>
            </div>
        </div>
    )
}

export default Pagination