import { ActionButton, ActionButtonProps } from "@/components";
import { FiFilePlus } from "react-icons/fi";

export const NewNoteButton = (...props): ActionButtonProps => {
    return (
        <ActionButton {...props}>
            <FiFilePlus className='w-4 h-4 text-zinc-300' />

        </ActionButton>
    )
}
