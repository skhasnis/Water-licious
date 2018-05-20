var apiKey = '7aa39eacc5f95d38e885ef4b09049101';

$(document).on('change', 'select', function() {
    
    var selection = $("#selection").find(":selected").val(); 

    $('#out').empty();
    $('#center').empty();

    var loading = $("#loading").show(); 

    $.getJSON("https://api.uwaterloo.ca/v2/foodservices/outlets.json?key=" + apiKey,
            
            function (d) {

              if (selection != "null") {
                 $("#center").append('<br> Check out the following places for ' + selection + ' items:'); 
              }

              if (selection == "null") {
                 $("#center").append('<br> Select a meal type from the list above.'); 

              }

                   $.each(d.data, function(i, locations) {

                     if (locations.has_breakfast == 1 && selection == "breakfast") {
                          $("#out").append('<li> ' + locations.outlet_name); 
                      } 

                    if (locations.has_lunch == 1 && selection == "lunch") {
                          $("#out").append('<li> ' + locations.outlet_name); 
                      } 

                       if (locations.has_dinner == 1 && selection == "dinner") {
                          $("#out").append('<li> ' + locations.outlet_name); 
                      } 
                     
                    });

           });

}); 





