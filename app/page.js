import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
