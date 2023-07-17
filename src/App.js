import "./App.css";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { useState } from 'react';

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function onClick(emojiData) {
    setSelectedEmoji(emojiData.unified);
  }

  return (
    <div className="container">
      <h2>Emoji Picker React Demo</h2>
      <div className="card">
        {selectedEmoji ? <Emoji unified={selectedEmoji} size={52} /> : null}
        <EmojiPicker onEmojiClick={onClick} />
      </div>
    </div>
  );
}

export default App;
