//JavaScript for index.html

const renderPosts = async() =>{
    //create a URI that makes a request to an endpoint
    let uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);
    const posts = await res.json();
   // console.log(posts);
}

window.addEventListener('DOMContentLoaded',() => renderPosts());