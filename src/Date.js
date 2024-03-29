import Carousel from 'react-bootstrap/Carousel';
import Card from './Card';


function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://c4.wallpaperflare.com/wallpaper/165/275/593/colorful-windows-10-gradient-minimalism-soft-gradient-hd-wallpaper-preview.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <p className="text-dark">Date </p>
        <p className="text-dark">varalakshmi vratham</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://c4.wallpaperflare.com/wallpaper/165/275/593/colorful-windows-10-gradient-minimalism-soft-gradient-hd-wallpaper-preview.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Date 
        <br />vinayaka chavithi</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://c4.wallpaperflare.com/wallpaper/165/275/593/colorful-windows-10-gradient-minimalism-soft-gradient-hd-wallpaper-preview.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <p>Date </p>
        <p>Diwali</p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;