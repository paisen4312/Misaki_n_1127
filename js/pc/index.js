'use strict';

$(function(){

//   var menuContents = $('<div>').addClass("menu-contents").addClass("hidden-menu").append('<a href="index.html">TOPPAGE</a><br>')
//   .append('<a href="events.html">EVENTS</a><br>')
//   .append('<a href="member.html">MEMBERS</a><br>')
//   .append('<a href="comingsoon.html">NEWS</a><br>')
//   .append('<a href="comingsoon.html">RESULTS</a><br>')
//   .append('<a href="https://twitter.com/waseda_ls2013">TWITTER</a><br>')
//   .append('<a href="https://www.instagram.com/ls_waseda/?hl=ja">INSTAGRAM</a><br>')
//   .append('<a href="history.html">HISTORY</a>')

// $('.menu').append(menuContents);

// $('.menu').click(function(){
//     if($('.menu-contents').hasClass("hidden-menu")){
//         $('.menu-contents').fadeIn(1000);
//         $('.menu-contents').removeClass("hidden-menu");
//     }else{
//         $('.menu-contents').fadeOut(1000);
//         $('.menu-contents').addClass("hidden-menu");
//     }
//     if($(this).hasClass("back")){
//         $(this).removeClass("back").children('.hub').text('MENU(開く)');
//     }else{
//         $(this).addClass("back").children('.hub').text('MENU(閉じる)') 
//     }
// });



// $('.menu-contents').children('a').hover(
//     function(){
//         $(this).stop(true).animate({color: "red", "font-size": "60px"}, 500);
//     },
//     function(){
//         $(this).stop(true).animate({color: "white", "font-size": "40px"}, 500);
//     }
// );

// /*
//     * Slideshow
//     */
// // slideshow クラスを持った要素ごとに処理を実行
// $('.slideshow').each(function () {
//     var $slides = $(this).find('img'), // すべてのスライド
//         slideCount = $slides.length,   // スライドの点数
//         currentIndex = 0;              // 現在のスライドを示すインデックス
//     // 1 番目のスライドをフェードインで表示
//     $slides.eq(currentIndex).fadeIn();
//     // 7500 ミリ秒ごとに showNextSlide 関数を実行
//     setInterval(showNextSlide, 5000);

//     //フェードアウト、フェードインを時間差をおいて行う関数
//     function showNextSlide(){
//             var nextIndex = fadeOutSlide();
//             setTimeout(function(){fadeInSlide(nextIndex)} , 1000);
//     }

//     // 次のスライドを表示する関数
//     function fadeOutSlide () {
//         // 次に表示するスライドのインデックス
//         // (もし最後のスライドなら最初に戻る)
//         var nextIndex = (currentIndex + 1) % slideCount;
//         // 現在のスライドをフェードアウト
//         $slides.eq(currentIndex).fadeOut(1000);
//         return nextIndex;
//     }

//     // 次のスライドを表示する関数
//     function fadeInSlide (nextIndex) {
//         // 次のスライドをフェードイン
//         $slides.eq(nextIndex).fadeIn(1000);
//         // 現在のスライドのインデックスを更新
//         currentIndex = nextIndex;
//     }
// });
/*
    * Slideshow
    */
$('.slideshow').each(function () {

    // 変数の準備
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        var $container = $(this),                                 // a
            $slideGroup = $container.find('.slideshow-slides'),   // b
            $slides = $slideGroup.find('.slide'),                 // c
            $nav = $container.find('.slideshow-nav'),             // d
            $indicator = $container.find('.slideshow-indicator'), // e
            // スライドショー内の各要素の jQuery オブジェクト
            // a スライドショー全体のコンテナー
            // b 全スライドのまとまり (スライドグループ)
            // c 各スライド
            // d ナビゲーション (Prev/Next)
            // e インジケーター (ドット)

            slideCount = $slides.length, // スライドの点数
            indicatorHTML = '',          // インジケーターのコンテンツ
            currentIndex = 0,            // 現在のスライドのインデックス
            duration = 500,              // 次のスライドへのアニメーションの所要時間
            easing = 'easeInOutExpo',    // 次のスライドへのアニメーションのイージングの種類
            interval = 5000,             // 自動で次のスライドに移るまでの時間
            timer;                       // タイマーの入れ物


    // HTML 要素の配置、生成、挿入
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 各スライドの位置を決定し、
        // 対応するインジケーターのアンカーを生成
        $slides.each(function (i) {
            $(this).css({ left: 100 * i + '%' });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });

        // インジケーターにコンテンツを挿入
        $indicator.html(indicatorHTML);


    // 関数の定義
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 任意のスライドを表示する関数
        function goToSlide (index) {
            // スライドグループをターゲットの位置に合わせて移動
            $slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
            // 現在のスライドのインデックスを上書き
            currentIndex = index;
            // ナビゲーションとインジケーターの状態を更新
            updateNav();
        }

        // スライドの状態に応じてナビゲーションとインジケーターを更新する関数
        function updateNav () {
            var $navPrev = $nav.find('.prev'), // Prev (戻る) リンク
                $navNext = $nav.find('.next'); // Next (進む) リンク
            // もし最初のスライドなら Prev ナビゲーションを無効に
            if (currentIndex === 0) {
                $navPrev.addClass('disabled');
            } else {
                $navPrev.removeClass('disabled');
            }
            // もし最後のスライドなら Next ナビゲーションを無効に
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('disabled');
            } else {
                $navNext.removeClass('disabled');
            }
            // 現在のスライドのインジケーターを無効に
            $indicator.find('a').removeClass('active')
                .eq(currentIndex).addClass('active');
        }

        // タイマーを開始する関数
        function startTimer () {
            // 変数 interval で設定した時間が経過するごとに処理を実行
            timer = setInterval(function () {
                // 現在のスライドのインデックスに応じて次に表示するスライドの決定
                // もし最後のスライドなら最初のスライドへ
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, interval);
        }

        // タイマーを停止る関数
        function stopTimer () {
            clearInterval(timer);
        }


    // インベントの登録
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // ナビゲーションのリンクがクリックされたら該当するスライドを表示
        $nav.on('click', 'a', function (event) {
            event.preventDefault();
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });

        // インジケーターのリンクがクリックされたら該当するスライドを表示
        $indicator.on('click', 'a', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                goToSlide($(this).index());
            }
        });

        // マウスが乗ったらタイマーを停止、はずれたら開始
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });


    // スライドショーの開始
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 最初のスライドを表示
        goToSlide(currentIndex);

        // タイマーをスタート
        startTimer();

    });


});