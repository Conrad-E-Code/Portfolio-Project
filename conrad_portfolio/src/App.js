import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom"
import ProjectPage from './components/ProjectPage';
import HomePage from './components/HomePage';
import railsLogo from "./images/rails-logo.png"
import jokeFactory from "./images/jf.png"
import trailerDepot from "./images/trailer_depot.jpg"
import campBCaster from "./images/campus_bcaster.jpg"
function App() {
  let homeHead = "Conrad Etherington"
  let homeCont = "Experienced Full Stack Software Engineer with expertise in Ruby, Rails, React, JavaScript. Adept at collaborating with cross-functional teams to develop innovative software solutions that improve the end-user experience. Also experienced in mobile mechanic and special projects management, with a background in lab analysis."
  let projects = [
    { points: [
      "Configured Rails API routing to direct client requests to appropriate server actions and serialize a JSON response.",
    "Implemented bcrypt authentication. using encrypted cookies requiring users to sign in to access private content. ",
    "Executed user stories and model relationships in a deliberate manner to minimize code rewriting."],
    demo: <iframe width="560" height="315" src="https://www.youtube.com/embed/hjBwnxklXGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    name: "burger_shop",
    deployed: false,
    details: "Burger-Shop",
    image: campBCaster,
    deploy_link: "",
    desc: "Food ordering system allows customers to easily view a menu, add items to their cart, and checkout with the total price. The system also provides a manager view to access inventory, process orders, and adjust menu item prices.",
    implemented: [
      {
        image: railsLogo,
        details: "Ruby on Rails",
        link: "https://rubyonrails.org/"
    },
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
      image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      details: "PostgreSQL",
      link: "https://www.postgresql.org/"
      }


    ]
  },
    { points: [
      "Developed a React front-end end with a Sinatra back-end.",
    "Full CRUD functionality with private routing client side and a persistent sign in feature.",
    "Can view, post and like comments and pictures. Likes are associative."],
    demo: <iframe width="560" height="315" src="https://www.youtube.com/embed/gmRb61TAfho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    name: "campus_broadcaster",
    deployed: false,
    details: "Campus Broadcaster",
    image: campBCaster,
    deploy_link: "",
    desc: "Full stack social media app for students.",
    implemented: [
      {
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        details: "React",
        link: "https://reactjs.org/"
    },
    {
      image: "https://sinatrarb.com/sinatra.github.com/images/logo.png",
      details: "Sinatra",
      link: "https://sinatrarb.com/documentation.html"
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


    ]
  },
    { points:  ["Dispatched HTTP requests to appropriate API endpoints for jokes and categories using JavaScript.","Configured dynamically rendered form for submitting properly structured POST requests to the correct endpoint.","Conformed to pre-existing API limitations, without sacrificing user functionality, by using creative JS logic and rendering."],
      video: "https://youtu.be/gmRb61TAfho",
      demo: <iframe width="560" height="315" src="https://www.youtube.com/embed/_vwP_0ux-3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
      name: "joke_factory",
      deployed: true,
      details: "The Joke Factory",
      image: jokeFactory,
      deploy_link: "https://conrad-e-code.github.io/The-Joke-Factory/",
      desc: "Interactive website allowing users to view/upload jokes, which are presented in a fun, interactive format.",
      implemented: [
        {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        details: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },


      ]
    },
    { points: [
      "Successful implementation of react-router to control client side routing.",
    "Explored Bootstrap UI kit and other possibilities using a react front end and a JSON server.",
    "Filter And Search Read Functionality. Users can also POST/DELETE trailers on the server."],
    demo: "",
    name: "trailer_depot",
    deployed: false,
    details: "Trailer Depot",
    image: trailerDepot,
    deploy_link: "",
    desc: "My first React app. A single page web app marketplace. "
  },

  ]
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
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      details: "PostgreSQL",
      link: "https://www.postgresql.org/"
      }
  ]
  //let homeCont = <img src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' width={250} height={250} alt="IMAGE" />
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route element={<ProjectPage header="Projects" map={projects} page="projects" />} path="/projects"/>
          <Route element={<ProjectPage header="Skills" map={skills} page="skills" />} path="/skills" />
          <Route element={<HomePage header={homeHead} content={homeCont} />} path="/"/>
      </Routes>
      
    </div>
  );
}

export default App;
