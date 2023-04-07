document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt('.animated' , {
        speed: 100,
        loop: true,
    })
    .type('Sou um front-end developer', { delay: 1000})
    .delete(22)
    .type('quase um front-end dev', {delay: 1000})
    .delete(26)
    .type('Não...' ,{delay: 500})
    .delete(6)
    .type('Sou um estudante de front :)', {delay: 1000}).pause(4000)
    .go();
})
const linkSobre = document.getElementById("link-sobre");
const toggle = document.getElementById("toggle");

document.querySelector('a[href="#about"]').addEventListener('click', function() {
    document.getElementById('toggle').checked = false;
  });