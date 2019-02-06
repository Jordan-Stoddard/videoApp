document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.carousel');
    var instances = M.Carousel.init(elems, {
            fullWidth: true, 
            duration: 200,
        })
    let instance = M.Carousel.getInstance(elems)
    setInterval(() => {
        instance.next(1)
    }, 4000)
  });

 