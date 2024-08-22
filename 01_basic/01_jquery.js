// $(document).ready(function(){

//     $('#btn').click(function(){
//         $('p').hide()
//     })

// })

$(document).ready(function () {

    // $('p').click(function(){
    //     $(this).hide()
    // })

    // $('p').click(function(){
    //     $(this).css("background-color", "yellow")
    //     $(this).css("color", "red")
    // })



    $('#input').focus(function () {
        $(this).css("background-color", "gray")
        $(this).css("color", "white")
    })

    $('.hide').click(function () {
        $('#input').hide(2000)
    })
    $('.show').click(function () {
        $('#input').show(1000)
    })

    // $('#btn').on({
    //     mouseenter : function(){
    //         $(this).css("background-color", "red")
    //     },
    //     mouseleave : function(){
    //         $(this).css("background-color", "green")
    //     },
    //     // click : function(){
    //     //     $(this).css("background-color", "blue")
    //     // }
    //     keypress : function(){
    //         $(this).css("background-color", "blue")
    //     }
    // })

    $('#toggle').click(function () {
        $('p').toggle(2000)
    })


    $('.stop1').click(function(){
        $('.#fade').stop()
    })
    $('#fade').click(function () {
        $('.cricle').fadeIn(3000)
        $('.cricle').fadeOut(3000)
        // $('.cricle').fadeToggle(2000)
    })

    

    $('#main').click(function () {

        $('#down').slideDown('slow', function(){
            alert('slide down')
        })
        $('#down').slideUp(4000)
    
    })

    $('.stop').click(function(){
        $('#down').stop()
    })

    $('#animate').click(function(){
        $('#other').animate({
                left: '250px',
                opacity: '0.6',
                height:'100px',
                
            });
    })

    $('#para').css('background-color', 'yellow').click(function(){
        $(this).hide()
        
    })
})