(function() {
    'use strict';

    // Your code here...
    //$("#js_payChapter").hide()
    //$("#js_payChapter").attr("style","display: none;");
    var i=1;
    while(i%10000==0){$("#js_payChapter").attr("style","display: none;");i++;}
})();*/
var id = setInterval(function(){
$("#js_payChapter").attr("style","display: none;");
}, 200)
