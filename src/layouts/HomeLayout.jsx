import React from "react"
import { AppRouter } from "../router/AppRouter"
import { NavBar } from "../UI/NavBar"

export const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <section id="main">
        <AppRouter />
      </section>
    </>
  )
}
