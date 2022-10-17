import React from "react";
import { ref as refer, getStorage, getDownloadURL } from "firebase/storage"
import app from '../firebase';
import { useEffect, useState } from "react";
import './Department.css'


const Syllabus = () => {
	const storage = getStorage(app)


	const [co_s1, setCo_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_1.pdf")).then((value) => {
			setCo_s1(value)
		})
	})
	const [co_s2, setCo_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_2.pdf")).then((value) => {
			setCo_s2(value)
		})
	})
	const [co_s3, setCo_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_3.pdf")).then((value) => {
			setCo_s3(value)
		})
	})
	const [co_s4, setCo_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/COMPUTER/COMPUTER_4.pdf")).then((value) => {
			setCo_s4(value)
		})
	})

	const [c_s1, setC_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_1.pdf")).then((value) => {
			setC_s1(value)
		})
	})
	const [c_s2, setC_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_2.pdf")).then((value) => {
			setC_s2(value)
		})
	})
	const [c_s3, setC_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_3.pdf")).then((value) => {
			setC_s3(value)
		})
	})
	const [c_s4, setC_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Civil/Civil_4.pdf")).then((value) => {
			setC_s4(value)
		})
	})

	const [e_s1, setE_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_1.pdf")).then((value) => {
			setE_s1(value)
		})
	})
	const [e_s2, setE_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_2.pdf")).then((value) => {
			setE_s2(value)
		})
	})
	const [e_s3, setE_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_3.pdf")).then((value) => {
			setE_s3(value)
		})
	})
	const [e_s4, setE_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Electrical/Electrical_4.pdf")).then((value) => {
			setE_s4(value)
		})
	})
	const [ec_s1, setEc_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_1.pdf")).then((value) => {
			setEc_s1(value)
		})
	})
	const [ec_s2, setEc_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_2.pdf")).then((value) => {
			setEc_s2(value)
		})
	})
	const [ec_s3, setEc_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_3.pdf")).then((value) => {
			setEc_s3(value)
		})
	})
	const [ec_s4, setEc_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/E_C/E_C_4.pdf")).then((value) => {
			setEc_s4(value)
		})
	})

	const [m_s1, setM_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_1.pdf")).then((value) => {
			setM_s1(value)
		})
	})
	const [m_s2, setM_s2] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_2.pdf")).then((value) => {
			setM_s2(value)
		})
	})
	const [m_s3, setM_s3] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_3.pdf")).then((value) => {
			setM_s3(value)
		})
	})
	const [m_s4, setM_s4] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/Mechanical/Mechanical_4.pdf")).then((value) => {
			setM_s4(value)
		})
	})
	const [mtech_co_s1, setmtech_co_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/MTECH_Computer/MTECH_Computer_1.pdf")).then((value) => {
			setmtech_co_s1(value)
		})
	})
	const [mtech_ec_s1, setmtech_ec_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/MTECH_E_C/MTECH_E_C_1.pdf")).then((value) => {
			setmtech_ec_s1(value)
		})
	})
	const [mtech_m_s1, setmtech_m_s1] = useState("/")
	useEffect(() => {
		getDownloadURL(refer(storage, "syllabus_folder/MTECH_Mechanical/MTECH_Mechanical_1.pdf")).then((value) => {
			setmtech_m_s1(value)
		})
	})
	return (
		<div className='container'>
			<h1>Syllabus</h1>
			<table className='table_dep table table-hover '>
				<tr>
					<th scope='col'>Branch(B.E)</th>
					<th scope='col'>Semesters</th>
				</tr>
				<tbody>

					<tr>
						<td className="branch_name">Civil</td>
						<td className="syllabus_link"><a href={c_s1} target='_blank'>1-2</a></td>
						<td className="syllabus_link"><a href={c_s2} target='_blank'>3-4</a></td>
						<td className="syllabus_link"><a href={c_s3} target='_blank'>5-6</a></td>
						<td className="syllabus_link"><a href={c_s4} target='_blank'>7-8</a></td>
					</tr>
					<tr>
						<td className="branch_name">Computer</td>
						<td className="syllabus_link"><a href={co_s1} target='_blank'>1-2</a></td>
						<td className="syllabus_link"><a href={co_s2} target='_blank'>3-4</a></td>
						<td className="syllabus_link"><a href={co_s3} target='_blank'>5-6</a></td>
						<td className="syllabus_link"><a href={co_s4} target='_blank'>7-8</a></td>
					</tr>
					<tr>
						<td className="branch_name">E&C</td>
						<td className="syllabus_link"><a href={ec_s1} target='_blank'>1-2</a></td>
						<td className="syllabus_link"><a href={ec_s2} target='_blank'>3-4</a></td>
						<td className="syllabus_link"><a href={ec_s3} target='_blank'>5-6</a></td>
						<td className="syllabus_link"><a href={ec_s4} target='_blank'>7-8</a></td>
					</tr>
					<tr>
						<td className="branch_name">Electrical</td>
						<td className="syllabus_link"><a href={e_s1} target='_blank'>1-2</a></td>
						<td className="syllabus_link"><a href={e_s2} target='_blank'>3-4</a></td>
						<td className="syllabus_link"><a href={e_s3} target='_blank'>5-6</a></td>
						<td className="syllabus_link"><a href={e_s4} target='_blank'>7-8</a></td>
					</tr>
					<tr>
						<td className="branch_name">Mechanical</td>
						<td className="syllabus_link"><a href={m_s1} target='_blank'>1-2</a></td>
						<td className="syllabus_link"><a href={m_s2} target='_blank'>3-4</a></td>
						<td className="syllabus_link"><a href={m_s3} target='_blank'>5-6</a></td>
						<td className="syllabus_link"><a href={m_s4} target='_blank'>7-8</a></td>
					</tr>
					
				</tbody>
			</table>
			<table className='table_dep table table-hover '>
				<tr>
					<th scope='col'>Branch(M.Tech)</th>
					<th scope='col'>Semesters</th>
				</tr>
				<tbody>
					<tr>
						<td className="branch_name">Computer</td>
						<td className="syllabus_link"><a href={mtech_co_s1} target='_blank'>Download</a></td>
						
					</tr>
					<tr>
						<td className="branch_name">E&C</td>
						<td className="syllabus_link"><a href={mtech_ec_s1} target='_blank'>Download</a></td>
						
					</tr>
					
					
					<tr>
						<td className="branch_name">Mechanical</td>
						<td className="syllabus_link"><a href={mtech_m_s1} target='_blank'>Download</a></td>
						
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Syllabus;