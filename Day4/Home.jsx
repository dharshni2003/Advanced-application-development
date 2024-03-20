import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import img2 from '../assets/images/girl.webp';
import img1 from '../assets/images/img1.jpg';
import wed from '../assets/images/wed.webp';
import bach from '../assets/images/Bachelorette.jpeg';
import cake from '../assets/images/cake.jpg';
import official from '../assets/images/official.jpg';
import Header from './Header';



function Home() {
  return (
    <div>
      <Header />
      <div className="image"></div>
      <div className="text">
        <h1>We Plan your best Events!!</h1>
      </div>
      <div className="homeimg1">
        <img src={img1} height={500} width={600} alt="Event 1"></img>
      </div>
      <div className='container1'>
        <div className='text1'>
          <h1>Our Story</h1>
          <h2>PARTYDesk was born into a great desire to create a truly customer-friendly service with a strong creative twist.</h2>
          <h3>The company was founded in 2014 after our dream to have a small, personalized but passionate and experienced team. The V PLANNERS team based in Athens-Lemessol-Milano was chosen due to its persistence in the industry and its excellent experience and dedication to events all around Greece & Worldwide.</h3>
        </div>
      </div>
      <div className="homeimg2">
        <img src={img2} height={400} width={500} alt="Event 2"></img>
      </div>
      <div className='container2'>
        <div className='text2'>
          <h1>About Us</h1>
          <h2>Welcome to PARTYDesk! We are your go-to destination for all things celebration-related. Our mission is to make your event planning experience as smooth and enjoyable as possible. Whether you're organizing a birthday bash, a corporate event, a wedding, or any other special occasion, we've got you covered.</h2>
          <h3>With years of experience in the industry, our team of experts is here to provide you with top-notch services and creative ideas to bring your vision to life. From venue selection to theme design, catering, entertainment, and everything in between, we take care of all the details so you can relax and enjoy the party.</h3>
        </div>
      </div>
      <div className='container3'>
        <div className='text3'>
          <h1>OUR PROJECTS</h1>
        </div>
      </div>
      <div className="container10">
        <div className="box10">
          <img src={wed} height={200} width={200} alt="Wedding Event"></img>
        </div>
        <div className="box11">
          <img src={bach} height={200} width={200} alt="Bachelorette Event"></img>
        </div>
        <div className="box12">
          <img src={cake} height={200} width={200} alt="Cake Event"></img>
        </div>
        <div className="box13">
          <img src={official} height={200} width={200} alt="Official Event"></img>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerNav">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='service'>Gallary</Link></li>
            <li><Link to='contact'>Contact us</Link></li>
          </ul>
        </div>
        <div className="footerBottom">
          <p>Follow us on social media:</p>
          <ul className="social-links">
  <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
  <li><a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
  <li><a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
</ul>

          <p>Copyright &copy;2022; Designed by <span className="designer">V Planners</span></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
