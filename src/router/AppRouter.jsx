import { Route, Routes } from "react-router-dom"
import { Contact } from "../pages/Contact"
import { Education } from "../pages/Education"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import { Works } from "../pages/Works"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  )
}
