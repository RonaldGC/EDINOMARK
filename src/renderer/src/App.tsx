import { ActionButtonsRow, Content, DraggableTopBar, NotePreviewList, RootLayout, Sidebar } from "@/components"

const App = () =>{
  return (
    <>
    <RootLayout>
      <DraggableTopBar />
      <Sidebar className="p-2 text-zinc-300">
        <ActionButtonsRow className="flex justify-between mt-1"/>
        <NotePreviewList className="mt-1 space-y-1"/>
      </Sidebar>
      <Content className="border-l text-zinc-300 bg-zinc-800/50 border-l-white/20"  >Content</Content>

    </RootLayout>
    </>
  )
}
export default App
