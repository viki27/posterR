
var show = function(){
    $('#myModal').modal('show');
};

$(window).load(function(){
    var timer = window.setTimeout(show,5000);
});