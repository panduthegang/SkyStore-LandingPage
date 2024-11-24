import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Dashboard } from './components/Dashboard';
import { Pricing } from './components/Pricing';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="dashboard">
        <Dashboard />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}