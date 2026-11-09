import { Navbar } from './Nav';
import { Hero } from './Hero';
import { Features } from './Features';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
