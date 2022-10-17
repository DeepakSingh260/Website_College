import React , {useState , useEffect} from "react";



import { getDatabase, onValue, ref, set } from "firebase/database";

import app from "../firebase.js"



const Annual_report=()=>{
    const db = getDatabase(app)
    const [annual_list , setList] = useState([])
    const read = ref(db, 'Annual-Report/');
    
 
   
	useEffect(() => {

        onValue(read , (snapshot)=>{
            const temp = []
            snapshot.forEach((childSnap)=>{
                const name = childSnap.val().Name
                const link = childSnap.val().Link 
                temp.push([name , link])
            })
            setList(temp)
            console.log(annual_list)
        })
        
	},[])
    return(
        <div class="container">
           <div class=" card-body tg-widgetcontent">
				<ul class='list-group list-group-flush'>
					{annual_list.map(
						(task) => (
							<li class='list-group-item'>

								<a href={task[1]}>{task[0]}</a>

							</li>
						)
					)}
				</ul>
			</div>
        </div>
    )
}

export default Annual_report;