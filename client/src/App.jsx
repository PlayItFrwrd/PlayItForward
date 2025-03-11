import { useState } from "react";
import "./App.css";

function App() {

const handleSubmit = (event) => {
  event.preventDefault(); // prevent default reload behavior of submission form when submitted
}

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <br />
          <label>
            Recipient:
            <input type="text" name="recipient" />
          </label>
          <br />
          <br />
          <label>
            Message:
            <textarea type="text" name="message" />
          </label>
          <br />
          <br />
          <label>
            Song Title:
            <input type="text" name="song-title" />
          </label>
          <br />
          <br />
          <label>
            Song Artist:
            <input type="text" name="song-artist" />
          </label>
          <br />
          <br />
          <label>
            Song Link:
            <input type="text" name="song-link" />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <p className="read-the-docs">Placeholder footer</p>
    </>
  );
}

export default App;
