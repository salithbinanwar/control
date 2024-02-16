import Navbar from './components/Navbar';
import Hero from './sections/Hero';
// import Button from './components/Button';
export default function App() {
  return (
      <main>
        <Navbar/>
        <section className='m-16'>
          <Hero/>
        </section>
      </main>
  )
}