
// token insta  IGQVJVb3BQanBHMGlxT3V0b2xhNzFSNVFKQThEa2JUSU15TzhKYzJ0Yy1oTlZARM2VyM0NyelY2UFBnbU9mSlhMeVNkYk1NVlJBTUJHTWE2MUFCMmt1NGZAFS2l4bEFOZAW15UU1yU1ZAJU25tNFNUX0psbgZDZD

import React from "react";

const feed = [
  {
    username: "@craocarioca",
    container: document.getElementById("instagram-feed1"),
    token: 'IGQVJYUGZAnQTIzOFc1WC1ubDB5aGNoYldlRGFxUEVJYkVScHdSNzdqOVg0bmRudlh4bWh2dWloM2RXcDNMTkloS0hMSnZAmZAm5lOHFqTVFZAbDAtM3N3RmdXWWp4QjM1ZAmVUY0J1aE1jeUk0dG1tTHpwRAZDZD',
    display_profile: true,
    display_biography: true,
    display_gallery: true,
    display_captions: true,
    max_tries: 8,
    callback: null,
    styling: true,
    items: 8,
    items_per_row: 4,
    margin: 1,
    lazy_load: true,
    on_error: console.error,
    contato: '(21) 97102-5148'
  },
];

const Posts = () => (
  <>
    <div id="instagram-feed1"></div>  

    <div>
      <span>{feed[0].username}</span>
      <br/>
      <span>{feed[0].contato}</span>

      
    </div>
  </>
);

export default Posts;
