import React from "react";
import ReactDOM, { render } from "react-dom";
import parser from "html-react-parser";
//import "./styles.css";

//https://www.npmjs.com/package/html-react-parser

class Blog extends React.Component {
  componentDidMount() {
    async function fetchPposts(url) {
      const response = await fetch(url);
      const jsonBody = await response.json();
      return jsonBody;
    }

    const requisicao = fetchPposts(
      "http://ocariocawebdesign-com-br.umbler.net/wordpress/wp-json/wp/v2/posts"
    );

    requisicao.then((response) => {
      const dadosPost = new Array();
      dadosPost["postId"] = response[0].id;
      dadosPost["postTitle"] = response[0].title.rendered;
      dadosPost["postContent"] = response[0].content.rendered;

      dadosPost["ipostId2"] = response[1].id;
      dadosPost["postTitle2"] = response[1].title.rendered;
      dadosPost["postContent2"] = response[1].content.rendered;

      console.log(dadosPost);

      const element = (
        <>
          <div className="post-box">
            <div>
              <h1 class="text-center text-uppercase">
                {parser(dadosPost.postTitle)}
              </h1>
              <p>{parser(dadosPost.postContent)}</p>
              <br />
            </div>

            <div>
              <h1 class="text-center text-uppercase">
                {" "}
                {parser(dadosPost.postTitle2)}{" "}
              </h1>
              <p>{parser(dadosPost.postContent2)}</p>
              <br />
            </div>
          </div>
        </>
      );

      const result = document.querySelector("#post");
      ReactDOM.render(element, document.querySelector("#post"));
    });
  }

  render() {
    return <></>;
  }
}
export default Blog;
