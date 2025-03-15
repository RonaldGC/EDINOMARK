import { ActionButtonsRow, Content, DraggableTopBar, FlotingNoteTile, MarkdownEditor, NotePreviewList, RootLayout, Sidebar } from "@/components"
import { useRef } from "react"

const App = () =>{
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
    <RootLayout>
      <DraggableTopBar />
      <Sidebar className="p-2 text-zinc-300">
        <ActionButtonsRow className="flex justify-between mt-1"/>
        <NotePreviewList className="mt-1 space-y-1" onSelect={resetScroll} />
      </Sidebar>
      <Content ref={contentContainerRef} className="bg-gray-900 border-l text-zinc-300 border-l-white/20">
        <FlotingNoteTile className="pt-2"></FlotingNoteTile>
        <MarkdownEditor />
      </Content>

    </RootLayout>
    </>
  )
}
export default App
