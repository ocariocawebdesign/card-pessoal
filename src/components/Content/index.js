import React from "react";
import Profile from "../Content/img/profile.png";
//import Btn1 from "../button"
//import InstagramLogo from "../Footer/img/instagram.png"
import WhatsAppLogo from "../Footer/img/whatsapp.png"
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
//import { render } from "preact";


/*const feed =
[{

      'username': '@craocarioca',
      'container': document.getElementById("instagram-feed1"),
      'token': 'IGQVJYUGZAnQTIzOFc1WC1ubDB5aGNoYldlRGFxUEVJYkVScHdSNzdqOVg0bmRudlh4bWh2dWloM2RXcDNMTkloS0hMSnZAmZAm5lOHFqTVFZAbDAtM3N3RmdXWWp4QjM1ZAmVUY0J1aE1jeUk0dG1tTHpwRAZDZD',
      'display_profile': true,
      'display_biography': true,
      'display_gallery': true,
      'display_captions': true,
      'max_tries': 8,
      'callback': null,
      'styling': true,
      'items': 8,
      'items_per_row': 4,
      'margin': 1,
      'lazy_load': true,
      'on_error': console.error
  }
];
*/
/*const btn1 = document.querySelector(".btn1");

function Btn1(){

btn1.addEventListener("click", () => {
  window.open(
    `https://api.whatsapp.com/send?phone=5521971025148&text=Olá! Acessei sua página pelo seu site card site! Quero mais informações sobre seu serviço.`
  );
});
};*/
//Meu token: IGQVJYUGZAnQTIzOFc1WC1ubDB5aGNoYldlRGFxUEVJYkVScHdSNzdqOVg0bmRudlh4bWh2dWloM2RXcDNMTkloS0hMSnZAmZAm5lOHFqTVFZAbDAtM3N3RmdXWWp4QjM1ZAmVUY0J1aE1jeUk0dG1tTHpwRAZDZD




const Content = () => (
  
  <div className="container">
    <main>

    <section id="conteudo">
      <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            
              <section id="conteudo-1">
                  <div className="row">
                      <div id="block-1" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="box-1 box-content_primary_1 ">
                                    <div className="img-profile-center">
                                          <img
                                            className="img-profile"
                                            src={Profile}
                                            alt="Foto perfil"
                                          />
                                      </div>
                                          <h1 className="text-center">O Carioca Web Design</h1>

                                          <p className="text-center">Desenvolvimento de sites</p>
                                          <div id="container-instagram-feed">
                                          <InstagramFeed className="col-xs-12 col-sm-12 instagram-imgs" token={'IGQVJYUGZAnQTIzOFc1WC1ubDB5aGNoYldlRGFxUEVJYkVScHdSNzdqOVg0bmRudlh4bWh2dWloM2RXcDNMTkloS0hMSnZAmZAm5lOHFqTVFZAbDAtM3N3RmdXWWp4QjM1ZAmVUY0J1aE1jeUk0dG1tTHpwRAZDZD'}  counter="6"/>
                                          </div>
                                          <a className="pullright" href="https://wa.me/5521971025148" target="_blank" rel="noreferrer"><img src={WhatsAppLogo} alt="Whatsapp"  /></a>

                          </div>

                      </div>
                  </div>
              </section>
                 
          </div>
      </div>
    </section>
      <section id="conteudo-fotos">
        <div className="container">
          <div className="row">
           
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Content;
