import Header from "./Pages/header";
import Footer from "./Pages/footer";
// import Parent from "./Pages/parent";
import Home from "./Component/Home";
import Counter from "./useState/counter";
import UpdateString from "./useState/stringState";
import ToggleText from "./useState/boolState";
import ThemeToggle from "./useState/colorChange";
import CounterEffect from "./useEffect/counterEffect";
import DataFetching from "./useEffect/datafetch";
import FormValidation from "./useState/formvalidation";

function App() {
  return (
    <>
      <Header />

      {/* <Parent /> */}
      {/* <Home /> */}

      <Counter />
      <FormValidation />  

      {/* <ToggleText /> */}
      {/* <ThemeToggle /> */}
      {/* <CounterEffect /> 
      <Footer /> */}
      {/* <DataFetching /> */}
    </>
  );
}

export default App;
