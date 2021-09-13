import { useState, useEffect } from "react";

const NameChange = () =>{

    const [name, setName] = useState("");


    
    console.log(name)
    
    useEffect(() => {
        setName("Raja S Chauhan")
        
      }, []);

    return <></>
}


export default NameChange;