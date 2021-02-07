//JavaScript for index.html

const container = document.querySelector('.blogs');

const renderPosts = async() =>{
    //create a URI that makes a request to an endpoint
    let uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);
    const posts = await res.json();
   // console.log(posts);

   //output in DOM now!
   let template = '';
   posts.forEach(post => {
   //append the template += and use templateString to output the dynamic String using the template string `` ${}
    template += `
     <div class = "post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0,200)}</p>
        <a href="/details.html?id=${post.id}"> read more...</a>
     </div>
    `
});

container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded',() => renderPosts());