import React , {useEffect , useState} from "react";



const Feedback = ()=>{
    const [selectedBranch, setSelectedBranch] = useState('COMPUTER');
    const [selectedYear, setSelectedYear] = useState('1');
    const [selectedFile, setSelectedFile] = useState('');

    const [isenabled_, enableList] = useState('');
    
    const handleBranchChange = event => {
        if(['MTECH_Computer', 'MTECH_E_C', 'MTECH_Mechanical'].includes(event.target.value)){
        enableList('true');
        }
        else{
        enableList('');
        }
        console.log('Label 👉️', event.target.selectedOptions[0].label);
        console.log(event.target.value);
        setSelectedBranch(event.target.value);
    };
    const handleYearChange = event => {
        console.log('Label 👉️', event.target.selectedOptions[0].label);
        console.log(event.target.value);
        setSelectedYear(event.target.value);
    };
    const getLink =(e)=>{

    }
    return(
        <div class = "container">
            <form className="update_form">
          <div className="row">

            <div className="col-lg-5 col-md-12">

              {/* <input className="input_" type="text" placeholder="Name" onChange={handleName} name="Update" /> */}
              {/* <textarea className="textarea_" cols='40' rows='50' type="text" placeholder="Enter Contribution" onChange={handleContribution} name="Update" /> */}
              <select className="input_" class='list_box' onChange={handleBranchChange} name="branch-names" id="branch-names">
                <option className="list_box_option" value="COMPUTER">Computer Engineering</option>
                <option className="list_box_option" value="Mechanical">Mechanical Engineering</option>
                <option className="list_box_option" value="Civil">Civil Engineering</option>
                <option className="list_box_option" value="Electrical">Electrical Engineering</option>
                <option className="list_box_option" value="E_C">Electronics and Communication Engineering</option>
                <option className="list_box_option" value="MTECH_Computer">M.Tech Computer</option>
                <option className="list_box_option" value="MTECH_E_C">M.Tech E&C</option>
                <option className="list_box_option" value="MTECH_Mechanical">M.Tech Mechanical</option>
              </select>
              <select className="input_" class='list_box' disabled={isenabled_} onChange={handleYearChange} name="semester-names" id="semester-names">
                <option className="list_box_option" value="1">1st year</option>
                <option className="list_box_option" value="2">2nd Year</option>
                <option className="list_box_option" value="3">3rd Year</option>
                <option className="list_box_option" value="4">4th Year</option>
              </select>
            </div>
            <div className="col-lg-5 col-md-12">
            <button onClick={(e) => { getLink(e); }} className='btn btn-danger' >
                <span className='ms-2' >Get Google Form Link</span>
              </button>
              </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 ">

              <button onClick={(e) => {
                console.log(contri)
                postContri(e, contri.Name, contri.Contribution, contri.ImgLink);
              }} className="btn btn-danger">Submit</button>
            </div>
          </div> */}

        </form>
        </div>
    )
}

export default Feedback;