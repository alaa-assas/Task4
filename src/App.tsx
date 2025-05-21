import Footer from './sections/Footer/Footer'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import HandleLoadingComponent from './components/HandleLoadingComponent/HandleLoadingComponent'
import { footerData } from './data/FooterData'
import { NavBarData } from './data/NavBarData'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <HandleLoadingComponent />
      <ScrollToTop />
      <NavBarComponent data={NavBarData} />
      <Outlet />
      <Footer data={footerData}/>
    </>
  )
}

export default App
