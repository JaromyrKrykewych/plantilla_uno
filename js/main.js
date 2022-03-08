const nextComment = (e) => {
    let section = e.target.parentNode.parentNode;
    let comments = section.children[1].children;
    for ( i=0 ; i<comments.length ; i++) {
        if ( comments[i].className == 'active' ){
            comments[i].classList.toggle('active');
            comments[i].nextElementSibling.classList.toggle('active');
        }
        console.log(comments)
        break  
    }
}