

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
  console.log(response);


  const dadosPost = new Array();
  dadosPost["postId"] = response[0].id;
  dadosPost["postTitle"] = response[0].title.rendered;
  dadosPost["postContent"] = response[0].content.rendered;

  console.log(typeof dadosPost);

const blogDados = [];
//Aqui estou pegando os dados do objeto dadosPost e jogando dentro o arrray blogDados
blogDados.push(dadosPost);



response.forEach((i, index, array)=>{
  //Quando index for 0 mostrar todos index
  console.log(`${index} : ${i}`)
  if(array[0] !== [0] ){
    
  blogDados.push(response[index].id, response[index].title.rendered, response[index].content.rendered )
  }
})


  document.querySelector(
    "#posts"
  ).innerHTML = `


        <div class="container>
     

        ${blogDados} 
       

        </div>
                 
     
                     `;
});

// Fim //

