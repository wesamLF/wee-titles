import './App.css'
import Nav from './components/custom-comp/Nav'
import Footer from './components/custom-comp/Footer';
import { Toaster } from "@/components/ui/toaster"
import TrendingContainer from './pages/trendingPage/TrendingContainer'
import { Route, Routes } from "react-router-dom";
import GenerateTitlesContainer from './pages/generateTitlesPage/GenerateTitlesContainer';
import TrendingTable from './pages/trendingPage/components/trendingTableSection/TrendingTable';
import TrendingGenres from './pages/trendingPage/components/trendingGenresSection/TrendingGenres';
import GenerateTitlesAi from './pages/generateTitlesPage/components/generateTitlesAiSection/GenerateTitlesAi';
import GenerateTitlesMostViewed from './pages/generateTitlesPage/components/generateTitlesMostViewedSection/GenerateTitlesMostViewed';
import Home from './pages/homePage/Home';
import ContactForm from './pages/homePage/componenets/contactFormSection/ContactForm';
import TrendingWelcomeMessage from './pages/trendingPage/components/TrendingWelcomeMessage/TrendingWelcomeMessage';
import GenerateTitlesWelcomeMessage from './pages/generateTitlesPage/components/generateTitlesWelcomeMessage/GenerateTitlesWelcomeMessage';


function App() {

  return (
    <div className="bg-[#fafafabb]  lg:min-h-screen flex flex-col">
      <Nav />
      <div className=" flex flex-col lg:flex-row">
        
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path='/trending' element={<TrendingContainer />}>
            <Route index element={<TrendingWelcomeMessage />} />
            <Route path='trending' element={<TrendingTable />} />
            <Route path='genres' element={<TrendingGenres />} />
          </Route>
          <Route path='/generate' element={<GenerateTitlesContainer />}>
            <Route index element={<GenerateTitlesWelcomeMessage />} />
            <Route path='ai' element={<GenerateTitlesAi />} />
            <Route path='mostviewed' element={<GenerateTitlesMostViewed />} />
          </Route> 
           <Route path='contact' element={<ContactForm />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />


    </div>
  )
}

export default App
