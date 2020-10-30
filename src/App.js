import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar"
import Items from "./components/Items"
import Accessories from "./components/Accessories"
import Shipping from "./components/Shipping"
import Submit from "./components/Submit"

function App() {
  const pages = [
    { readableName: "Items", url: "items" },
    { readableName: "Accessories", url: "accessories" },
    { readableName: "Shipping", url: "shipping" },
    { readableName: "Submit", url: "submit" }]

  const [currentPage, setCurrentPage] = useState(0)

  // component did update
  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum)
    window.localStorage.setItem("currentPage", JSON.stringify(newPageNum))
  }

  let content = [<Items />, <Accessories />, <Shipping />, <Submit />]


  // did mount
  useEffect(() => {
    let lSpage = window.localStorage.getItem("currentPage")
    if (lSpage !== currentPage) {
      setCurrentPage(JSON.parse(lSpage))
    }
  }, [currentPage])

  // useEffect(()=> window.localStorage.setItem("currentPage", JSON.stringify(currentPage)))


  return (
    <div className="brand-main">
      <NavBar
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
      />

    <div className="container my-5">
    {content[currentPage]}
    </div>

    </div>
  );
}

export default App;
