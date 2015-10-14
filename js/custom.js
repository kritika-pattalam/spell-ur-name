$(document).ready(function(){
    getsaveddata();
    var array1 = ["apple", "ball", "cat", "dog", "elephant", "frog", "goat", "hat", "ice", "joke", "kite", "love", "monkey", "name", "orange", "price", "queue", "right", "site", "tank", "utsav", "vine", "white", "xerox", "yoyo", "zebra"];

    $('#reset').click(function () {
        $(".inner p").remove();
        $("#name").val("");
    });

    $('#submit').click(function () {      
        $(".inner p").remove();
        var searchTerm = $("#name").val();
        var text = searchTerm.split("");
        outerloop:
        for(i=0;i<=text.length-1;i++) {
            for(j=0;j<array1.length;j++) { 
                if (text[i].toLowerCase()== array1[j].substring(0, 1)) {
                    var letter = text[i].toUpperCase();
                    $(".inner").append("<p>" + letter + "-" + array1[j] + "</p>");
                    continue outerloop;
                } 
            }
        }
    });
    $('#save').click(function () {      
        if (('localStorage' in window) && window['localStorage'] !== null) {
        var divtosave = $(".inner").html();
        localStorage.setItem('saveddiv', divtosave);       
        getsaveddata();
            }
    });
    $('#clear').click(function () {      
        localStorage.clear();
        location.reload();
    });
});
function getsaveddata()
{
    if ('saveddiv' in localStorage) {
        $(".saved-data").html(localStorage.getItem('saveddiv'));
     }
}