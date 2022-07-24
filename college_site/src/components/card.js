import './message.css'

const card = (props) => {
    return (
        <div class="card">
            <img class="card-img-top" src={props.href} alt="Card image cap" />
            <div class="card-body text-center">
                <p class="card-text">{props.name}</p>
            </div>
        </div>
    )
}


export default card;
