import React, { useState } from 'react'

import './Home.css'

function Home() {
  const [text, setText] = useState("");
  return (
    <>
        <div className="outerBox">
            <div className="imageMeta"></div>
            <div className="summaryMeta">
              <button>
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