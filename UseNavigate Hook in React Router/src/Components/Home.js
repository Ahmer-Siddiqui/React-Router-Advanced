import Header from './Header'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const back = ()=>{
    navigate(-1);
  }
  return (
    <>
      <Header />
      <h1>Finally,My Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit impedit tenetur repellendus provident autem ut assumenda velit et nulla praesentium at, fugiat nihil perspiciatis neque amet soluta voluptates aliquam labore laboriosam dolorum aut rerum error obcaecati? Dolor officiis impedit debitis asperiores ipsa aliquid alias expedita. Nobis aut ratione assumenda?</p>
      <button onClick={back}>Go Back</button>
    </>
  )
}

export default Home
