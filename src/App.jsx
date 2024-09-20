import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Registration } from "./pages/Registration/Registration";
import { AwesomeEvent } from "./pages/AwesomeEvent/AwesomeEvent";
import { Footer } from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchEventsThunk } from "./redux/events/thunks";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEventsThunk())
  }, [dispatch])

  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/registration" element={<Registration />}/>
        <Route path="/view" element={<AwesomeEvent/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
