import React from 'react';
import './Contact_us.css';
const About_us = () =>{
  return (
    <div className='Contact_us'>
      <>
      <h3>Contact us</h3>
      </>
      <div class="container">
        <form action="action_page.php">

          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

          <input type="submit" value="Submit">

        </form>
      </div>  
    </div>
  );
}
export default Contact_us;
