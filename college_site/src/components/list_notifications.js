import React, { useState, useEffect } from "react";
import app from '../firebase'
import { getDatabase, onValue, ref, remove, set, DatabaseReference } from "firebase/database";
import Noti from "../notificationPage";
import { Link } from "react-router-dom";
import { event } from "jquery";
// import '../Dashboard.css'
const db = getDatabase(app)
const read = ref(db, 'Notifications/');

const delete_func = (e, ref) => {
    console.log(ref)
    remove(ref).then((val) => {
        console.log("Deleted")
    })
}

const Notifications = () => {


    const [tasks, setTasks] = useState([]);
    const HandleKeyPress = (e) => {

        let query = String(e.target.value)
        query = query.toUpperCase()
        if (e.key == 'Enter' || query == '') {

            const fetchedTasks = [];
            let date = new Date()
            const comp_date = new Date("09/01/2020")
            console.log("comp date" + comp_date)

            while (date > comp_date) {
                var current_date = date.getDate().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getFullYear().toString()
                var refer = ref(db, 'Notifications/' + current_date)
                date.setDate(date.getDate() - 1)
                const listener = onValue(refer, (snapshot) => {


                    snapshot.forEach(childSnapshot => {
                        let data = String(childSnapshot.val().Title);
                        console.log("Child " + childSnapshot.val())
                        data = data.toUpperCase()
                        if (data.includes(query)) {
                            console.log("console log data" + data)
                            fetchedTasks.push([childSnapshot.val().Title, childSnapshot.ref]);
                        }
                    });
                    setTasks(fetchedTasks);
                });
            }

        }


    }

    useEffect(() => {
        const fetchedTasks = [];
        let date = new Date()
        const comp_date = new Date("09/01/2020")
        console.log("comp date" + comp_date)

        while (date > comp_date) {
            var current_date = date.getDate().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getFullYear().toString()
            var refer = ref(db, 'Notifications/' + current_date)
            date.setDate(date.getDate() - 1)
            const listener = onValue(refer, (snapshot) => {


                snapshot.forEach(childSnapshot => {

                    const data = childSnapshot.val().Title;

                    // console.log("console log data "+data)
                    fetchedTasks.push([data, childSnapshot.ref]);
                });
                // console.log("Feteched Task" , fetchedTasks[0][1])
                setTasks(fetchedTasks);
            });

        }

    }, []);

    return (
        <div class="" >
            <div class="">
                <input className='input_' type="text" class="form-control" placeholder="Search Notification" onKeyDown={HandleKeyPress} />
                <div class="dashboard-card-body">
                    <ul class='list-group list-group-flush'>
                        {tasks.map(
                            (task) => (
                                <li class='list-group-item'>
                                    <div className="notification col-xs-12 ">

                                        <Link to={{
                                            pathname: '/Notifications',
                                        }} state={task}>{task[0]}</Link>
                                    </div>
                                    <div className="col-xs-5">
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger" onClick={(e) => { delete_func(e, task[1]) }}>Delete</button>
                                    </div>

                                </li>

                            )
                        )}

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Notifications;
