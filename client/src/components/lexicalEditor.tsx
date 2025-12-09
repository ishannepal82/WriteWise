"use client";
import {
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

function Placeholder() {
  return (
    <div className="text-gray-400 absolute top-3 left-3 pointer-events-none">
      Start typing your note...
    </div>
  );
}

export default function LexicalEditor() {
  const config = {
    namespace: "MyEditor",
    theme: {
      paragraph: "mb-2",
    },
    onError(error) {
      console.error(error);
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto border border-gray-300 rounded-xl p-4 bg-white">
      <LexicalComposer initialConfig={config}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="outline-none min-h-[200px] p-3" />
          }
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />

        <HistoryPlugin />

        <OnChangePlugin onChange={(editorState) => {
          editorState.read(() => {
            // Optional: run logic when text changes
          });
        }} />
      </LexicalComposer>
    </div>
  );
}
