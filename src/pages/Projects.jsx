import {useEffect} from "react"

export const Projects = () => {
      
  useEffect(() => {
    document.title = 'Portafolio | Projects'
  }, [])

  return (
    <div className="w3-black">
      <div className="titleContent">
        <h1>Projects</h1>
      </div>
    </div>
  )
}
