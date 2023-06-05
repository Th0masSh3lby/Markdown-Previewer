import "./App.css";
import { useState } from "react";
import { marked } from "marked";

function App() {
  const [current, Setcurrent] = useState(true);
  const [button, Setbutton] = useState("x");

  function toggle(event) {
    if (current == true) {
      Setcurrent(false);
      Setbutton("-");
    } else {
      Setcurrent(true);
      Setbutton("x");
    }
    return;
  }

  const [text, setText] = useState(`
  # Heading
  ## SubHeading
  ### h3
  [Title(website-link)](https://www.example.com)
  ![alt text](image.jpg)
  
  - First item
    - Second item
      - Third item
      
      
      
  \` single tick for single line code\`


  \`\`\`
      {
        triple tick for multiline code
      }
   \`\`\`
   > blockquote
   **bold text**
       `);

  marked.setOptions({
    breaks: true,
  });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <div className="textheader">
        <p className="Thead">Editor</p>
        <button onClick={toggle}>{button}</button>
      </div>
      <textarea
        className={current ? "editor" : "editorfull"}
        id="editor"
        onChange={handleChange}
        value={text}
      ></textarea>

      <div className={current ? "previewheader" : "previewheaderclose"}>
        <p className="Thead">Previewer</p>
      </div>
      <div
        className={current ? "preview" : "previewclose"}
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default App;
