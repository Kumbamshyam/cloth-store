import '../src/style.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Offer1stsection from './components/Offer1stsection'
import Newtrendsection from './components/Newtrendsection'

function App() {
  return (
    <>
      {/* --------------- ❤️   Navbar ❤️  --------------------- */}
      <Navbar title="Home" language="English" loginAndSingup="Login & Singup" />
      
      {/* // <!-- ---------------------- ❤️ carosel/banner section ❤️ ----------------------- --> */} 
      <Banner/>

      {/* // <!-- -----------------❤️ 1st offer section ❤️--------------------- --> */}
      <Offer1stsection/>

      {/* <-------------------- trend section ------------------------------> */}
      <Newtrendsection/>
    </>
  );
}

export default App;
