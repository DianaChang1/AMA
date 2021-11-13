//點小圖換大圖
let smallProImg = document.querySelectorAll('.smallPro img');
smallProImg.forEach(function(dom,index){
    dom.addEventListener('click',function(){
        document.querySelector('.nowlook').classList.remove('nowlook');
        dom.classList.add('nowlook');
        document.querySelector('.larger').src =`images/png/dull-la${index}.png`;
    });
});

//加一減一
let add = document.getElementById('add');
let cut = document.getElementById('cut');
let number = document.querySelector('.number');
let buyNum=1;
add.addEventListener('click',function(){
    buyNum++;
    number.innerText = buyNum;
});
cut.addEventListener('click', function () {
    buyNum--;
    if (buyNum<=0){
        buyNum=1;
    }
    number.innerText = buyNum;
});

//手風琴動態
$(function () {
    $('.deContent').hide();
    $('#content1').show();
    $('#title1 .vertical').hide();
    $(".title").click(function () {
        $(this)
            .children('.vertical').hide()
            .parent()
            .next()
            .slideDown()
            .parent()
            .siblings()
            .children(".deContent")
            .slideUp()
            .siblings()
            .children(".vertical").show();
    });
});
