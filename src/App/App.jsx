import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import {About} from '../pages/About';
import {Home} from '../pages/Home';
import {NotFound} from '../pages/NotFound';
import {GithubProvider} from '../context/GithubContext';

function App() {
  return (
    <GithubProvider>
      <div 
      className="App"
      >
        <BrowserRouter>
          <div 
          className="flex flex-col justify-between h-screen"
          >
            <Navbar />

            <main
            className="container mx-auto px-3 pb-12"
            >
              <Routes>
                <Route 
                element={<Home />}
                path="/" 
                >
                </Route>
                <Route 
                element={<About />}
                path="/about" 
                >
                </Route>
                <Route 
                element={<NotFound/>}
                path="/*" 
                >
                </Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </GithubProvider>
  );
}

export default App;
