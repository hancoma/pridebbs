var user_id = window.localStorage.getItem("user_id");
var memberuid = window.localStorage.getItem("memberuid");
var menu;
var chat_check_id;
if (!memberuid) {
  alert_msg("error","plz login");
   location.replace('login.html') ;
}
function open_left() {
    UIkit.offcanvas.show('#offcanvas-left');
    load_left();
}

function open_right() {
    UIkit.offcanvas.show('#offcanvas-right');
    load_right();
}

// msg 
function alertDismissed() {
    // do something
}

function alert_msg(title,msg) {
    var title=title;
    var msg=msg;
   navigator.notification.alert(
    msg,  // message
    alertDismissed,         // callback
    title,            // title
    'OK'                  // buttonName
);
}
function load_left() {
    $.post("http://gallerybear.com/left_menu_app.php",
   {
    
    
       },
   function(data){
$("#left_menu").html(data);
   });
}

function load_right() {
    $.post("http://gallerybear.com/right_menu_app.php",
   {
    
    
       },
   function(data){
$("#right_menu").html(data);
   });
}
function main_show() {
  mode="main";
 $("#company_list").height("70%");
 $.post("http://gallerybear.com/map_api_app.php",
   {
    mode:mode
    
       },
   function(data){
$("#company_list").html(data);
   });

}
function talent_show(cat) {
  var cat=cat;
  // 지도 숨김 
  mode="self_camera";
  $("#company_list").height("100%");
  $("#map").hide();
  $("#top_banner").show();
 $.post("http://gallerybear.com/talent_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
  UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function freeboard_show(cat) {
  var cat=cat;
    mode="freeboard";
  $("#company_list").height("100%");
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/freeboard_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function parade_show(cat) {
  var cat=cat;
     mode="letsdrive";
  $("#company_list").height("100%");
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/parade_list_app.php",
   {
    cat:cat
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}
function open_url(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_self', 'location=no');
}

function chat_job_show(cat) {
  var cat=cat;
   mode="chat";
  $("#company_list").height("100%");
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/chat_job_app.php",
   {
    sub_code:cat,
    memberuid:memberuid
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function chat_job_show2(cat) {
  var cat=cat;
   mode="letsdrive";
  $("#company_list").height("100%");
   $("#map").hide();
  $("#top_banner").show();
  $("#top_banner").html("freeboard");
 $.post("http://gallerybear.com/chat_job_app.php",
   {
    sub_code:cat,
    memberuid:memberuid
    
       },
   function(data){

$("#company_list").html(data);

   });

}

function chat_show() {
    console.log(memberuid);
    $("#map").hide();
  $("#top_banner").show();
 
   $.post("http://gallerybear.com/chat_app.php",
   {
    
    memberuid:memberuid
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function chat_show2() {
  console.log(memberuid);
 
   $.post("http://gallerybear.com/chat_app.php",
   {
    
    memberuid:memberuid
    
       },
   function(data){

$("#company_list").html(data);

   });

}


function friend_show() {
    $("#map").hide();
  $("#top_banner").show();
 mode="around";

  $("#company_list").height("100%");
   $.post("http://gallerybear.com/around_list_app.php",
   {
    
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function more_friend() {
  var last_no=$("#last_no").val();
  console.log(last_no);
    $.post("http://gallerybear.com/around_list_app.php",
   {
    last_no:last_no
    
       },
   function(data){

$("#company_list").append(data);
var obj = $("#member_list").offset();

   });

}

function global_show(sub_code) {
  var sub_code=sub_code;
   
  $("#company_list").height("100%");
   $("#map").hide();
  $("#top_banner").show();
  mode="global";
   $.post("http://gallerybear.com/global_list_app.php",
   {
    sub_code:sub_code
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function more_global() {
  var last_no=$("#last_no").val();
  var sub_code=$("#sub_code").val();;
  console.log(last_no);
    $.post("http://gallerybear.com/more_global_list_app.php",
   {
    last_no:last_no,
    sub_code:sub_code
    
       },
   function(data){

$("#company_list").append(data);
var obj = $("#member_list").offset();
console.log("left: " + obj.left + "px, top: " + obj.top + "px");

   });

}


function premium_show(sub_code) {
  var sub_code=sub_code;
   $("#map").hide();
  $("#top_banner").show();
   mode="premium";
  $("#company_list").height("100%");
 	console.log(sub_code);
  if (sub_code==1) {
    var url="http://gallerybear.com/premium1_app.php";
  }
  if (sub_code==2) {
    var url="http://gallerybear.com/premium2_app.php";
  }
  if (sub_code==3) {
    var url="http://gallerybear.com/premium3_app.php";
  }
  if (sub_code==4) {
    var url="http://gallerybear.com/premium4_app.php";
  }

   $.post(url,
   {
    
    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}

function premium_search_show(sub_code,data1,data2,data3,data4) {
  var sub_code=sub_code;
	var data1=data1;
  	var data2=data2;
  	var data3=data3;
  	var data4=data4;
  console.log(data2);  
  if (sub_code==1) {
  	


  	
    var url="http://gallerybear.com/premium1_app.php";
  }
  if (sub_code==2) {
    var url="http://gallerybear.com/premium2_app.php";
  }
  if (sub_code==3) {
    var url="http://gallerybear.com/premium3_app.php";
  }
  if (sub_code==4) {
    var url="http://gallerybear.com/premium4_app.php";
  }

   $.post(url,
   {
    data1:data1,
    data2:data2,
    data3:data3,
    data4:data4    
       },
   function(data){

$("#company_list").html(data);
UIkit.offcanvas.hide('#offcanvas-left');
   });

}




    function map_menu_show() {
      $("#map_sub_menu").toggle(500);
      // body...
    }
    function freeboard_menu_show() {
 
      $("#freeboard_sub_menu").toggle(500);
      // body...
 }
 function self_camera_menu_show () {
      $("#self_camera_sub_menu").toggle(500);
      // body...
  }
  function parade_menu_show() {
      $("#parade_sub_menu").toggle(500);
      // body...
 }
 function sns_menu_show() {
      $("#sns_sub_menu").toggle(500);
     
}
function global_menu_show() {
      $("#global_sub_menu").toggle(500);
 }
 function premium_menu_show() {
      $("#premium_sub_menu").toggle(500);
  
 }
 // 메뉴 클릭
// 맵 보이기 
function map_show(kind_no) {
  var kind_no=kind_no;
  mode="main";
  $("#company_list").height("100%");
  var url="http://gallerybear.com/map_api_app.php";
  UIkit.offcanvas.hide('#offcanvas-left');
   $.post(url,
   {
    kind_no:kind_no
    
       },
   function(data){

$("#company_list").html(data);
$("#map").show();
$("#top_banner").hide();
 
   });
}

function more_map_api(last_no) {
  var last_no=last_no;
  var url="http://gallerybear.com/map_api_more_app.php";

   $.post(url,
   {
    last_no:last_no
    
       },
   function(data){
$("#shop_list_body").append(data);
 
   });
}

// 모달 호출 
function contents_modal_show(menu,no) {
    var menu=menu;
    var no=no;
    console.log(menu+" "+no);
    if (menu=="talent") {
      var url="http://gallerybear.com/talent_info_modal_app.php";
    }
    if (menu=="freeboard") {
      var url="http://gallerybear.com/freeboard_info_modal_app.php";
    }
if (menu=="parade") {
      var url="http://gallerybear.com/parade_info_modal_app.php";
    }

     $.post(url,
   {
    no:no,
    memberuid:memberuid
    
       },
   function(data){

$("#modal_contents").html(data);

   });

var modal = UIkit.modal("#contents_uk_modal");


    modal.show();

 jQuery("#modal_title").html(menu);
}

function member_info_modal_show(memberuid) {
  var memberuid=memberuid;
    $.post("http://gallerybear.com/member_info_modal_app.php",
   {
    no:memberuid
    
       },
   function(data){

$("#member_modal_contents").html(data);

   });


var modal = UIkit.modal("#member_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

}


function open_shop(no) {
  var no=no;
    $.post("http://gallerybear.com/shop_info_modal_app.php",
   {
    no:no
    
       },
   function(data){

$("#shop_modal_contents").html(data);

   });
$("#shop_modal_title").html("SHOP INFORMATION")

var modal = UIkit.modal("#shop_uk_modal");

if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}
 

}

function zzim_member(uid) {
 
  var uid2=uid;
  console.log(memberuid+" "+uid2);
   $.post("http://gallerybear.com/add_zzim.php",
   {
    uid:memberuid,
    uid2:uid2
   },
   function(data){
      
     alert_msg("member","member picked member !");
    
   });
}
function msg_send(uid,msg) {
  var my_uid=memberuid;
  var by_uid=uid;
  var msg=msg;
    $.post("http://gallerybear.com/msg_save_app.php",
   {
    my_uid:my_uid,
    by_uid:by_uid,
    msg:msg
   },
   function(data){
      
     alert_msg("member","SEND MESSAGE");
    
   });
}
//  콘텐츠 등록 

function add_talent(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://gallerybear.com/self_camera_app.php",
   {
    memberuid:memberuid,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("UPLOAD SELF CAEMRA")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

function add_freeboard(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://gallerybear.com/freeboard_app.php",
   {
    memberuid:memberuid,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("WRITE FREEBOARD")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

function add_parade(cat) {
  var cat=cat;
  console.log("category="+cat)
    $.post("http://gallerybear.com/parade_app.php",
   {
    memberuid:memberuid,
    cat:cat
    
       },
   function(data){

$("#add_modal_contents").html(data);

   });
$("#add_modal_title").html("WRITE LET'S DRIVE")

var modal = UIkit.modal("#add_contents_uk_modal");


    modal.show();


}

// 프로필 대표 사진 설정
function file_check(no) {
  var no=no;
  console.log(no);
  $.post("http://gallerybear.com/file_check_app.php",
   {
    memberuid:memberuid,
    no:no
    
       },
   function(data){

    view_photo_upload();

   });
}

// 프로필 대표 사진 설정
function file_delete(no) {
  var no=no;
  console.log(no);
  $.post("http://gallerybear.com/file_delete_app.php",
   {
    memberuid:memberuid,
    no:no
    
       },
   function(data){

    view_photo_upload();

   });
}
 
 // 코멘트 삭제 
 function delete_comment(mode,no,no2) {
  var mode=mode;
  var no=no;
  var no2=no2;
  console.log(mode+" "+no+" "+no2);
  $.post("http://gallerybear.com/delete_comment_app.php",
   {
    mode:mode,
    no:no
    
       },
   function(data){
    console.log(data+" "+mode);
    var modal = UIkit.modal("#contents_uk_modal");
    if (mode=="freeboard") {
     contents_modal_show(mode,no2);

  } else if (mode=="parade") {
      contents_modal_show(mode,no2);
  }


   });

}

 // 게시물 삭제 

function delete_contents(mode,no) {
	var mode=mode;
	var no=no;
	console.log(mode+" "+no);
	$.post("http://gallerybear.com/delete_contents_app.php",
   {
    mode:mode,
    no:no
    
       },
   function(data){
   	var modal = UIkit.modal("#contents_uk_modal");
   	if (mode=="freeboard") {
   freeboard_show();
   modal.hide();
	} else if (mode=="parade") {
	parade_show();
   modal.hide();
	} else if (mode=="talent") {
  talent_show();
   modal.hide();
  }


   });

}

// 게시물 삭제 처리
function contents_delete() {
		var mode=$("#mode").val();
		var no=$("#no").val();
		delete_contents(mode,no);
	};

  function show_contents_modal() {
    $("#contents_modal_btn").show();
  }

    function hide_contents_modal() {
    $("#contents_modal_btn").hide();
  }


// 종류
function exit_show() {
navigator.notification.confirm("종료하시게습니까? ", onConfirm, "Confirmation", "Yes,No"); 
}

function onConfirm(button) {
    if(button==2){//If User selected No, then we just do nothing
        return;
    }else{
        navigator.app.exitApp();// Otherwise we quit the app.
    }
}


  function onBackKeyDown() {
    console.log("뒤로가기 "+menu);
    if (menu=="chat_open") {
      close_chat_room(); //대화방 나가기 
      
    }    }
// 지도 정보 

      function geo_onSuccess(position) {
        console.log(memberuid+'Latitude: '  + position.coords.latitude +'Longitude: ' + position.coords.longitude);
    }
 function geo_error(position) {
        alert_msg('code: '    + error.code    + '\n' +
              'No geo infomation');
    }
