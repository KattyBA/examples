/**
 * Created by Kat on 30.06.2016.
 */
(function() {
    var arrowLeft = document.querySelector('.arrow_left');
    var arrowRight = document.querySelector('.arrow_right');
    var listSlider = document.querySelector('.slider_list');
    var listSliderWidth = listSlider.offsetWidth;
    var item = document.querySelector('.slider_item');
    var items = document.querySelectorAll('.slider_item').length;
    var itemWidth = item.offsetWidth;
    var step = 0;

    console.log(listSliderWidth);
    console.log(step);

    arrowLeft.addEventListener('click', function() {

        step -= itemWidth;
        listSlider.style.left = step + 'px';

        if (listSliderWidth === (-step)) {
            step = 0;
            listSlider.style.left = step + 'px';
        }
    });

    arrowRight.addEventListener('click', function() {
        if (step >= 0) {
            step = -itemWidth * (items - 1);
            listSlider.style.left = step + 'px';
        } else {
            step += itemWidth;
            listSlider.style.left = step + 'px';
        }
    });

})();
