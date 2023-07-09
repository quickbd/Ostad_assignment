import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import DefaultPage from './Pages/Content';
function App() {
 

  return (
    <>
    <Header/> 
    
    <div className="mt-20 justify-center  max-w-screen-xl m-auto mb-16">
    
    <DefaultPage/>
    
    <Footer/> 
    </div>
    </>
  )
}

export default App
