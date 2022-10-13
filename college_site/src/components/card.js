import './message.css'
import './card.css'
import React from 'react'

import {  getStorage, ref, getDownloadURL } from "firebase/storage";
import {initializeApp} from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyDEqfyY-4K9BiOK_b2q_MRlzpyUGPMOFBU",
    authDomain: "college-website-52b15.firebaseapp.com",
    databaseURL: "https://college-website-52b15-default-rtdb.firebaseio.com",
    projectId: "college-website-52b15",
    storageBucket: "college-website-52b15.appspot.com",
    messagingSenderId: "601211411642",
    appId: "1:601211411642:web:1bb9f6ec8f0f5e8785b683",
    measurementId: "G-XSZQHCY1FX"
  };
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service



class Card extends React.Component {
    componentDidMount() {
        if (this.props.external=='True'){         
            const storage = getStorage(app);
            getDownloadURL(ref(storage, 'TP_brochure (1).pdf'))
                .then((url) => {
                    // // `url` is the download URL for 'images/stars.jpg'
    
                    // // This can be downloaded directly:
                    // const xhr = new XMLHttpRequest();
                    // xhr.responseType = 'blob';
                    // xhr.onload = (event) => {
                    //     const blob = xhr.response;
                    // };
                    // xhr.open('GET', url);
                    // xhr.send();
    
                    // Or inserted into an <img> element
                    console.log(url)
                    const elem = document.getElementById('card_img_link');
                    console.log(elem)
                    elem.setAttribute('href', url);
                })
                .catch((error) => {
                    // Handle any errors
                });
        }

    }
    render() {
        return (
            <div class="card-element text-center card bg-dark text-white ">
                <a id= {this.props.id} href = {this.props.link} target='_blank'>
                    <div className='card-image'>

                        <img class="card-img" src={this.props.href}  alt="Card image" />
                    </div>
                    <div class="card-img-overlay d-flex justify-content-center">
                        <h4 class="card-overlay-text card-text text-white align-self-center ">{this.props.name}</h4>
                    </div>

                </a>
            </div>
        )
    }

}


export default Card;
