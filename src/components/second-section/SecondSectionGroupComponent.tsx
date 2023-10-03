"use client"

import { useState } from "react"
import ExportBtn from "../ui/button/ExportBtn"
import GoldBtn from "../ui/button/GoldBtn"

const SecondSectionGroupComponent = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="flex gap-5">
            <ExportBtn label="Export" />
            <GoldBtn label="Ajouter un catalogue" setOpenModal={setOpenModal} />
        </div>
    )
}

export default SecondSectionGroupComponent