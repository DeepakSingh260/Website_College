import React from 'react';
import './Department.css'

const HODs = () => {
    return (
        <div className='container'>
            <h1 className='heading'>HOD's List</h1>
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
                        <td>Dr. Sameru Sharma</td>
                        <td>E&C Engineering</td>
                        <td>9419724322<br></br>sameru33@gmail.com</td>
                    </tr>

                    <tr>
                        <td> Dr. Simmi Dutta </td>
                        <td> Computer Engineering</td>
                        <td>   simmidutta15@gmail.com </td>
                    </tr>

                    <tr>
                        <td> Er. Rajeev Bali </td>
                        <td> Electrical Engineering </td>
                        <td>  iamrajeevbali@gmail.com 9419261818   </td>

                    </tr>
                    <tr>
                        <td> Dr. S.K Gupta </td>
                        <td> Civil Engineering </td>
                        <td>   9419132080<br></br>    skgcivil70@gmil.com</td>

                    </tr>
                    <tr>
                        <td> Mr. Sanjeev Gupta </td>
                        <td> Mechanical Engineering </td>
                        <td>   9419185026<br></br>sanjeevgupta2208@gmail.com    </td>

                    </tr>
                    <tr>
                        <td> Dr. Veena Rani  </td>
                        <td> Humanities </td>
                        <td>   9419188589 <br></br>veena.rani71@yahoo.com    </td>

                    </tr>
                    <tr>
                        <td>  Dr. Anita Brar   </td>
                        <td>  Chemistry  </td>
                        <td>   9469280288 <br></br>anita.brar@rediffmail.com   </td>

                    </tr>
                    <tr>
                        <td>  Dr. Anita Brar   </td>
                        <td>  Mathematics  </td>
                        <td>   9469280288 <br></br>anita.brar@rediffmail.com   </td>

                    </tr>
                    <tr>
                        <td>  Mr. Shammi Kumar  </td>
                        <td> Physics </td>
                        <td>   9796286786</td>

                    </tr>

                </tbody>
            </table>

        </div>

    );
}
export default HODs;

