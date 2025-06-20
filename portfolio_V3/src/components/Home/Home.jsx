import { useState } from 'react'
import axios from "axios"

import './Home.css'

function Home() {
  const [text, setText] = useState("");

  function getQuotes(){
    axios.get("http://localhost:8080/",  { crossdomain: true }).then(response => {
      setText(response.data.text);
      // setAuthor(response.data.author);
    });
  }
  return (
    <>
        <div className="outerBox">
            <div className="imageMeta"></div>
            <div className="summaryMeta">
              <button onClick={getQuotes}>
                Generate Quote
              </button>
                <p>
                    {text}
                </p>
            </div>
        </div>
    </>
  )
}

export default Home