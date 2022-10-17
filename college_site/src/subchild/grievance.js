import React from 'react';
import './Department.css'

const Grievance = () => {
    return (
        <div className='container'>
            <h1 className='heading'>Grievance Cell</h1>
            <h3 className='label_'>The Grievance Cell comprising of the following Officers/Officials has been constituted to redress the grievances of the students of this Institute vide Order No. : GCET/PR/18/403 Dated : 21.05.2018 </h3>
            <table className='table_dep table table-hover '>
                <thead>

                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>HOD</th>
                        <th scope='col'>Contact</th>
                    </tr>
                </thead>
                <tbody>


                    <tr>
                        <td> Dr. Simmi Dutta </td>
                        <td> Computer Engineering</td>
                        <td>   94191-31816 </td>
                    </tr>


                    <tr>
                        <td> Dr. Veena Rani  </td>
                        <td> Humanities </td>
                        <td>   9419188589 <br></br>veena.rani71@yahoo.com    </td>

                    </tr>
                    <tr>
                        <td> Mr. Baldev Raj   </td>
                        <td> E&C Engg.
                            Department  </td>
                        <td>   99063-59745 <br></br> baldev.gcet@gmail.com   </td>

                    </tr>
                    <tr>
                        <td>  Mr. Sat Dev   </td>
                        <td>  Electrical Engg.
                            Department </td>
                        <td>   94192-20030 <br></br>satdev62@gmail.com   </td>

                    </tr>
                    <tr>
                        <td>  Mr. Salwant Raj,  </td>
                        <td> Civil Engg.
                            Department </td>
                        <td>   94192-21673 <br></br> salwant.raj@rediffmail.com</td>

                    </tr>
                    <tr>
                        <td>  Mr. Surjeet Singh  </td>
                        <td> Sr. Lab. Technician </td>
                        <td>   94191-41201 <br></br> surjeetranyal@gmail.com</td>

                    </tr>

                </tbody>
            </table>

        </div>

    );
}
export default Grievance;

