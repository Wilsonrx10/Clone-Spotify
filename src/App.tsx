import Container from "./components/layout/Container"
import CurrentPlay from "./components/layout/CurrentPlay"
import Header from "./components/layout/Header"
import Nav from "./components/layout/Nav"

function App() {
  return (
    <>
      <div className="bg-zinc-800 text-zinc-50 h-full w-full flex flex-col">

        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-950 px-6">
            <Nav />
          </aside>
          <main className="flex-1 px-6">
            <Header/>
            <Container />
          </main>
        </div>

        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
          <CurrentPlay />
        </footer>

      </div>
    </>
  )
}

export default App