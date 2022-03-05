import Header from "./components/header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className=" w-full  h-full p-5">
      <div className="h-full w-full">
        <Header />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
