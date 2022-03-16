(function(){
    const menu = document.getElementById('menu');
    const menuNav = document.getElementById('menu-nav');
    const closeMenu = document.getElementById('close-menu');

    menu.addEventListener('click', () => {
        menuNav.style.display = 'grid';
    })

    closeMenu.addEventListener('click', () => {
        menuNav.style.display = 'none';
    })
})()


const next = document.getElementById('next');
const before = document.getElementById('before');
const comments = document.getElementById('comments');

next.addEventListener('click', (event) => {
    let commentsArray = [...comments.children];
    for(i=0; i<commentsArray.length; i++) {
        if (commentsArray[i].classList.contains('show') && 
            commentsArray[i] != commentsArray[i].parentNode.lastElementChild
            ){
            commentsArray[i].classList.remove('show')
            commentsArray[i].nextElementSibling.classList.add('show')
            break
        } else if (commentsArray[i].classList.contains('show') && 
            commentsArray[i] == commentsArray[i].parentNode.lastElementChild
            ){
            commentsArray[i].classList.remove('show')
            commentsArray[i].parentNode.firstElementChild.classList.add('show')
            break
        }
    }
})

before.addEventListener('click', (event) => {
    let commentsArray = [...comments.children];
    for(i=0; i<commentsArray.length; i++) {
        if (commentsArray[i].classList.contains('show') && 
            commentsArray[i] != commentsArray[i].parentNode.firstElementChild
            ){
            commentsArray[i].classList.remove('show')
            commentsArray[i].previousElementSibling.classList.add('show')
            break
        } else if (commentsArray[i].classList.contains('show') && 
            commentsArray[i] == commentsArray[i].parentNode.firstElementChild
            ){
            commentsArray[i].classList.remove('show')
            commentsArray[i].parentNode.lastElementChild.classList.add('show')
            break
        }
    }
})


