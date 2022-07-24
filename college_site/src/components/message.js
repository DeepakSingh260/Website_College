
const message = (props) => {
    return (
        <div class="jumbotron">
            <h1>{props.title}</h1>
            {/* <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
            <hr class="my-4" />
            <p>{props.text}</p>
            {/* <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p> */}
        </div>
    )
}


export default message;
