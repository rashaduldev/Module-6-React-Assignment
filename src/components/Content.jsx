import { useState } from "react";

export default function Content() {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');

  const evenClick = () => {
    setDisplay(text);
  };

  const updateText = (t) => {
    setText(t.target.value);
  };

  return (
    <section className="content">
      <div>
        <h2>Please Write Here and Clik Button</h2>
        <textarea placeholder="Enter the text" value={text} onChange={updateText} />
      </div>
      <div>
        <button onClick={evenClick}>Show Text</button>
      </div>
      <p
        className="hide"
        style={{backgroundColor: display  &&  '#4cf98e'}}
      >
        {display}
      </p>
    </section>

  )
}
