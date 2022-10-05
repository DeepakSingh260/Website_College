import React, { useState, useEffect } from "react";
import app from '../firebase'
import { getDatabase, onValue, ref, set } from "firebase/database";
import Noti from "../notificationPage";
import { Link } from "react-router-dom";
import { event } from "jquery";
const db = getDatabase(app)
const read = ref(db, 'Notifications/');

const Noticeboard = () => {

	let date  = new Date()


	// const comp_date = new Date("09/01/2022")
	// console.log("comp date"+ comp_date)
	// while (date>comp_date){ 
	// 	console.log("Date:"+date.getDate() +"-" + (date.getMonth()+1)+"-" + date.getFullYear());
	// 	date.setDate(date.getDate()-1)
	
	// }


	const [tasks, setTasks] = useState([]);
	const HandleKeyPress = (e) => {

		let query = String(e.target.value)
		query = query.toUpperCase()
		
		if (e.key == 'Enter') {

		const fetchedTasks = [];
		let date  = new Date()
		const comp_date = new Date("09/01/2020")
		console.log("comp date"+ comp_date)

			while (date>comp_date){ 
				var current_date = date.getDate().toString() +"-" + (date.getMonth()+1).toString()+"-" + date.getFullYear().toString()
				var refer = ref(db, 'Notifications/'+current_date)
				date.setDate(date.getDate()-1)
				console.log("Current Date "+current_date)

			onValue(refer, (snapshot) => {
				
				snapshot.forEach(childSnapshot => {
					
					let data = String(childSnapshot.val().Title);
					data = data.toUpperCase()
					if (data.includes(query)) {
						console.log(data)
						fetchedTasks.push(childSnapshot.val());
					}
				});
				setTasks(fetchedTasks);
			});
			}
		}


	}

	useEffect(() => {

		const fetchedTasks = [];
		let date  = new Date()
		const comp_date = new Date("09/01/2020")
		console.log("comp date"+ comp_date)
		
		
		while (date>comp_date){ 
		var current_date = date.getDate().toString() +"-" + (date.getMonth()+1).toString()+"-" + date.getFullYear().toString()
		var refer = ref(db, 'Notifications/'+current_date)
		date.setDate(date.getDate()-1)
		console.log("Current Date "+current_date)
		const listener = onValue(refer, (snapshot) => {
			
			snapshot.forEach(childSnapshot => {
				

				const data = childSnapshot.val();
				console.log("Data",data)
				fetchedTasks.push(childSnapshot.val());
			});
			setTasks(fetchedTasks);
			
		});

	}

	}, []);

	return (
		<div class="card-home" >
			<div class="card-title tg-widgettitle">
				<h3 class='text-center'>Notice Board</h3>
			</div>
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Search Notification" aria-label="Search_Notification" aria-describedby="basic-addon1" onKeyDown={HandleKeyPress} />
				</div>
			<div class=" card-body tg-widgetcontent">
				<ul class='list-group list-group-flush'>
					{tasks.map(
						(task) => (
							<li class='list-group-item'>

								<Link to={{
									pathname: '/Notifications',
								}} state={task}>{task.Title}</Link>

							</li>
						)
					)}
				</ul>
			</div>
		</div>
	)
}


export default Noticeboard;
