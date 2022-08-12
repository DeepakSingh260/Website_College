import React , {useState , useEffect} from "react";

import app from './firebase'
import { getDatabase, onValue, ref, set } from "firebase/database";


const Noti = ()=>{
    const [tasks, setTasks] = useState(["","",""]);
    const db = getDatabase(app)
	const read = ref(db,'Notifications/-N9ChL_DO8dwABlqPy4u');
    useEffect(()=>{
        const listener = onValue(read , (snapshot)=>{
            let task = ["" ,"" ,""]
            console.log(snapshot.val())
            task[0] = snapshot.val().Title
            task[1] = snapshot.val().Body
            task[2] = snapshot.val().PdfLink
            setTasks(task)
        })
    })
    return(
        <div>
            <h1>Notifications</h1>
            <h2>{tasks[0]}</h2>
            <p>{tasks[1]}</p>
            <a>{tasks[2]}</a>

        </div>
    )
}

export default Noti;