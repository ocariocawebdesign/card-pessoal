import React from "react";
import Profile from "../Content/img/profile.png";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import { DiscussionEmbed } from "disqus-react";
//import Post from "../Posts/index.js";
import Blog from '../Blog';
//https://www.npmjs.com/package/react-modal-video

const Content = () => (
  <div className="container">
    <main>
      <section id="conteudo">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <section id="conteudo-1">
              <div className="row">
                <div
                  id="block-1"
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                >
                  <div className="box-1 box-content_primary_1 ">
                    <div className="img-profile-center">
                      <img
                        className="img-profile"
                        src={Profile}
                        alt="Foto perfil"
                      />
                    </div>
                    <h1 className="text-center">O Carioca Web Design</h1>
                    <p className="text-center">
                      Desenvolvedor de Web sites Front-End | HTML5 / CSS3 /
                      Bootstrap / Javascript / Wordpress.{" "}
                    </p>
                    <div id="container-instagram-feed">
                      <InstagramFeed
                        className="col-xs-12 col-sm-12 instagram-imgs"
                        token={
                          "IGQVJVb3BQanBHMGlxT3V0b2xhNzFSNVFKQThEa2JUSU15TzhKYzJ0Yy1oTlZARM2VyM0NyelY2UFBnbU9mSlhMeVNkYk1NVlJBTUJHTWE2MUFCMmt1NGZAFS2l4bEFOZAW15UU1yU1ZAJU25tNFNUX0psbgZDZD"
                        }
                        counter="12"
                      />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="postsContainer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Blog/>
              <div id="post" className=""></div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div id="post2" className=""></div>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>
      <section id="conteudo-fotos">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <DiscussionEmbed
              shortname="ocariocaweb"
              config={{
                url: "http://localhost:8000/",
                identifier: 0,
                title: "comentarios com react",
                language: "pt_BR", //e.g. for Traditional Chinese (Taiwan)
              }}
            />
          </div>
        </div>
            </section>
     
    </main>
  </div>
);

export default Content;
