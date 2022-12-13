import Feed from "./Components/Feed";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#F1F1F1",
      minHeight: "100vh",
    }}>
    <Header/>
    <Feed/>
    <Footer/>
    </div>
  );
}

export default App;
