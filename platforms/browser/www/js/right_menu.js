// 로그아웃
function logout() {
  window.localStorage.removeItem("user_id");
  window.localStorage.clear();
    window.localStorage.removeItem("memberuid");
  window.localStorage.clear();
  user_id=null;
  memberuid=null;
   location.replace('login.html') ;

}
// 내 정보 보기
function view_mypage() {

  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_info_app.php",
   {
    uuid:uuid,
    memberuid:memberuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#member_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

$("#member_modal_contents").html(data);

   });




}

function view_msg() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_message_app.php",
   {
    uuid:uuid,
    memberuid:memberuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("MESSAGE LIST");
$("#mypage_modal_contents").html(data);

   });

}
function join_msg_box(room_no,by_uid) {
  var room_no=room_no;
  var by_uid=by_uid;
  console.log(room_no+" "+memberuid);


    $.post("http://gallerybear.com/my_message_room_app.php",
   {
    room_no:room_no,
    memberuid:memberuid,
    by_uid:by_uid
    
       },
   function(data){

  var modal = UIkit.modal("#mypage_uk_modal");

    modal.show();
 
$("#mypage_modal_title").html("MESSAGE ROOM");
$("#mypage_modal_contents").html(data);

  });
}


function view_view_list() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_view_list_app.php",
   {
    uuid:uuid,
    memberuid:memberuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");


    modal.show();
 
$("#mypage_modal_title").html("VIEW LIST");
$("#mypage_modal_contents").html(data);

   });

}


function delete_view(no) {
  var no=no;
   $.post("http://gallerybear.com/delete_view.php",
   {
    no:no
    
       },
   function(data){
          if (data=="ok") {
            view_view_list();
          }
   });
}
function view_picked_member() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_pickedmember_app.php",
   {
    uuid:uuid,
    memberuid:memberuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");


    modal.show();
 
$("#mypage_modal_title").html("PICKED MEMBER LIST");
$("#mypage_modal_contents").html(data);

   });

}

function delete_picked_member(no) {
  var no=no;
   $.post("http://gallerybear.com/delete_view.php",
   {
    no:no
    
       },
   function(data){
          if (data=="ok") {
            view_picked_member();
          }
   });
}



function view_picked_me() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_pickedme_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");


    modal.show();
 
$("#mypage_modal_title").html("PICKED ME");
$("#mypage_modal_contents").html(data);

   });

}

function delete_picked_me(no) {
  var no=no;
   $.post("http://gallerybear.com/delete_view.php",
   {
    no:no
    
       },
   function(data){
          if (data=="ok") {
            view_picked_me();
          }
   });
}


function view_photo_upload() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_photoupload_app.php",
   {
    uuid:uuid,
    memberuid:memberuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");


    modal.show();

 
$("#mypage_modal_title").html("PHOTO UPLOAD");
$("#mypage_modal_contents").html(data);

   });

}


function view_change_password() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/my_changepassword_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("CHANGE PASSWORD");
$("#mypage_modal_contents").html(data);

   });

}

function save_password() {
  var old_password=$("#old_password").val();
  var new_password=$("#new_password").val();
  var new_password2=$("#new_password2").val();
  if (!old_password) {
    alert_msg("MSG","PLZ old password");
    exit;
  }
  if (!new_password) {
    alert_msg("MSG","PLZ new password");
    exit;
  }

  if (!new_password2) {
    alert_msg("MSG","PLZ new password");
    exit;
  }

  if (new_password!=new_password2) {
   alert_msg("MSG","New password mismatch");
    exit; 
  }   

   $.post("http://gallerybear.com/save_password_app.php",
   {
   memberuid:memberuid,
   old_password:old_password,
   new_password:new_password
    
       },
   function(data){
    if (data=="ok") {
      alert_msg("thank change password");
      var modal = UIkit.modal("#mypage_uk_modal");

    modal.hide();

    } else {
     alert_msg(data);

    }
   });
}

function view_membershipwithdrawal() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/membershipwithdrawal_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("membership with drawal");
$("#mypage_modal_contents").html(data);

   });

}

function view_premium_service() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/premium_service_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("premium service");
$("#mypage_modal_contents").html(data);

   });

}


function view_terms() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/term_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("Terms and Conditions");
$("#mypage_modal_contents").html(data);

   });

}
function view_membershipwithdrawal() {
   var uuid=device.uuid;
 
    $.post("http://gallerybear.com/member_out.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("Membership Withdrawal");
$("#mypage_modal_contents").html(data);

   });
}



function view_setup() {
  var uuid=device.uuid;
 
    $.post("http://gallerybear.com/setup_app.php",
   {
    uuid:uuid
    
       },
   function(data){

  UIkit.offcanvas.hide('#offcanvas-right');
var modal = UIkit.modal("#mypage_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 
$("#mypage_modal_title").html("SETUP");
$("#mypage_modal_contents").html(data);

   });

}