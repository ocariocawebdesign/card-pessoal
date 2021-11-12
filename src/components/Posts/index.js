

async function fetchPposts(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

//https://mcagames.com.br/wp-json/wc/store/products
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

  document.querySelector(
    "#post1"
  ).innerHTML = ` <h1 class="text-center text-uppercase">${dadosPost.postTitle}</h1>
                                                <p>${dadosPost.postContent}</p>
  
     
                 
     
                     `;
  document.querySelector(
    "#post2"
  ).innerHTML = ` <h1>${dadosPost.postTitle2}</h1>
<p>${dadosPost.postContent2}</p>


`;
});

// Fim //

