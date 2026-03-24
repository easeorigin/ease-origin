import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
  LinkIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  editable?: boolean;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  if (!editor) {
    return null;
  }

  const openLinkDialog = () => {
    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, " ");
    const url = editor.getAttributes("link").href || "";

    setLinkUrl(url);
    setLinkText(text || "");
    setIsLinkDialogOpen(true);
  };

  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (linkUrl === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      // If text is provided and different from selection, we might want to insert it
      // But for simplicity with Tiptap, we'll focus on the link attribute
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkUrl })
        .run();

      // If they changed the text in the dialog, we update the content
      const { from, to } = editor.state.selection;
      if (
        linkText &&
        editor.state.doc.textBetween(from, to, " ") !== linkText
      ) {
        editor
          .chain()
          .focus()
          .insertContent(linkText)
          .setLink({ href: linkUrl })
          .run();
      }
    }

    setIsLinkDialogOpen(false);
  };

  return (
    <div className="border-b border-border p-2 flex flex-wrap gap-1 bg-muted/30 sticky top-0 z-10 backdrop-blur-sm">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("bold")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Bold"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("italic")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Italic"
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("underline")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Underline"
      >
        <UnderlineIcon className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("heading", { level: 1 })
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Heading 1"
      >
        <Heading1 className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("heading", { level: 2 })
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Heading 2"
      >
        <Heading2 className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("bulletList")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Bullet List"
      >
        <List className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("orderedList")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Ordered List"
      >
        <ListOrdered className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("blockquote")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Quote"
      >
        <Quote className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <button
        onClick={openLinkDialog}
        className={`p-2 rounded hover:bg-muted transition-colors ${
          editor.isActive("link")
            ? "bg-muted text-primary"
            : "text-muted-foreground"
        }`}
        type="button"
        title="Add/Edit Link"
      >
        <LinkIcon className="w-4 h-4" />
      </button>
      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Add Link</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLinkSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="link-text">Display Text</Label>
              <Input
                id="link-text"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                placeholder="Text to display"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="link-url">URL</Label>
              <Input
                id="link-url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://example.com"
                autoFocus
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsLinkDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Link</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export function RichTextEditor({
  content,
  onChange,
  editable = true,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class:
            "rounded-lg max-w-full h-auto my-4 shadow-sm border border-border",
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline cursor-pointer",
        },
      }),
      Placeholder.configure({
        placeholder: "Tell your story...",
      }),
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-lg prose-stone dark:prose-invert max-w-none focus:outline-none min-h-[300px] p-4",
      },
    },
  });

  // Sync content if it changes externally
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      // Only set content if it's different to prevent cursor jumping
      // This is a naive check, for production might need a more robust diff
      if (editor.getText() === "" && content === "") return;
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div
      className={`rounded-xl border border-border bg-card shadow-sm overflow-hidden transition-shadow focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary ${
        !editable ? "border-none shadow-none bg-transparent" : ""
      }`}
    >
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}