const placeholder = `

# Hi, friend ! #

## Thanks for trying out my markdown previewer ##

### Made with Next.js and marked.js ###

#### Links: ####

[Link to source code!](https://github.com/Onixaz/nextjs-markdown-previewer)

#### Emphasis: ####

~~Here's a strikethrough~~  then an *italic text*, some **bold** and then **_combined_**. 




#### Lists: #### 

1. First ordered list item
2. Another item
4. And another item.

#### Code: ####

Inline \`code\` has \`back-ticks around\` it.

\`\`\`\`\ ruby
require 'redcarpet'
markdown = Redcarpet.new('Hello World!')
puts markdown.to_html
\`\`\`\`\


#### Blockquotes: ####

> Dorothy followed her through many of the beautiful rooms in her castle.

#### Images: ####
![Pikachu](https://upload.wikimedia.org/wikipedia/lt/8/89/Pikachu.jpg)

`
export default placeholder
