import { notesMock } from "@/store/mooks"
import { NoteInfo } from "@renderer/shared/models"
import { atom } from "jotai"

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
    const notes = get(notesAtom)
    const selectedNoteIndex = get(selectedNoteIndexAtom)
    
    if (selectedNoteIndex == null) return null

    const selectedNote = notes[selectedNoteIndex]

     return {
            ...selectedNote,
            content: `This is a note content${selectedNoteIndex}`,
     }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
       const notes = get(notesAtom)

       const title = `Note ${notes.length + 1}`

       const newNote: NoteInfo = {
           title,
           lastEditTime: Date.now(),
       }

       set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

       set(selectedNoteIndexAtom, 0)
})

export const deleteNoteAtom = atom(null, (get, set,) => {
       const notes = get(notesAtom)
       const selectedNote = get(selectedNoteAtom)

       if(!selectedNote) return

       set(
              notesAtom,
              notes.filter((note) => note.title !== selectedNote.title)
       )

       set(selectedNoteIndexAtom, null)
})