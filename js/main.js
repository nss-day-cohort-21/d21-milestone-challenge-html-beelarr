/**
 * Created by beelarr on 7/10/17.
 */

let blog_posts = [{Title: 'Studies-test', Copy: "Vestibulum quis ultricies ligula. Phasellus malesuada ut lectus eget euismod. Curabitur in orci lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris viverra, orci id bibendum tincidunt, nunc sapien mattis justo, lacinia luctus quam eros in neque. Sed ut mattis massa, viverra pellentesque ante. Nam sed metus nec ipsum suscipit iaculis. Mauris quis ultricies augue, scelerisque faucibus dolor. Cras sed consequat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

    Phasellus luctus maximus tortor, eu faucibus eros varius sed. Vivamus iaculis consectetur ante. Fusce ullamcorper diam a urna cursus ornare. Duis condimentum ultrices quam vel ornare. Mauris nisi nulla, bibendum in nulla nec, condimentum blandit ipsum. Vivamus ipsum ipsum, euismod quis ullamcorper vitae, lacinia non mauris. Morbi rhoncus tellus ut sapien aliquet, non vulputate nisi lacinia. Donec aliquet, tortor quis vestibulum ultrices, justo ipsum sollicitudin nulla, at hendrerit massa est id tortor. Fusce lobortis lobortis venenatis. Fusce vitae enim in libero convallis auctor a at dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus sit amet tellus egestas pulvinar sed vitae nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', Date: Jan 1, 2017}, {Title: Future Studies-test, Copy: 'In dignissim sagittis dui, ut ornare erat mollis a. Vestibulum ac venenatis eros. Nulla facilisi. Suspendisse potenti. Aliquam erat volutpat. Morbi fermentum mattis urna, at varius nunc scelerisque ut. Mauris porta libero non erat condimentum faucibus. Quisque mauris risus, congue eu varius ut, tempus id libero. Cras finibus ex lectus, ac tempus eros bibendum ut. Suspendisse tempor rutrum condimentum.

    Aliquam vestibulum molestie odio, et malesuada risus elementum euismod. Donec sed sodales arcu. Suspendisse ultrices diam ac neque congue, sit amet lacinia lorem bibendum. Maecenas nec quam sed tortor accumsan varius. Integer elementum condimentum lacus id aliquam. Etiam pretium tellus vel elit fermentum sollicitudin. Vestibulum pretium purus non ornare convallis. Vivamus tortor ligula, rhoncus ut malesuada et, sodales sed orci. Nam sed pretium metus, ac elementum ipsum.", Date: July 11, 2017}]

    let ourDogs = [];
ourDogs.push({owner: 'Bryon', name: 'Winston', breed: 'Twist', age: 17});
ourDogs.push({owner: 'Lori', name: 'Garry', breed: 'Black', age: 2});
console.log(ourDogs);

ourDogs.forEach(function(taco){
    console.log(taco.name, taco.age)
