var apiKey = '7aa39eacc5f95d38e885ef4b09049101';

function time() {
    var d = new Date();
    return d.toTimeString() + " (" + d.getSeconds() + "." + d.getMilliseconds() + ")";
}

$(function() {
    
    var count = 0; 

    $.getJSON("https://api.uwaterloo.ca/v2/foodservices/locations.json?key=" + apiKey,
            function (d) {

            var loading = $("#loading").hide(); 

            $.each(d.data, function(i, locations) {
                if (locations.is_open_now == true) {
                     $("#out").append('<li> <img src=' + locations.logo + ' class="logo"> <br> ' + locations.outlet_name 
                        + '<br> <b> Location: <b>' + locations.building ); 
                    count = count + 1; 
                } 
            });

            if (count == 0) {
                $("#center").append('Sorry, there are not any places open on campus right now.'); 

                }

                console.log(d);

        });

});




