import Header from './Header'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  }
  const back = ()=>{
    navigate(-1);
  }
  return (
    <>
      <Header />
      <h1>About Page</h1>
      <button onClick={() => goToContact()}>Go to Contact Page</button>
      <button onClick={back}>Go Back</button>
    </>
  )
}

export default About
