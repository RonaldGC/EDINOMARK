import { ActionButtonsRow, Content, DraggableTopBar, RootLayout, Sidebar } from "@/components"

const App = () =>{
  return (
    <>
    <RootLayout>
      <DraggableTopBar />
      <Sidebar className="p-2 text-gray-800">
        <ActionButtonsRow className="flex justify-between mt-1"/>
      </Sidebar>
      <Content className="text-white border-l bg-zinc-800/50 border-l-white/20"  >Content</Content>
    </RootLayout>
    </>
  )
}
export default App
