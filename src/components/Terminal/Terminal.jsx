import React, {useState} from 'react'

function Terminal() {
    const [history, setHistory] = useState([])
    const [currentInput, setCurrentInput] = useState("")

    const handleCommand = (command) => {
        let output = ""

        switch (command.trim()) {
            case "help":
                output = "Welcome to Help section!"
                break;

            case "whoami":
                output = "I am the king of laziness!"
                break;

            case "delete":
                output = "you better watch it out Bitch!"
                break;
            case "clear":
                setHistory([])
                return;
        
            default:
                if (command.startsWith("echo ")) {
                        output = command.replace("echo ", "");
                }
                else {
                    output = `Command not found: ${command}`;
                }
        }
        setHistory((prev)=> [...prev, {command, output}])       //this line is imp to store the history
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentInput.trim() !== ""){
            handleCommand(currentInput)
            setCurrentInput("")
        }
    }


  return (
    <div
      className="terminal-container"
      style={{
        backgroundColor: "black",
        color: "green",
        fontFamily: "monospace",
        padding: "20px",
        borderRadius: "8px",
        width: "80%",
        height: "800px",
        overflowY: "auto",
        margin: "0 auto",
      }}
    >
      {/* Display command history */}
      <div>
        {history.map((entry, index) => (
          <div key={index}>
            <div>
              <span style={{ color: "lightgreen" }}>$ </span>
              {entry.command}
            </div>
            <div>{entry.output}</div>
          </div>
        ))}
      </div>

      {/* Input field */}
      <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
        <span style={{ color: "lightgreen" }}>$ </span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          style={{
            backgroundColor: "black",
            color: "green",
            border: "none",
            outline: "none",
            width: "90%",
          }}
          autoFocus
        />
      </form>
    </div>
  )
}

export default Terminal