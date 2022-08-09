import {useEffect} from "react"

export const Home = () => {
    
  useEffect(() => {
    document.title = 'Portafolio'
  }, [])

  return (
    <>
      <header
        className="w3-container w3-padding-32 w3-center w3-black"
        id="home"
      >
        <h1 className="w3-jumbo">
          <span className="w3-hide-small">I'm</span> Alexander Nova.
        </h1>
        <h4>
          <strong>
            <u>Software Developer </u>
          </strong>
        </h4>
      </header>
      <div class="w3-panel w3-padding-16">
        <p className="w3-margin-32 w3-text-white text">
          Thanks for viewing my portfolio 🛸, my path in programming begins when
          I see Java code for the first time 📔, by the way I don't like Java, I
          hate Jframe hahahaha 🤢🤢, after a long journey I understand the
          basics of programming logic, and In 2013 I ventured to create web
          pages with bootstrap, and some animations with js 👓. My desire for
          knowledge led me to be self-taught and learn PHP and Mysql.
        </p>
      </div>

      <div class="w3-container w3-padding-32 w3-center w3-black">
        <img
          src="https://alexsk88.org/_next/image?url=%2Fassets%2Fyoda.webp&w=384&q=75"
          alt=""
        />
        <img
          src="https://alexsk88.org/_next/image?url=%2Fassets%2Fyoda.webp&w=384&q=75"
          alt=""
        />
      </div>

      <div class="w3-panel w3-padding-16">
        <p className="w3-margin-32 w3-text-white text">
          Thanks to youtube and many tutorials I managed to create my first app
          with codeIgniter, with a lot of spaghetti code 😱 but it is honest
          work as the meme says, after that app many more would come with
          Laravel. Learning many good programming practices 🎓. I decide to give
          it a try Look at AngularJS, after taking many Angular courses from
          Fernando Herrera on Udemy 💼.
        </p>
      </div>

      <div class="w3-container w3-padding-32 w3-center w3-black">
        <img
          src="https://alexsk88.org/_next/image?url=%2Fassets%2Fyoda.webp&w=384&q=75"
          alt=""
        />
        <img
          src="https://alexsk88.org/_next/image?url=%2Fassets%2Fyoda.webp&w=384&q=75"
          alt=""
        />
      </div>

      <div class="w3-panel w3-padding-16">
        <p className="w3-margin-32 w3-text-white text">
          Going back to React and Node, I am contacted by a startup, where I
          start working with several new tools 🗡🔨, one of them Docker, and
          improving AWS skills with s3, rds, etc. In each company there is
          always something new to learn and in this case learning flutter and
          how to upload an app to the stores was the best. See how flutter
          improved the performance of the app.
        </p>
      </div>

      <div class="w3-container w3-padding-32 w3-center w3-black">
        <img
          src="https://alexsk88.org/_next/image?url=%2Fassets%2Fyoda.webp&w=384&q=75"
          alt=""
        />
        <img
          src="https://alexsk88.org/_next/image?url=%2Fassets%2Fyoda.webp&w=384&q=75"
          alt=""
        />
      </div>

      <div class="w3-panel w3-padding-16">
        <p className="w3-margin-32 w3-text-white text">
          When I feel fullstack power 🎓📅📄, that's when I decide to look for a
          job. what started as a hobby could feed me 💰, I joined my first
          company where they taught me the basics of SEO and a lot of ReactJS,
          redux, advanced JSX.SQL, NodeJS. By this time I didn't want to go back
          to PHP anymore, I had found a love for javascript.📈
        </p>
      </div>
    </>
  )
}
