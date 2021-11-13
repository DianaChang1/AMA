let starArr=[4,1,5,2,3,5,1];
let timer;
function fadeInUpBig() {
   let scrollTOP = $(window).scrollTop();
    let artBanHeight = $('#artBan').outerHeight() - 30;
    $(".cats").each(function (index) {

        let current = $(this);
        let offsetTop = current.offset().top;
        let num = starArr[index];
        if (scrollTOP + artBanHeight > offsetTop) {
            current.find(".zero").removeClass("zero");
            for(let i=1;i<=num;i++){
                current.find(`i:nth-child(${i})`).addClass('active');
            }
        } else {
            current.find(".landPic div").addClass("zero");
            current.find('i').removeClass('active');
        }
    });
    if (scrollTOP + artBanHeight > $('#social').offset().top) {
        $('.socialSub').each(function () {
            let $domThis = $(this);
            let numVal = $(this).attr('data-count');
           // $(this).text(0);
            $({ percent: 0 }).delay(1000).animate({
                percent: numVal
            }, {
                    duration: 1500,/*全部跑完花費時間 */
                    progress: function () {
                        var now = this.percent;
                        $domThis.text(Math.floor(now))
                    }
                })
        });
        $(window).unbind("scroll");
    }

}
$(window).on("scroll", fadeInUpBig);



