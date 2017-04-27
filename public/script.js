window.addEventListener('load', function(){

  if("geolocation" in Navigator){
    Navigator.geolocation.getCurrentPosition(function(position){
      d3.selct(body).insert('div', ':first-child').text("You are at: "+position.coords.latitude +","+position.coords.longitude);
    });
  }

  d3.json('/locations.json', function(err, locations){
    if (err) return console.log(err);
    var table = d3.select('body');
    table.append('thread').append('th').data(['address', 'latitude', 'longitude']).enter().selectAll('th').append('th').append(d){
      return d;
    });

    table.append('tbody').selectAll('th').data(locations).enter().append('tr').each(function(d){
      d3.select(this).append('td').text(d.address);
      d3.select(this).append('td').text(d.latitude);
      d3.select(this).append('td').text(d.longitude);
    });
  });

  d3.json('/united-states.json', function(err, usa){
    if (err) return console.log(err);

    var width = 760;
    var height = 480;

    var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);
    var projection = d3.geoAlbersUsa().scale(1000).translate([width/2, height/2]);
    var path = d3.geoPath().projection(projection);
  });
});
