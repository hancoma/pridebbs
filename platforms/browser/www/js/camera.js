var add_category;
var add_mode;
var add_contents;
var add_room_no;
function getImage(cat,mode) {
    add_category=cat;
    add_mode=mode;
    if (add_mode=="freeboard") {
    add_contents=$("#freeboard_contents").val();
    } else if (add_mode=="parade")
    {
         add_contents=$("#parade_contents").val();
    } else if (add_mode=="chat"){
        add_room_no=$("#room_no").val();
    }


        console.log("camera"+cat + "mode "+add_mode+ " contents "+ add_contents);
        // Retrieve image file location from specified source
        navigator.camera.getPicture(uploadPhoto, function(message) {
alert('get picture failed');
},{
quality: 2,
destinationType: navigator.camera.DestinationType.FILE_URI,
sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
});}
    function uploadPhoto(imageURI) {
        console.log("category = "+add_category);
         navigator.notification.activityStart("PHOTO UPLOAD", "uploading photo");
        var options = new FileUploadOptions();
        options.fileKey="files";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        params.category=add_category;
        params.mode=add_mode;
        params.memberuid=memberuid;
        params.contents=add_contents;
        params.room_no=add_room_no;
     

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://m.gallerybear.com/upload_app.php", win, fail, options);
    }

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
navigator.notification.activityStop();
if (add_mode=="talent") {
      talent_show(add_category);
  } else if (add_mode=="freeboard") {

     freeboard_show(add_category);
  } else if (add_mode=="parade") {
    parade_show(add_category); 
  } else if (add_mode=="profile") {
    view_photo_upload();
  }

 var modal = UIkit.modal("#add_contents_uk_modal");
    modal.hide();       
        

    }

    function fail(error) {
        navigator.notification.activityStop();

    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
