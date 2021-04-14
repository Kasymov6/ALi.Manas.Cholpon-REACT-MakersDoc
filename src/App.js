import React, { useState, useEffect } from "react";
import Dom from "./components/Dom-html/Dom-html";
import DomDis from "./components/Dom-disc/Dom-dis";
import Header from "./components/header.js/Header";
import EditDom from "./components/EditDom/EditDom";
function App() {
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const [editDom, setEditDom] = useState({});
  function listChanger(newObj) {
    let arr = [...list];
    arr.push(newObj);

    if (localStorage.getItem("list")) {
      let newArr = JSON.parse(localStorage.getItem("list"));
      newArr.push(newObj);
      localStorage.setItem("list", JSON.stringify(newArr));
      setList(newArr);
    } else {
      localStorage.setItem("list", JSON.stringify(arr));
      setList(arr);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("list")) {
      let newArr = JSON.parse(localStorage.getItem("list"));
      setList(newArr);
    }
  }, []);

  function handleDelete(id) {
    let newObj = list.filter((item) => {
      return item.id !== id;
    });
    setList(newObj);
    localStorage.setItem("list", JSON.stringify(newObj));
  }

  function handleEdit(index) {
    setModal(true);
    setEditDom(list[index]);
  }

  function handleSaveDom(newObj) {
    let data = JSON.parse(localStorage.getItem("list"));
    let i = list.findIndex((item) => item.id == newObj.id);
    data.splice(i, 1, newObj);
    setList(data);
    handleCloseModal();
    localStorage.setItem("list", JSON.stringify(data));
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <div>
      <Header />
      <DomDis
        list={list}
        listChanger={listChanger}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {modal ? (
        <EditDom
          editDom={editDom}
          handleEdit={handleEdit}
          handleSaveDom={handleSaveDom}
          handleCloseModal={handleCloseModal}
        />
      ) : null}

      <Dom listChanger={listChanger} />
    </div>
  );
}

export default App;
