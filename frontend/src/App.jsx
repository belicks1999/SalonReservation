import Navbar from './components/Navbar';
import Hero from './components/Hero';
import bg from './assets/images/bg.jpg'


function App() {
 

  return (
    <>
   
    <div style={{backgroundImage: `url(${bg})` ,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  
    
    
    }}>
    <Navbar/>
     <Hero/>
     
    </div>
    </>
   
    
  )
}

export default App
