import React from "react"
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
//import '../css/responsive.css';
import { Helmet } from "react-helmet";

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>O Carioca Web Design</title>
          <link rel="canonical" href="https://ocariocapessoalcard.gatsbyjs.io/"/>
        </Helmet>
      </div>
    )
  }
}


const Home = () => (

  <>
  <Header/>

   <Content/>
   
  <Footer/>
  </>
);

export default Home;
