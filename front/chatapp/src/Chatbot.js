import { React, useState } from "react"

function Chatbot() {

    const [messages, setmessages] = useState([]);
    const [input, setinput] = useState("");

    const handleinput=(e)=>{
        setinput(e.target.value);
        console.log(e.target.value);
    }

const handlesend=()=>{
//axios
}
  return (
    <>
    <div>Chatbot</div>
    <input
          type="text"
          value={input}
          onChange={handleinput}
          placeholder="Type a message..."
        />
    </>
  )
}

export default Chatbot