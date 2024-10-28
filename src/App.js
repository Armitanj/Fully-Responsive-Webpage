import './App.css';
import Header from './Components/Header/Header'
import BestSeller from './Components/BestSeller/BestSeller'
import Experience from './Components/Experience/Experience'
import Materials from './Components/Materials/Materials'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.css'
import './responsive.css'
function App() {
  return (
    <div className="App">
      <Header />
      <BestSeller />
      <Experience />
      <Materials />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
