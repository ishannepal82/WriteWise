import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { $generateHtmlFromNodes } from "@lexical/html";
import PlaceHolder from "../components/mock/placeholder";
import { LetterText } from "lucide-react";
import ToolBar from "./resultpage.tsx/toolbar";

export default function LexicalEditor({onChangeHtml}: {
  onChangeHtml: (html: string) => void;
}) {
  const config = {
    namespace: "ResultEditor",
    theme: {
      paragraph : "text-text text-md",
      h1: "text-text text-xl font-semibold"
    },
    onError(error: Error) {
      console.error(error);
    },
  };
  
  return (
    <div className="flex justify-center items-center w-full h-screen pt-10 font-poppins">
    <div className="rounded-sm w-full h-full border-x-2 w-[50rem] shadow-md">
      <div className="relative w-full h-full">
      <LexicalComposer initialConfig={config}>
        <h1 className="px-10 py-4 text-2xl font-semibold">
          <span>
            <LetterText className="text-primary"/>
            <ToolBar />
          </span>
          Heading: Indicator 
          
        </h1>
        <RichTextPlugin
          contentEditable={
            <ContentEditable 
            className="outline-none px-10 py-6 w-full h-full" 
            autoFocus />
          }
          placeholder= {<PlaceHolder />}
          ErrorBoundary={LexicalErrorBoundary}
        />

        <HistoryPlugin />

        <OnChangePlugin
          onChange={(editorState, editor) => {
            editorState.read(() => {
              const htmlString = $generateHtmlFromNodes(editor);
              onChangeHtml(htmlString); 
            });
          }}
        />
      </LexicalComposer>
      </div>
    </div>
  </div>
  );
}