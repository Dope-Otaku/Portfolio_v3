import React, {useState} from 'react'

function Terminal() {
    const [history, setHistory] = useState([])
    const [currentInput, setCurrentInput] = useState("")

    const handleCommand = (command) => {
        let output = ""

        switch (command.trim()) {
            case "help":
                output: "Welcome to Help section!"
                break;

            case "whoami":
                output: "I am the king of laziness!"
                break;

            case "delete":
                output: "you better watch it out Bitch!"
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


  return (
    <>Terminal Loading...</>
  )
}

export default Terminal