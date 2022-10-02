import React, { useState, useEffect } from "react";
import app from '../firebase'
import { getDatabase, onValue, ref, set } from "firebase/database";
import Noti from "../notificationPage";
import { Link } from "react-router-dom";
import { event } from "jquery";
const db = getDatabase(app)
const read = ref(db, 'Notifications/');

const Noticeboard = () => {


	const [tasks, setTasks] = useState([]);
	const HandleKeyPress = (e) => {

		let query = String(e.target.value)
		query = query.toUpperCase()
		if (e.key == 'Enter') {

			onValue(read, (snapshot) => {
				const fetchedTasks = [];
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

	useEffect(() => {

		const listener = onValue(read, (snapshot) => {
			const fetchedTasks = [];
			snapshot.forEach(childSnapshot => {

				const data = childSnapshot.val().Title;
				console.log(data)
				fetchedTasks.push(childSnapshot.val());
			});
			setTasks(fetchedTasks);
		});

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
