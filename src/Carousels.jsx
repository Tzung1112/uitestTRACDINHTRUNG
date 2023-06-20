import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel className='xetanh'>
            <Carousel.Item interval={500} className='anh'>
                <img
                    className="d-block w-100"
                    src="../images/slider_1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='conten'>
                    <h5>SPRING/SUMMER COLLECTION 2017</h5>
                    <p>Get up to 30% Off</p>
                    <p className='new'> New Arrivals</p>
                    <button type="button" class="btn btn-primary">SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={500} className='anh'>
                <img
                    className="d-block w-100 h-51"
                    src="../images/slider_2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className='conten'>
                    <h5>SPRING/SUMMER COLLECTION 2017</h5>
                    <p>Get up to 30% Off</p>
                    <p className='new'> New Arrivals</p>
                    <button type="button" class="btn btn-primary">SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='anh'>
                <img
                    className="d-block w-100 h-70"
                    src="../images/slider_3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className='conten'>
                    <h5>SPRING/SUMMER COLLECTION 2017</h5>
                    <p>Get up to 30% Off</p>
                    <p className='new'> New Arrivals</p>
                    <button type="button" class="btn btn-primary">SHOP NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;