import gcet_1 from '../Assets/gcet_1.jpg';
import gcet_2 from '../Assets/gcet_2.jpg';
import gcet_3 from '../Assets/gcet_3.jpg';
import gcet_4 from '../Assets/gcet_4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const imageslider = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="item active">
                    <img class="d-block w-80" src={gcet_1} alt="First slide" />
                </div>
                <div class="item">
                    <img class="d-block w-80" src={gcet_2} alt="Second slide" />
                </div>
                <div class="item">
                    <img class="d-block w-80" src={gcet_3} alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div>
    )

}

export default imageslider;