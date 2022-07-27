import './message.css'
import './card.css'

const card = (props) => {
    return (
        <div class="card-element card bg-dark text-white ">
            <a href="">
                <div className='card-image'>

                    <img class="card-img" src={props.href} alt="Card image" />
                </div>
                <div class="card-img-overlay d-flex justify-content-center">
                    <h4 class="card-overlay-text card-text text-white align-self-center ">{props.name}</h4>
                </div>

            </a>
        </div>
    )
}


export default card;
