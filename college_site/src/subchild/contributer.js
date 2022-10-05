import { onValue, ref,getDatabase } from "firebase/database";
import React, { useEffect, useState } from "react";

import app from "../firebase";
const db = getDatabase(app)
const read = ref(db ,"Contributors/")

const Contri = ()=>{

    const [tasks , setTasks] = useState([])

    useEffect(()=>{
        let fetchedTasks = []
        onValue(read , (snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                const data = childSnapshot.val()
                fetchedTasks.push(data)

            })
            console.log(fetchedTasks)
            setTasks(fetchedTasks)
        })


    },[])
    return(
        <div>
            <h1>Contributers Page</h1>
            <ul class='list-group list-group-flush'>
            {
            tasks.map((task) => (
                
                <li class='list-group-item'>
                <h1>{task.Name}</h1>
                <h3>{task.Contributions}</h3>
                <img src={task.Link} alt="img not available" style={{height:"100px"} }  />
                </li>
        )
        )}
        </ul>
        </div>
    )
}

export default Contri;