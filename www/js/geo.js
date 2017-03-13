var user_id = window.localStorage.getItem("user_id");
var memberuid = window.localStorage.getItem("memberuid");


      function geo_onSuccess(position) {
        point_x=position.coords.latitude;
        point_y=position.coords.longitude;
        console.log(memberuid+'Latitude: '  + position.coords.latitude +'Longitude: ' + position.coords.longitude);
        save_gps(point_x,point_y);
        move_map(point_x,point_y);
        map.setZoom(11);
    }

    
 function geo_error(position) {
        alert_msg('code: '    + error.code    + '\n' +
              'No geo infomation');
    }

function save_gps(point_x,point_y) {
      var point_x=point_x;
      var point_y=point_y;
      $.post("http://pridebbs.com/save_gps_app.php",
   {  
          memberuid:memberuid,
          point_x:point_x,
          point_y:point_y
    
       } , function(data){
console.log(data);
   });
}