

$(function () {
    $('.snazzymenu').snazzyMenu({
        // options here
        theme: "",
    });
    AOS.init(
        {
            once: true,
        }
    );


    // Ngày kết thúc xác định
    var endDate = new Date(2024, 5 - 1, 30, 21, 0, 0, 0);
    // vì tháng trong js tính từ số 0 thay vì số 1 như thông thường, nên phải -1
    // Tính thời gian còn lại
    var countdownDate = Math.floor(endDate.getTime() / 1000);

    var flipdown = new FlipDown(countdownDate);
    flipdown.start();
    //scroll to top
    $.backToTop({
        icon: 'fas fa-hippo'

    });
    //owl carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            10000: {
                items: 1
            }
        }
    })
    // gán số vào phần dot
    $('.testimonial-carousel .owl-dot span').each(function (index, span) {
        $(span).html(index+1);

    });

    //xử lý nút btn-main-blog-ext
    $('#btn-main-blog-ext').on("click", function (e) {
        e.preventDefault();
        $(this).hide();

        $('#main-blog-ext').hide();
        $('#main-blog-ext').removeClass("d-none");
        $('#main-blog-ext').slideDown(1000);
        setTimeout(function () {
            $("#main-blog-ext").get(0).scrollIntoView();
        }, 1000);
    });
   

})