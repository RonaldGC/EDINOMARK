import { NoteInfo } from "@renderer/shared/models"
import { cn, formatDateFromMs, } from '@renderer/utils'
import { ComponentProps } from "react"

export type NotePreviewProps = NoteInfo & {
    isActive: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
    title,
    content,
    lastEditTime,
    isActive = false,
    className,
    ...props
}: NotePreviewProps) => {
    const date = formatDateFromMs(lastEditTime)

    return (
        <div className={cn(
            'cursor-pointer  border-1 border-gray-700 px-2.5 py-3 rounded-md transition-colors duration-75', 
            {
                'bg-gray-600/75': isActive,
                'hover:bg-gray-700/75': !isActive,
            }   
        )} 
        {...props}>
            <h3 className="mb-1 font-bold truncate">{title}</h3>
            <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
        </div>
    )
}