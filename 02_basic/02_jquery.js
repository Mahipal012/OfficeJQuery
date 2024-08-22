$(document).ready(function(){
    $('#btn').click(function(){
        // $("#para").text('hello world')
        // $('#para').html('<h1>hello world</h1>')
        // $('#para').val('hello world !')
        // $('#para').append(' hello')
        // $('#para').prepend(' hello')
        $('#para').after(' add after')
        $('#para').before(" add before ")
    })

    

    $('#link').click(function(){
        alert($('#google').attr('href'))
    })

    $('#clean').click(function(){
    //    $('#main').remove() 
    // $('#main').empty()
    })

    // dom

    // console.log($('#child').parent().css("color", "red"))
    // console.log($('#child').parents().css({"color": "red", "border": "2px solid black"}))
    // $('#child').parentsUntil('div').css("border", "2px solid black")

    // console.log($('div').children().css("border", "2px solid black"))
    // $('div').find('a').css('border', "1px solid green")
    // $('div').find('*').css('border', "1px solid green")

    // $('h1').siblings().css("border", "2px solid black")
    // $('h1').siblings('p').css("border", "2px solid black")
    // $('p').nextAll().css("border", "2px solid black")
    $('p').nextUntil('b').css("border", "2px solid black")
   
})
