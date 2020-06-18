import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [focus, setFocus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function focusHandler(){
    setFocus(true);
  }

  function blurHandler(){
    setFocus(false)
  }

  return (
    <div>
      <form className="create-note">
        {focus && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {focus? "3" : "1"}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        {focus && <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
