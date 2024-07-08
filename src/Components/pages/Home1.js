import React from 'react';
import '../Pagescss/Home1.css';
import Home2 from './Home2';

// Assuming your images are located in the public/images/ folder
const images = [
  'Home1.jpg',
  //'Home2.jpg',

  'Home3.jpg',
];

class Home1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    this.imageInterval = setInterval(this.nextImage, 3000); // Change image every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval);
  }

  nextImage() {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length
    }));
  }

  render() {
    const { currentImageIndex } = this.state;
    return (
      <>
        <br />
        <div className="homepaget">
          <div className="image-containerh">
            <img
              src={process.env.PUBLIC_URL + '/images/' + images[currentImageIndex]}
              alt="slideshow"
              className="slideshow-imageh"
            />
          </div>
          <br></br>
          <br></br>
          <h1 className="titleh">Welcome to My Home Assistant</h1>
          <br />
          <Home2 />
          <br />
          <div className='Abouth'>
            <h4><span>About</span></h4>
            <p>This is about Smart Home Assistant. Help in connteral home application.</p>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default Home1;
