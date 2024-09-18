import s from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

function App() {
  return (
      <div className={s.container}>
        <Header/>
        <Home />
      </div>
  );
}

export default App;
