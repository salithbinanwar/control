// import Register from './sections/Register';
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import Hero from './pages/Hero'
import { useNavigate } from 'react-router-dom'
// import Button from './components/Button';

export default function App() {
  const [cookies] = useCookies(['jwt'])
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.jwt) {
      navigate('/admindetails')
    }
  }, [cookies.jwt, navigate])

  return (
    <main>
      <section className="m-16">
        <Hero />
      </section>
    </main>
  )
}
