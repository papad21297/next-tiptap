'use client'

import styles from "./Tiptap.module.css"

import { useRef, useEffect, useState } from 'react'

import { useEditor, EditorContent, } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'

import Toolbar from './Toolbar'

export default function Tiptap() {
    const [selectedValue, setSelectedValue] = useState('grey')

    const ref = useRef(null)

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value)
    }
    const handleBtn = (event) => {
        console.log('format')
        // editor.chain().focus().clearContent().insertContent('<p>สวัสดี *<span style="color: #CCCCCC">โลก</span>ใบนี้ 🙏🌎</p>').run()
        // console.log(editor.getText())
    }

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            Color
        ],
        content: '<p>สวัสดี โลก<span style="color: #CCCCCC">ใบ</span>นี้ 🙏🌎</p>',
        editorProps: {
            attributes: {
                class:
                    "rounded-md border min-w-[600px] min-h-[150px] border-input bg-background px-3 py-3"
            },
        },
    })

    useEffect(() => {
        // console.log('Tiptap component rendered')

        const handleClick = event => {
            // /*
            const selection = window.getSelection().getRangeAt(0);
            const selectedText = selection.toString();
            if (selectedText.length > 0) {
                console.log(`"${selectedValue}"`)
                if (selectedValue == 'grey') {
                    editor.chain().focus().setColor('#CCCCCC').run()
                    console.log('#setColor(\'#CCCCCC\')')
                } else {
                    editor.chain().focus().unsetColor().run()
                    console.log('#unsetColor()')
                }
            }
            // */
        }
        const handlePaste = event => {
            console.log('paste detected')
        }

        const element = ref.current

        element.addEventListener('mouseup', handleClick)
        element.addEventListener('paste', handlePaste)

        return () => {
            element.removeEventListener('mouseup', handleClick)
            element.removeEventListener('paste', handlePaste)
        }
    }, [selectedValue, editor])

    return (
        <div>
            { /* <Toolbar editor={editor} /> */ }
            <button
                onClick={handleBtn}
                className={styles.button}
            >
                format
            </button>
            <div className={styles.desc} ref={ref}>
                <EditorContent editor={editor} />
            </div>
            <select value={selectedValue} onChange={handleDropdownChange}>
                <option value="grey">Change text color to grey</option>
                <option value="remove">Remove text color decoration</option>
            </select>
            { /* <p>{selectedValue}</p> */ }
        </div>
    )
}