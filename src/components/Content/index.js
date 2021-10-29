import React from "react";
import Profile from "../Content/img/profile.png";
//import InstagramLogo from "../Footer/img/instagram.png"
//import WhatsAppLogo from "../Footer/img/whatsapp.png"
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'




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


const whatsappButton = [{

  'actionButton': '',
  'containerButton': document.getElementById("container-button"),

}]

console.log(whatsappButton[0].containerButton);

*/
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
                                          
                                          <div id="container-instagram-feed">
                                          <InstagramFeed className="col-xs-12 col-sm-12 instagram-imgs" token={'IGQVJYUGZAnQTIzOFc1WC1ubDB5aGNoYldlRGFxUEVJYkVScHdSNzdqOVg0bmRudlh4bWh2dWloM2RXcDNMTkloS0hMSnZAmZAm5lOHFqTVFZAbDAtM3N3RmdXWWp4QjM1ZAmVUY0J1aE1jeUk0dG1tTHpwRAZDZD'}  counter="6"/>
                                          </div>
                          </div>

                      </div>
                  </div>
              </section>
                  <div id="container-button">
                  <button id="btn1" className="btn btn-danger">Clique</button>
                  </div>


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
