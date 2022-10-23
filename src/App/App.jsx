import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Alert} from '../components/Alert';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import {About} from '../pages/About';
import {Home} from '../pages/Home';
import {NotFound} from '../pages/NotFound';
import {User} from '../pages/User';
import {AlertProvider} from '../context/AlertContext';
import {GithubProvider} from '../context/GithubContext';

function App() {
  return (

    // Establish the Github Provider
    <GithubProvider>
      
      {/* Establish Alert Provider */}
      <AlertProvider>

        {/* Hold the frontend that is rendered inside the root */}
        <div 
        className="App"
        >

          {/* Establish a route network for the frontend application */}
          <BrowserRouter>

            {/* Hold the container that renders our components and pages */}
            <div 
            className="flex flex-col justify-between h-screen"
            >

              {/* Hold the navigation component of our frontend */}
              <Navbar />

              {/* Hold the container that renders all our page routes */}
              <main
              className="container mx-auto px-3 pb-12"
              >

                {/* Hold the Alert component*/}
                <Alert />

                {/* Establish the routes */}
                <Routes>

                  {/* Define our Home route */}
                  <Route 
                  element={<Home />}
                  path="/" 
                  >
                  </Route>
                  
                  {/* Define our About route */}
                  <Route 
                  element={<About />}
                  path="/about" 
                  >
                  </Route>

                  {/* Define our User route */}
                  <Route 
                  element={<User />}
                  path="/user/:login" 
                  >
                  </Route>

                  {/* Define our 404 route */}
                  <Route 
                  element={<NotFound/>}
                  path="/*" 
                  >
                  </Route>
                </Routes>
              </main>

              {/* Hold the footer component for the frontend */}
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
