import { onValue, ref, getDatabase } from "firebase/database";
import React, { useEffect, useState } from "react";

import './contributer.css'

import app from "../firebase";
const db = getDatabase(app)
const read = ref(db, "Contributors/")

const Contri = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        let fetchedTasks = []
        onValue(read, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val()
                fetchedTasks.push(data)

            })
            console.log(fetchedTasks)
            setTasks(fetchedTasks)
        })


    }, [])
    return (
        <div>
            <div className="container">

                <h1 className="heading">Contributers</h1>
                <ul>
                    {
                        tasks.map((task) => (

                            <li class='contributer'>
                                <img className="contributer-img" src={task.Link} alt="img not available" />
                                <div className="name-img-container">
                                    <h1 className="contributer-name">{task.Name}</h1>
                                    <h3 className="contributer-desc">{task.Contributions}</h3>
                                </div>
                            </li>
                        )
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Contri;