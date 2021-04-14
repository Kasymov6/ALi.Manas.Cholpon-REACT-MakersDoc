import React, { useState } from "react";
import "./EditDom.css";

const EditDom = (props) => {
  //   console.log(props);
  let [item, setItem] = useState(props.editDom);

  function handleEditInput(e) {
    let newObj = {
      ...item,
      [e.target.name]: e.target.value,
    };
    setItem(newObj);
  }

  function handleSave() {
    props.handleSaveDom(item);
  }

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={() => props.handleCloseModal(item)}>&times;</button>
        </div>
        <input
          onChange={handleEditInput}
          type="text"
          value={item.name}
          name="name"
          className="inp-edit"
          id="inp-one"
        />
        <input
          onChange={handleEditInput}
          type="text"
          value={item.opisanie}
          name="opisanie"
          className="inp-edit"
        />
        <div className="btn-save-one">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditDom;
