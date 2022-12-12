setInterval(() => {
    let imgs = document.querySelectorAll('img');
    let back_imgs = document.querySelectorAll('[style*="background"]');
    imgs.forEach((a, i) => {a.src = 'https://peeee.netlify.app/pee.png'})
    back_imgs.forEach((a, i) => {a.src = 'https://peeee.netlify.app/pee.png'})
}, 500)