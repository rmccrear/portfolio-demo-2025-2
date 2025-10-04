// App.jsx
import './App.css'
import HeroImage from './components/HeroImage'

// Presentational Component with children prop
function Header({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <hr />
    </>
  )
}

// Presentational Component with prop and children prop
function Navbar({ brandName, children }) {
  return (
    <>
      <div className="my-navbar">
        <div className="my-brand">
          {brandName}
        </div>
        <div className="my-nav-items-container">
          {children}
        </div>
      </div>
    </>
  );
}

// Presentational Component with props
function NavItem({ itemText, url }) {
  return (<>
    <div className="my-nav-item">
      <a href={url}>
      { itemText }
      </a>
    </div>
  </>)
}

// Presentational Component with children prop
function Container({ children }) {
  return (
    <>
      <div className="my-container">
        {children}
      </div>
    </>
  );
}

function App() {

  return (
    <>

      <Navbar brandName="Robert's Portfolio">
        <NavItem itemText="Login" url="/login"/>
        <NavItem itemText="About Me" url="/about"/>
        <NavItem itemText="Gallery" url="gallery"/>
      </Navbar>
      <HeroImage />
      {/* This Container component will format this section of the website */}
      <Container>
      {/* MAIN (Center website) */}
        <div className="main">

          <Header><i>Robert's website</i></Header>

          <h2>PORTFOLIO</h2>
          <p>Resize the browser window to see the responsive effect.</p>

          {/* Portfolio Gallery Grid */}
          <div className="row">
            <div className="column">
              {/* <Card imgUrl="/mountain.jpg" /> */}
            </div>
            <div className="column">
              <div className="content">
                <img src="/lights.jpg" alt="Lights" className="project-image" />
                <h3>My Work</h3>
                <p>Lorem ipsum..</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src="/nature.jpg" alt="Nature" className="project-image" />
                <h3>My Work</h3>
                <p>Lorem ipsum..</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src="/mountains.jpg" alt="Mountains" className="project-image" />
                <h3>My Work</h3>
                <p>Lorem ipsum..</p>
              </div>
            </div>
          </div>

          <div className="content">
            <img src="/bear.jpg" alt="Bear" className="project-image" />
            <h3>Some Other Work</h3>
            <p>Lorem ipsum..</p>
          </div>

          {/* END MAIN */}
        </div>
      </Container>
    </>
  )
}

export default App