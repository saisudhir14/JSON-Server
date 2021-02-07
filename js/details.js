//JavaScript for details.html

//create a new URL Search params object

const id = new URLSearchParams(window.location.search).get('id');

const renderDetails = async() =>{
    //to get single endpoint/result 
    const res = await fetch('http://localhost:3000/posts' + id)

    }

window.addEventListener('DOMContentLoaded',() => renderDetails());