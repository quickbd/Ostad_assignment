import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todo from "./Pages/Todo";
function App() {
  return (
    <>
      <Header />

      <div className="mt-20 justify-center  max-w-screen-xl m-auto mb-16">
        <Todo />
      </div>
      <Footer />
    </>
  );
}

export default App;
