//后宮成員輪播
let memInnerDiv = document.getElementById('memInnerDiv');
let toLeft = document.getElementById('toLeft');
let toRight = document.getElementById('toRight');
let num = 0;
let firstCat = document.querySelector('.cat:first-child');
let lastCat = document.querySelector('.cat:last-child');
memInnerDiv.insertBefore(lastCat, firstCat);
$("#memInnerDiv").css("left", -225);
toRight.addEventListener('click', function () {

    $('#memInnerDiv').animate({ "left": "-=225px" }, 400, function () {
        memInnerDiv.appendChild(document.querySelector('.cat:first-child'));
        $(this).css("left", '+=225px');
    });

});

toLeft.addEventListener('click', function () {

    $('#memInnerDiv').animate({ "left": "+=225px" }, 400, function () {
        memInnerDiv.insertBefore(document.querySelector('.cat:last-child'), document.querySelector('.cat:first-child'));
        $(this).css("left", '-=225px');
    });

});

//熱門商品輪播
let hotLeft = document.getElementById('hotLeft');
let hotRight = document.getElementById('hotRight');
let changeNum = document.getElementById('changeNum');
let hotContent = document.querySelector('.hotContent');
let dir = -1;
let interval = 8000;
let timer;
let number = 1;
if (window.matchMedia("(min-width: 768px)").matches) {
    timer = setInterval(slideTimer, interval);
    hotContent.appendChild(document.querySelector('.hotsell:first-child'));
    function slideTimer() {
        if (dir == -1) {

            if (number == 3) {
                number = 0
            }
            number++;
            hotContent.appendChild(document.querySelector('.hotsell:first-child'));
            changeNum.innerText = `0${number}`;

        } else {

            if (number == 1) {
                number = 4
            }
            number--;
            hotContent.insertBefore(document.querySelector('.hotsell:last-child'), document.querySelector('.hotsell:first-child'));
            changeNum.innerText = `0${number}`;
        }
    }
    hotRight.addEventListener('click', function (e) {
        e.preventDefault();
        dir = -1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
    hotLeft.addEventListener('click', function (e) {
        e.preventDefault();
        dir = 1;
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
    });
}

