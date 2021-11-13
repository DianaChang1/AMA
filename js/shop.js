//商品選擇
let rwdComputer = document.querySelectorAll('.rwdComputer a');
let rwdPhone = document.querySelectorAll('.rwdPhone');
let productItem = document.querySelectorAll('.productItem');
let fillter='All';
let sFilter ='All';
rwdComputer.forEach(function (dom, index) {
    dom.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.nowActive').classList.remove('nowActive');
        dom.classList.add('nowActive');
        console.log(dom.classList);
        fillter = dom.classList[0];
        productItem.forEach(function(dom){
            console.log(dom.childNodes);
           console.log (dom.childNodes[1].childNodes[1].childNodes[1].alt);
            if (fillter == dom.childNodes[1].childNodes[1].childNodes[1].alt || fillter== 'All'){
                dom.style.display = "block";
            }else{
                dom.style.display = "none";
            }
            // dom.style.display="none";
        });
    });
});

rwdPhone.forEach(function (dom, index) {
    dom.addEventListener('change', function () {
        sFilter=dom.value;
        productItem.forEach(function (dom) {
            if (sFilter == dom.childNodes[1].childNodes[1].childNodes[1].alt || sFilter == 'All') {
                dom.style.display = "block";
            } else {
                dom.style.display = "none";
            }
            // dom.style.display="none";
        });
    });
});