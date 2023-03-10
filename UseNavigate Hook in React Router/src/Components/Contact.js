import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();
  const goToHome = () =>{
    navigate('/')
  }
  const back = ()=>{
    navigate(-1);
  }

  return (
    <>
      <Header />
      <h1>Contact</h1>
      <button onClick={goToHome}>Go To Home Page</button>
      <button onClick={back}>Go Back</button>
    </>
  )
}

export default Contact
