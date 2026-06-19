import { useState } from 'react'
import Navbar       from './components/Navbar'
import ContactModal from './components/ContactModal'
import Hero         from './components/Hero'
import Marquee      from './components/Marquee'
import Collections  from './components/Collections'
import About        from './components/About'
import Catalog      from './components/Catalog'
import Services     from './components/Services'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer         from './components/Footer'
import PoliciesModal  from './components/PoliciesModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [policiesOpen, setPoliciesOpen] = useState(false)

  return (
    <>
      <Navbar onBookNow={() => setModalOpen(true)} />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      {policiesOpen && <PoliciesModal onClose={() => setPoliciesOpen(false)} />}

      <Hero />
      <Marquee />
      <Collections />
      <About />
      <Catalog />
      <Services />
      <Testimonials />
      <Contact />
      <Footer onPolicies={() => setPoliciesOpen(true)} />
    </>
  )
}
