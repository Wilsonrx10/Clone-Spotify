import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Routers from "./router/router";
import { CurrentPlayProvider } from "./contexts/CurrentPlayContext";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import CurrentPlay from "./components/layout/CurrentPlay";
import axios from "axios";

function App() {
  const [token, setToken] = useState<String>("");

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
          grant_type: "client_credentials",
          client_id: "7cfab9ca06984ee3a3c2bf7683e63db0",
          client_secret: "37ae3032d2284e518e7b32dd847b9fc7",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setToken(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  // const getToken = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://accounts.spotify.com/api/token',
  //       'grant_type=client_credentials',
  //       {
  //         params: {
  //           scope: 'streaming',
  //         },
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         auth: {
  //           username: '7cfab9ca06984ee3a3c2bf7683e63db0',
  //           password: '37ae3032d2284e518e7b32dd847b9fc7',
  //         },
  //       }
  //     );

  //     setToken(response.data.access_token);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <Router>
        <div className="bg-zinc-800 text-zinc-50 h-screen w-screen flex flex-col">
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