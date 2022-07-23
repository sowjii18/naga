import Carousel from 'react-bootstrap/Carousel';


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
             <img
          className="d-block w-25"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="First slide"
        />  
          <p>Name
          <br /> Role </p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://c4.wallpaperflare.com/wallpaper/165/275/593/colorful-windows-10-gradient-minimalism-soft-gradient-hd-wallpaper-preview.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <img
          className="d-block w-25"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="First slide"
        />  
          <p>Name
          <br /> Role </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://c4.wallpaperflare.com/wallpaper/165/275/593/colorful-windows-10-gradient-minimalism-soft-gradient-hd-wallpaper-preview.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <img
          className="d-block w-25 ml-5"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="First slide"
        />  
          <p>Name <br />
            Role  </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;