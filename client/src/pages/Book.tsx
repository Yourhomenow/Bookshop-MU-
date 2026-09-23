
import { useParams } from 'react-router-dom';
import '../App.css'
import NavBar from '../components/Navbar';

function OurTeam() {
  const { id } = useParams();

  return (
    <>
      <NavBar/>
      <h1 className='text-center antialiased  my-3 text-secondary text-3xl font-bold text-shadow-lg'>
        The book key is : { id }
      </h1>

      
    </>
  )
}

export default OurTeam
