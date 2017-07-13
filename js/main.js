/**
 * Created by beelarr on 7/10/17.
 */

let blog_posts = [{Title: "Studies-test", Copy: "Vestibulum quis ultricies ligula. Phasellus malesuada ut lectus eget euismod. Curabitur in orci lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris viverra, orci id bibendum tincidunt, nunc sapien mattis justo, lacinia luctus quam eros in neque. Sed ut mattis massa, viverra pellentesque ante. Nam sed metus nec ipsum suscipit iaculis. Mauris quis ultricies augue, scelerisque faucibus dolor. Cras sed consequat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Date: "Jan 1, 2017"}, {Title: "Future Studies-test", Copy: "In dignissim sagittis dui, ut ornare erat mollis a. Vestibulum ac venenatis eros. Nulla facilisi. Suspendisse potenti. Aliquam erat volutpat. Morbi fermentum mattis urna, at varius nunc scelerisque ut. Mauris porta libero non erat condimentum faucibus. Quisque mauris risus, congue eu varius ut, tempus id libero. Cras finibus ex lectus, ac tempus eros bibendum ut. Suspendisse tempor rutrum condimentum.", Date: "July 11, 2017"}];

markup = '';
gems.forEach(function (gem) {
    console.log(gem)
    markup += `<div class="cards" id="card1"> <img src="${gem.images}" alt="gem image" /><h4>${gem.name}</h4><p>${gem.description}</p></div>`
});

let productContainer = document.getElementById('products-container');
productContainer.innerHTML = markup;




blog_posts.forEach(function(blog) {
    console.log('new title', blog.Title);
    let location = document.getElementsByClassName('title');
    console.log('where were heading', location);
    for (let i = 0; i < location.length; i++) {
        console.log('location via loop', location[i]);
        location[i].innerHTML = blog.Title
    }
});

blog_posts.forEach(function(blog) {
    console.log('new title', blog.Copy);
    let location = document.getElementsByClassName('copy');
    console.log('where were heading', location);
    for (let i = 0; i < location.length; i++) {
        console.log('location via loop', location[i]);
        location[i].innerHTML = blog.Copy
    }
});

blog_posts.forEach(function(blog) {
    console.log('new title', blog.Date);
    let location = document.getElementsByClassName('date');
    console.log('where were heading', location);
    for (let i = 0; i < location.length; i++) {
        console.log('location via loop', location[i]);
        location[i].innerHTML = blog.Date
    }
});




   // let title =  document.getElementsByClassName('title');
   // console.log(title);
   //     blog_posts.title.innerHTML});
