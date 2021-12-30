$('header').load("header.html");
$('.main-side').load("../common/side.html");
$('.view-change').load("../common/viewChange.html");
$('.index-view-change').load("common/indexViewChange.html");
$('.index-sp-view-change').load("common/indexSpViewChange.html");


  var menuContents = $('<div>').addClass("menu-contents").addClass("hidden-menu").append('<a href="index.html">TOPPAGE</a><br>')
  .append('<a href="events.html">EVENTS</a><br>')
  .append('<a href="member.html">MEMBERS</a><br>')
  .append('<a href="comingsoon.html">NEWS</a><br>')
  .append('<a href="comingsoon.html">RESULTS</a><br>')
  .append('<a href="https://twitter.com/waseda_ls2013">TWITTER</a><br>')
  .append('<a href="https://www.instagram.com/ls_waseda/?hl=ja">INSTAGRAM</a><br>')
  .append('<a href="history.html">HISTORY</a>')

$('.menu').append(menuContents);

$('.menu').click(function(){
    if($('.menu-contents').hasClass("hidden-menu")){
        $('.menu-contents').fadeIn(1000);
        $('.menu-contents').removeClass("hidden-menu");
    }else{
        $('.menu-contents').fadeOut(1000);
        $('.menu-contents').addClass("hidden-menu");
    }
    if($(this).hasClass("back")){
        $(this).removeClass("back").children('.hub').text('MENU(開く)');
    }else{
        $(this).addClass("back").children('.hub').text('MENU(閉じる)') 
    }
});



$('.menu-contents').children('a').hover(
    function(){
        $(this).stop(true).animate({color: "red", "font-size": "60px"}, 500);
    },
    function(){
        $(this).stop(true).animate({color: "white", "font-size": "40px"}, 500);
    }
);


window.onload = function() {
    window.scroll(0,0);
};
//
$(document)
.on('mouseover', '.header-content', function(){
    $(this).stop(true).animate({color: "red", "font-size": "27px"}, 500);
    }
)
.on('mouseout', '.header-content', function(){
    $(this).stop(true).animate({color: "white", "font-size": "20px"}, 500);
    }
);

$(document)
.on('mouseover', '.view-change', function(){
    $(this).find('a').stop(true).animate({color: "red"}, 500);
    }
)
.on('mouseout', '.view-change', function(){
    $(this).find('a').stop(true).animate({color: "black"}, 500);
    }
)
.on('mouseover', '.member-view-change', function(){
    $(this).find('a').stop(true).animate({color: "red"}, 500);
    }
)
.on('mouseout', '.member-view-change', function(){
    $(this).find('a').stop(true).animate({color: "black"}, 500);
    }
)
.on('mouseover', '.grade-link', function(){
    $(this).find('a').stop(true).animate({color: "red", fontSize: "45px"}, 500);
    }
)
.on('mouseout', '.grade-link', function(){
    $(this).find('a').stop(true).animate({color: "white", fontSize: "40px"}, 500);
    }
);

// $('.grade').click(function(){
//     $('main').fadeOut(1000); 
//     var grade = $(this).attr("id");
//     setTimeout(function(){href(grade)} , 1000);
//     setTimeout(function(){changeMember(grade)} , 2000);
// });

function href(grade){
    window.location.href ='member.html'
        $(window).load(function() {
            $('body').fadeIn(800);
        });
};

// function changeMember(grade){

//     var leftPicRow = $('<img>').addClass("selected-header first-pic").attr("src" , "../img/" + grade + "/1.jpeg");
//     $('.first-pic').replaceWith(leftPicRow);

//     var row = $('<h1>').addClass("selected-header selected-main").text(grade);
//     $('.selected-main').replaceWith(row);

//     var rightPicRow = $('<img>').addClass("selected-header second-pic").attr("src" , "../img/" + grade + "/2.jpeg");
//     $('.second-pic').replaceWith(rightPicRow);

//     $('#members').load("../member/" + grade + ".html");
//     $('#regends').load("../member/" + grade + ".html");
//     $('.main-content').fadeIn(1000);
//     $('.selected-grade').fadeIn(1000);
// };

        /*
     * Sticky header
     */
    $(document)
    .find('header').each(function () {

        var $window = $(window), // Window オブジェクト
            $header = $(this),   // ヘッダー

            // ヘッダーのクローン
            $headerClone = $('.contents').contents().clone(),

            // ヘッダーのクローンのコンテナー
            $headerCloneContainer = $('<div class="header-clone invisible"></div>'),

            // HTML の上辺からヘッダーの底辺までの距離 = ヘッダーのトップ位置 + ヘッダーの高さ
            threshold = $header.offset().top + $header.outerHeight() + 130;

        // コンテナーにヘッダーのクローンを挿入
        var $clone = $("<div class='contents'></div>")
        $clone.append("<a class='header-content' href='index.html'>TOPPAGE</a><a class='header-content' href='events.html'>EVENTS</a><a class='header-content' href='member/19th.html'>MEMBERS</a><a class='header-content' href='comingsoon.html'>NEWS</a><a class='header-content' href='comingsoon.html'>RESULTS</a><a class='header-content' href='https://twitter.com/waseda_ls2013'>TWITTER</a><a class='header-content' href='https://www.instagram.com/ls_waseda/?hl=ja'>INSTAGRAM</a><a class='header-content' href='member/history.html'>HISTORY</a>");
        $headerCloneContainer.append($clone);

        // コンテナーを body の最後に挿入
        $headerCloneContainer.appendTo('body');

        // スクロール時に処理を実行するが、回数を 1 秒間あたり 15 までに制限
        $window.on('scroll', $.throttle(1000 / 15, function () {
            if ($window.scrollTop() > threshold) {
                $header.removeClass('visible');
                $header.addClass('invisible');
                $headerCloneContainer.addClass('visible');
                $headerCloneContainer.removeClass('invisible');

            } else {
                $header.addClass('visible');
                $header.removeClass('invisible');
                $headerCloneContainer.removeClass('visible');
                $headerCloneContainer.addClass('invisible');

            }
        }));

        // スクロールイベントを発生させ、初期位置を決定
        $window.trigger('scroll');
    });