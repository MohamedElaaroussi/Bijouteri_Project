import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';
import React from 'react';

interface AddedBtnProps {
    onPress: () => void;
}

const AddedBtn: React.FC<AddedBtnProps> = ({ onPress }) => {

    return (
        <div>
            <Button
                onPress={onPress}
                type="reset"
                color="warning"
                className="h-[45px] w-[200px] rounded-full bg-[#D9A528] text-white"
            >
                Ajouter
            </Button>
        </div>
    );
};

export default AddedBtn;
