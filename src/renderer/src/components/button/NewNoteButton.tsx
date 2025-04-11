import { ActionButton, ActionButtonProps } from "@/components";
import { createEmptyNoteAtom } from "@renderer/store";
import { useSetAtom } from "jotai";
import { FiFilePlus } from "react-icons/fi";

export const NewNoteButton = ({...props}: ActionButtonProps) => {
    const createEmptyNote = useSetAtom(createEmptyNoteAtom)

    const handleCreation = async () => {
        await createEmptyNote()
    }
 
    return (
        <ActionButton onClick={handleCreation} {...props}>
            <FiFilePlus className='w-4 h-4 text-zinc-300' />

        </ActionButton>
    )
}
