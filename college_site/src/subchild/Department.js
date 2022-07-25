import React from 'react';
import './Department.css'

const Departments = () =>{
  return (
    <div className='Department'>
      <h1>Administration</h1>
		<table className='table_dep'>
			<caption className="caption">PERSONAL SECTION (PRINCIPAL OFFICE)</caption>
			<tr>
				<th>S No.</th>
				<th>Name </th>
				<th>Post</th>
			</tr>
			<tr>
				<td>1</td>
				<td>Dr. Sameru Sharma</td>
				<td>Principal</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Mr. Soma Kumar</td>
				<td>Private Secretary to Principal</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Mr. Dinesh Magotra</td>
				<td>P.A. to Principal</td>
			</tr>
			<tr>
				<td>4</td>
				<td>Mr. Jatinder Antal</td>
				<td>Maintenance Assistant</td>
			</tr>
			<tr>
				<td>5</td>
				<td>Mr. Govind Kumar</td>
				<td>Lab Attendant</td>
			</tr>
			<tr>
				<td>6</td>
				<td>Mrs. Shafali Sanyal</td>
				<td>Lab Attendant</td>
			</tr>
			<tr>
				<td>7</td>
				<td>Mr. Virender Sethi</td>
				<td>Orderly</td>
			</tr>
			<tr>
				<td>8</td>
				<td>Mr. Janak Raj</td>
				<td>Orderly</td>
			</tr>
		</table>
		<table className='table_dep'>
			<caption className="caption">EXAMINATION SECTION</caption>
			<tr>
				<th>S No.</th>
				<th>Name </th>
				<th>Post</th>
			</tr>
			<tr>
				<td>1</td>
				<td>Dr. Simmi Dutta</td>
				<td>I/C Examination</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Er. Surjeet Singh Ranyal</td>
				<td>SLT</td>
			</tr>
			
		</table>

		<table className='table_dep'>
			<caption className="caption">REGISTRAR SECTION</caption>
			<tr>
				<th>S No.</th>
				<th>Name </th>
				<th>Post</th>
			</tr>
			<tr>
				<td>1</td>
				<td>	
Mrs. Vinakshi Koul, KAS</td>
				<td>Registrar</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Mrs. Phoola Koul</td>
				<td>Assistant Registrar</td>
			</tr>
			<tr>
				<td>3</td>
				<td>	
Mrs. Raj Kumari</td>
				<td>Section Officer (Administration)
</td>
			</tr>
			<tr>
				<td>4</td>
				<td>Mrs. Shanta Kumari</td>
				<td>Section Officer (Academics)</td>
			</tr>
			<tr>
				<td>5</td>
				<td>Mrs. Anjali Bhat</td>
				<td>	
Section Officer (Academics)</td>
			</tr>
			<tr>
				<td>6</td>
				<td>	
Mr. Rajinder Singh</td>
				<td>Section Officer (Establishment)</td>
			</tr>
			<tr>
				<td>7</td>
				<td>	
Mrs. Raj Rani</td>
				<td>Jr. Stenographer</td>
			</tr>
			<tr>
				<td>8</td>
				<td>Mr. Vikrant Jamwal</td>
				<td>	
Head Assistant</td>
			</tr>
			<tr>
				<td>9</td>
				<td>Mr. Jagmohan</td>
				<td>Workshop / Lab Assistant</td>
			</tr>
			<tr>
				<td>10</td>
				<td>	
Mr. Ajit Paul Singh</td>
				<td>Workshop / Lab Assistant</td>
			</tr>
			<tr>
				<td>11</td>
				<td>	
Mrs. Gulshan Devi</td>
				<td>	
Jr. Assistant</td>
			</tr>
			<tr>
				<td>12</td>
				<td>Mrs. Kamlesh Kumari</td>
				<td>Jr. Assistant</td>
			</tr>
			<tr>
				<td>13</td>
				<td>Mrs. Tilak Raj</td>
				<td>	
Lab Attendant</td>
			</tr>
			<tr>
				<td>14</td>
				<td>Mr. Murad Ali</td>
				<td>Orderly</td>
			</tr>
			<tr>
				<td>15</td>
				<td>Mr. Karim Baksh</td>
				<td>Orderly</td>
			</tr>
		</table>
	</div>
					
  );
}
export default Departments;

