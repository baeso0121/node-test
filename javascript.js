$(function(){
// ------------------------------ 메인베너 시작 ------------------------------
    $('#intro_banner').on('mousewheel', function(e){
        e.preventDefault();
        $(this).slideUp(1000, 'easeInQuart');
    });
// ------------------------------ 메인베너 끝 ------------------------------
// ------------------------------ layout03 시작 ------------------------------
    let spanWidth=$('#layout03 .txt_bg .text .first div span').innerWidth();
    let $spanIc=$('#layout03 .txt_bg .text .first div');
    //console.log(spanWidth);
    
    function txtNext(){
        $spanIc.animate({
            'margin-left': -spanWidth
        }, 25000, 'linear', function(){
            $(this).css('margin-left', '0');
        })
    }
    let stop=setInterval(txtNext, 0);

    $spanIc.hover(function(){
        clearInterval(stop);
    }, function(){
        setInterval(txtNext, 0);
    })

    let spanWidthB=$('#layout03 .txt_bg .text .last div span').innerWidth();
    let $spanIcB=$('#layout03 .txt_bg .text .last div');
    //console.log(spanWidth);

    $spanIcB.css('margin-left', -spanWidthB);
    function txtNext2(){
        $spanIcB.animate({
            'margin-left': '0'
        }, 25000, 'linear', function(){
            $(this).css('margin-left', -spanWidthB);
        })
    }
    setInterval(txtNext2, 0);




    $(window).scroll(function() {
        let scrollPos = $(window).scrollTop();
        
        let $first = $("#layout03 .txt_bg .text .first");
        let $ic = $first.find(".ic");
        let $b = $first.find(".b");
        let $c = $first.find(".c");
        let $d = $first.find(".d");
        
        /*
        $ic.css("transform", "translateY(" + (scrollPos * -0.1) + "px)");
        $b.css("transform", "translateY(" + (scrollPos * -0.5) + "px)");
        $c.css("transform", "translateY(" + (scrollPos * -0.2) + "px)");
        $d.css("transform", "translateY(" + (scrollPos * -0.1) + "px)");
        */
        });



    const cursor=document.querySelector('.mouse_menu');
    const menuM=document.getElementById('layout03');
    console.log(menuM);

    window.addEventListener('mousemove', (e)=>{
        let x=e.clientX - cursor.clientWidth/2;
        let y=e.clientY - cursor.clientHeight/2;
        
        gsap.to(cursor, {
            duration: 0.3,
            x: x,
            y: y,
            ease: "power2.out",   //power1.in, .out, .inOut, elastic.in, bounce.out, back.inOut
        });
    });

    /*
    menuM.addEventListener('mouseenter', ()=>{
        cursor.style.display = 'block';
        cursor.style.transform = 'scale(1)';
    })

    menuM.addEventListener('mouseleave', ()=>{
        cursor.style.display = 'none';
        cursor.style.transform = 'scale(0)';
    })
    */
        
    
    $('#layout03').on('mouseenter', () => {
        $('#layout03 .mouse_menu').css({
            'transform': 'scale(1)'
        })
    });

    $('#layout03').on('mouseleave', () => {
        $('#layout03 .mouse_menu').css({
            'transform': 'scale(0)'
        })
    });
    
// ------------------------------ layout03 끝 ------------------------------
// ------------------------------ layout04 시작 ------------------------------
// ------------------------------ layout04 끝 ------------------------------
/*
    const cursor2=document.querySelector('.mouse_drag');
    const menuD=document.getElementById('layout04');

    window.addEventListener('mousemove', (E)=>{
        let x=E.clientX - cursor2.clientWidth/2;
        let y=E.clientY - cursor2.clientHeight/2;
        
        gsap.to(cursor2, {
            duration: 0.3,
            x: x,
            y: y,
            ease: "power2.out",   //power1.in, .out, .inOut, elastic.in, bounce.out, back.inOut
        });
    });

    menuD.addEventListener('mouseenter', ()=>{
        cursor2.style.display = 'block';
        cursor2.style.transform = 'scale(1)';
    })

    menuD.addEventListener('mouseleave', ()=>{
        cursor2.style.display = 'none';
        cursor2.style.transform = 'scale(0)';
    })
    */
});