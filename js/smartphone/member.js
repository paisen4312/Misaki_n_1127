$(function(){

    $('.grade').click(function(){
        $('body').fadeOut(1000);
        var grade = $(this).attr("id");
        setTimeout(function(){changeMember(grade)} , 2000);
    });
    
    $(document)
    .on('mouseover','.player', function(){
        $(this).find('span').stop(true).animate({opacity: 0.8}, 1000);
        $(this).find('p').stop(true).animate({top: '300px', opacity: 1}, 500);
    })
    .on('mouseout','.player', function(){
        $(this).find('span').stop(true).animate({opacity: 0}, 1000);
        $(this).find('p').stop(true).animate({top: 0, opacity: 0}, 500);
    })
    .on('click','.player', function(){
      if($(this).find('span').hasClass('info')){
        $(this).find('span').removeClass('info').stop(true).animate({opacity: 0}, 1000);
        $(this).find('p').stop(true).animate({top: 0, opacity: 0}, 500);
      }else{
        $(this).find('span').addClass('info').stop(true).animate({opacity: 0.8}, 1000);
        $(this).find('p').stop(true).animate({top: '300px', opacity: 1}, 500);
      }
    });
    
    
     function changeMember(grade){
        $(window).load(function() {
            $('body').fadeIn(800);
        });
     };
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
    //     
    // });
    $('.grade').hover(
        function(){
            $(this).stop(true).animate({color: "red"}, 500);
        },
        function(){
            $(this).stop(true).animate({color: "black"}, 500);
        });
    
    });