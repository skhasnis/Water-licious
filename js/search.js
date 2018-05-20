var apiKey = '7aa39eacc5f95d38e885ef4b09049101';

$(document).ready(function() {
    
 
  $('#button').click('click', function(e){
    e.preventDefault(); 
  
    var searchstring = $('#searchBar').val(); 

     $('#out').empty();
     $('#center').empty();


    var count = 0; 

     $.getJSON("https://api.uwaterloo.ca/v2/foodservices/locations.json?key=" + apiKey,
            function (d) {

              var substring = searchstring.toLowerCase(); 

                   $.each(d.data, function(i, locations,){

                    var result = locations.description.toLowerCase().indexOf(substring); 


                    if (result != -1) {
                      $("#out").append('<li> <img src=' + locations.logo + ' class="logo"> <br> ' + locations.outlet_name 
                        + '<br> <b> Location: <b>' + locations.building ); 
                        count = count + 1;
                    }

                 });


                  if (count == 0) {
                     $("#center").append('<br> Sorry, could not find any locations that have <b>' + searchstring + '</b>. '); 
                  } 

            });

      });

}); 





