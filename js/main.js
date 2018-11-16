(() => {
    //get ref to the lottie container
    const preloader = document.querySelector('.preloader');

    let preloadAnim = bodymovin.loadAnimation({
        wrapper : preloader,
        animType : 'svg',
        loop : true, //change this to false and it'll only play once
        autoplay : false, //the auto autplay is true so we make it false so that it doesn't start to play until we mouse over it
        path : 'data/search.json'
    });

    function playAnimation() {
        preloadAnim.play();
    }

    preloader.addEventListener("mouseover", playAnimation); //this makes it so that when you mouseover it, it starts to spin

    function pauseAnimation() {
        preloadAnim.pause();
    }

    preloader.addEventListener("mouseout", pauseAnimation);
})();