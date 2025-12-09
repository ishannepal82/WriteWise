
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { $generateHtmlFromNodes } from "@lexical/html";

function Placeholder() {
  return (
    <div className="absolute top-3 left-3 text-gray-400 pointer-events-none">
      Write here...
    </div>
  );
}

export default function LexicalEditor({ onChangeHtml }: { onChangeHtml: any }) {
  const config = {
    namespace: "ResultEditor",
    theme: {},
    onError(error: any) {
      console.error(error);
    },
  };

  return (
    <div className="relative h-full">
      <LexicalComposer initialConfig={config}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="h-full px-3 py-2 outline-none" />
          }
          placeholder={<Placeholder />}
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
  );
}
