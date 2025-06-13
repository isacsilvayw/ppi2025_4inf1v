import "./styles/theme.css";
import "./styles/global.css";
import { MyGrid } from "./components/MyGrid";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export default function App() {

  return (
    //React Fragment
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
