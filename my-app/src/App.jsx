import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewsSection from "./components/NewSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero/>
      <NewsSection/>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Your content goes here
          </h1>
          <p className="mt-3 text-slate-500">
            This is a dummy page body. Replace it with your actual content —
            the Header and Footer above are ready to go.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
