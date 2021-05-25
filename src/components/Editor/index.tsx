import React, { Dispatch, FC, SetStateAction } from 'react'
import * as EditorStyles from './styles'
import placeHolder from '../../utils/placeholder'

interface EditorProps {
  setMarkdown: Dispatch<SetStateAction<string>>
}

const Editor: FC<EditorProps> = ({ setMarkdown }) => {
  return (
    <>
      <EditorStyles.Label htmlFor="editor">Editor</EditorStyles.Label>

      <EditorStyles.TextArea
        defaultValue={placeHolder}
        onChange={(e) => setMarkdown(e.target.value)}
        id="editor"
        name="w3review"
      ></EditorStyles.TextArea>
    </>
  )
}

export default Editor
