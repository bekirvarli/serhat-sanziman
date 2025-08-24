import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app-background">
        <Header />
        <div className="content">{/* Sayfa içerikleri buraya gelecek */}</div>
      </div>
      <Footer /> {/* Footer artık arka plan divi dışında */}
    </>
  );
}

export default App;
