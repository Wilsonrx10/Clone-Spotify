import { BrowserRouter as Router } from "react-router-dom";
import {useEffect } from "react";
import Routers from "./router/router";
import { CurrentPlayProvider } from "./contexts/CurrentPlayContext";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import CurrentPlay from "./components/layout/CurrentPlay";
import axios from "axios";

function App() {
  

  useEffect(() => {
    const FetchData = async () => {
      await getToken();
    };
    FetchData();
  }, []);

  const getToken = async () => {
    try {      
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
          grant_type: import.meta.env.VITE_SPOTIFY_GRAND_TYPE,
          client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
          client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const token = {
        'value': response.data.access_token,
        'expire': response.data.expires_in
      }

      localStorage.setItem('token_acess_spotify_api',JSON.stringify(token))

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Router>
        <div className="bg-zinc-800 text-zinc-50 h-screen w-full flex flex-col">
          <CurrentPlayProvider>
            <div className="flex flex-1">
              <aside className="w-72 bg-zinc-950 px-6">
                <Nav />
              </aside>
              <main className="flex-1 px-6">
                <div>
                  <Header />
                </div>

                <div>
                  <Routers />
                </div>
              </main>
            </div>

            <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
              <CurrentPlay />
            </footer>
          </CurrentPlayProvider>
        </div>
      </Router>
    </>
  );
}

export default App;