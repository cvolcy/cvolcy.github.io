$(function(){
    if (!$('#days2go').length)
        return;
    
    var currentDate = new Date();
    var days2goDate = new Date(2018,3,23);
    var oneDay = 24*60*60*1000;

    var nb_days = Math.round(Math.abs((days2goDate.getTime() - currentDate.getTime())/(oneDay)))+1;

    $("#days2go #number").text(nb_days);
    $('title').text(""+ nb_days + " days 2 go");
    $("#days2go span:last").text(days2goDate.toDateString());
});