import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const ExportBtn_Conp = ({ label }: { label: string }): ReactNode => {


    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                className='bg-[color:var(--green)] rounded-full'
                    variant="bordered"
                >
                    <div className='flex justify-center items-center gap-2 p-3 bg-[color:var(--green)] mt-2 width: [124px]
                        rounded-3xl hover:cursor-pointer outline-none h-[3rem]'>
                        <Image src={"/export-logo.svg"} alt='export logo' width={15} height={15}></Image>
                        <span className='text-white text-sm '>{label}</span>
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ExportBtn_Conp ;
