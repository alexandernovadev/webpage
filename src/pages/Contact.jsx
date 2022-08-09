import {useEffect} from "react"

export const Contact = () => {

  useEffect(() => {
    document.title = 'Portafolio | Contact'
  }, [])
  
  return (
    <div className="w3-black">
      <div className="titleContent">
        <h1>Contact</h1>
      </div>
    </div>
  )
}
