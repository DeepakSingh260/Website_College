import React from 'react';
import './Department.css'

const Contact = () => {
    return (
        <div className='container'>
            <h1 className='heading'>Contact Us</h1>
            <table className='table_dep table table-hover '>
                <thead>

                    <tr>
                        <th scope='col'>Name </th>
                        <th scope='col'>Post</th>
                        <th scope='col'>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dr. Sameru Sharma</td>
                        <td>Principal</td>
                        <td>9419724322 / 0191-2623084<br></br>gcet_jammu1994@rediffmail.com</td>
                    </tr>
                    <tr>
                        <td> MRS. SUNITA KUMARI DHAR </td>
                        <td> ACCOUNTS OFFICER </td>
                        <td>gcet_jammu1994@rediffmail.com</td>
                    </tr>
                    <tr>
                        <td> DR. SIMMI DUTTA </td>
                        <td> I/C EXAMINATION <br></br>  HOD COMPUTER ENGG. DEPT. </td>
                        <td>   simmidutta15@gmail.com </td>
                    </tr>

                    <tr>
                        <td> ER. RAJIV BALI </td>
                        <td> HOD ELECTRICAL ENGG. DEPT. </td>
                        <td>  iamrajeevbali@gmail.com 9419261818   </td>

                    </tr>
                    <tr>
                        <td> DR. S.K. GUPTA </td>
                        <td> HOD CIVIL ENGG. DEPT. </td>
                        <td>   9419132080<br></br>    skgcivil70@gmil.com</td>

                    </tr>
                    <tr>
                        <td> MR. SANJEEV GUPTA </td>
                        <td> HOD MECHANICAL ENGG. DEPT. </td>
                        <td>   sanjeevgupta2208@gmail.com 9419185026   </td>

                    </tr>
                    <tr>
                        <td>Enquiry regarding Ist Sem. Admission </td>
                        <td>N/A</td>
                        <td> 0191-2958077 <br></br>9797471794 <br></br>(During office timing : 9.00 am to 5.00 pm) </td>
                    </tr>
                </tbody>
            </table>

        </div>

    );
}
export default Contact;

