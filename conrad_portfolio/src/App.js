import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom"
import ProjectPage from './components/ProjectPage';
import DemoPage from './components/DemoPage';
import HomePage from './components/HomePage';
import railsLogo from "./images/rails-logo.png"
function App() {
  let homeHead = "Conrad Etherington"
  let homeCont = "Experienced Full Stack Software Engineer with expertise in Ruby, Rails, React, JavaScript. Adept at collaborating with cross-functional teams to develop innovative software solutions that improve the end-user experience. Also experienced in mobile mechanic and special projects management, with a background in lab analysis."
  let skills = [
    {
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        details: "React",
        link: "https://reactjs.org/"
    },
    {
        image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/ruby_plain_logo_icon_146361.png",
        details: "Ruby",
        link: "https://www.ruby-lang.org/en/"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        details: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        image: railsLogo,
        details: "Ruby on Rails",
        link: "https://rubyonrails.org/"
    },
    {
        image: "https://cdn.icon-icons.com/icons2/2790/PNG/512/html_filetype_icon_177535.png",
        details: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      details: "GitHub",
      link: "https://github.com/Conrad-E-Code"
    },    
    {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    details: "CSS",
    link: ""
    },
    {
      image: "",
      details: "",
      link: ""
      }
  ]
  //let homeCont = <img src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' width={250} height={250} alt="IMAGE" />
  return (
    <div className="App">
      <NavBar />
      <Routes>
          {/* <Route element={<ProjectPage />} path="/projects"/> */}
          <Route element={<ProjectPage header="Skills" map={skills} />} path="/skills" />
          <Route element={<HomePage header={homeHead} content={homeCont} />} path="/"/>
      </Routes>
      
    </div>
  );
}

export default App;
