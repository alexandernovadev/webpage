import {useEffect} from "react"

export const Education = () => {
  
  useEffect(() => {
    document.title = 'Portafolio | Education'
  }, [])

  return (
    <div className="w3-black">
      <div className="titleContent">
        <h1>Education</h1>
      </div>
    </div>
  )
}
