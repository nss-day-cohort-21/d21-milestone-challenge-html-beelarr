/**
 * Created by beelarr on 7/10/17.
 */

let blog_posts = [{Title: "Studies", Copy: "Vestibulum quis ultricies ligula. Phasellus malesuada ut lectus eget euismod. Curabitur in orci lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris viverra, orci id bibendum tincidunt, nunc sapien mattis justo, lacinia luctus quam eros in neque. Sed ut mattis massa, viverra pellentesque ante. Nam sed metus nec ipsum suscipit iaculis. Mauris quis ultricies augue, scelerisque faucibus dolor. Cras sed consequat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Date: "Jan 1, 2017"}, {Title: "Future Studies", Copy: "In dignissim sagittis dui, ut ornare erat mollis a. Vestibulum ac venenatis eros. Nulla facilisi. Suspendisse potenti. Aliquam erat volutpat. Morbi fermentum mattis urna, at varius nunc scelerisque ut. Mauris porta libero non erat condimentum faucibus. Quisque mauris risus, congue eu varius ut, tempus id libero. Cras finibus ex lectus, ac tempus eros bibendum ut. Suspendisse tempor rutrum condimentum.", Date: "July 11, 2017"}];

let parent_container = document.querySelector('section.blog');
let info = '';
console.log('parent container', parent_container);
blog_posts.forEach(function (item){
    info += `<article>
                    <h4 class="title">${item.Title}</h4>
                    <p class="copy">${item.Copy}</p>
                    <p>Posted on <time class="date">${item.Date}</time>
                        by Bryon.
                    </p>
                    </article>`;


});
console.log(info)
parent_container.innerHTML = info;

console.log('postparent container', parent_container);



// blog_posts.forEach(function(blog) {
//     console.log('new title', blog.Title);
//     let location = document.getElementsByClassName('title');
//     console.log('where were heading', location);
//     for (let i = 0; i < location.length; i++) {
//         console.log('location via loop', location[i]);
//         location[i].innerHTML = blog.Title
//     }
// });
//
// blog_posts.forEach(function(blog) {
//     console.log('new title', blog.Copy);
//     let location = document.getElementsByClassName('copy');
//     console.log('where were heading', location);
//     for (let i = 0; i < location.length; i++) {
//         console.log('location via loop', location[i]);
//         location[i].innerHTML = blog.Copy
//     }
// });
//
// blog_posts.forEach(function(blog) {
//     console.log('new title', blog.Date);
//     let location = document.getElementsByClassName('date');
//     console.log('where were heading', location);
//     for (let i = 0; i < location.length; i++) {
//         console.log('location via loop', location[i]);
//         location[i].innerHTML = blog.Date
//     }
// });




   // let title =  document.getElementsByClassName('title');
   // console.log(title);
   //     blog_posts.title.innerHTML});
