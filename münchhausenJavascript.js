/**
 * Created by Madole on 5/08/2014.
 */
(function() {
    var limit = 10000;
    for(var i = 0; i<limit; i++) {
        var arr = i.toString().split('');
        var total = 0;
        for(var j=0; j<arr.length; j++) {
            total += Math.pow(arr[j], arr[j]);
        }
        if(total.toString() === i.toString()) {
            console.log(i + ' is a Munchasen Number');
        }
    }
})();

