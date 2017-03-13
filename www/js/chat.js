function open_chat_room (no) {
   menu="chat_open";
$("#chat_room_modal").addClass('active');
  var no=no;
   console.log(memberuid);
 $.post("http://pridebbs.com/chat_list_app.php",
   {
    no:no,
    memberuid:memberuid
    
       },
   function(data){
$("#chat_body").html(data);
console.log(data);
chat_page_top();
   });
  $("#room_no").val(no);

	

}
function chat_page_top() {
	$(document).ready(function(){
	htop=$('#chat_body').height();
	console.log("h"+htop);
	$('.content').scrollTop(htop); 
	});
}
function open_chat (no) {




   var no=no;
   console.log(memberuid);
 $.post("http://pridebbs.com/chat_list_app.php",
   {
    no:no,
    memberuid:memberuid
    
       },
   function(data){
$("#chat_body").html(data);
   });
 	$("#room_no").val(no);

    var modal = UIkit.modal("#modal_chat", {center: true,minScrollHeight:150});


    modal.show();

}
function save_chat() {
  console.log(memberuid);
	var room_no=$("#room_no").val();
	var chat_msg=$("#chat_msg").val();
	if (!chat_msg){
		alert_msg("msg","no comment !!");
		exit;
	}

		$.post("http://pridebbs.com/chat_save_app.php",
   {
   	room_no:room_no,
   	memberuid:memberuid,
   	chat_msg:chat_msg
    
       },
   function(data){
	//open_chat(room_no);
	$("#chat_msg").val('');

   });
}
function gotop() {
  console.log("top");
   
}

function make_chat_open_job() {
   var modal = UIkit.modal("#make_room_job_modal", {center: true});


    modal.show();

      $.post("http://pridebbs.com/job_subject_list_app.php",
   {
    
       },
   function(data){
    var data=data;
      $("#make_room_job_modal_body").html(data);
   });

}


function make_room_job() {
    
  var subject=$("#list_subject").val();

   $.post("http://pridebbs.com/make_room.php",
   {
    uid:memberuid,
    subject:subject,
    room_kind:2
    
       },
   function(data){

    chat_job_show2();
     var modal = UIkit.modal("#make_room_job_modal", {center: true});


    modal.hide();

   });
  
    
  }

  function make_chat_open() {
   var modal = UIkit.modal("#make_room_modal", {center: true});


    modal.show();

     

}
function make_chat_close() {
   var modal = UIkit.modal("#make_room_modal", {center: true});


    modal.hide();

     

}


function make_room() {
    
  var subject=$("#chat_subject").val();
  if (!subject) {
    alert_msg("MESSAGE","NOT INPUT CHAT ROOM SUBJECT");
    exit;
  }
   $.post("http://pridebbs.com/make_room.php",
   {
    memberuid:memberuid,
    subject:subject,
    room_kind:1
    
       },
   function(data){

    $.post("http://pridebbs.com/chat_app.php",
   {
    
    memberuid:memberuid
    
       },
   function(data){

$("#company_list").html(data);
make_chat_close();

   });

   });
  
    
  }

  function delete_room(no) {
    var uid=no;
     $.post("http://pridebbs.com/delete_room_app.php",
   {
    uid:uid
    
       },
   function(data){

    chat_show2();
   
  var modal = UIkit.modal("#modal_chat", {center: true});


    modal.hide();
   });
   
  }

    function delete_room_job(no) {
    var uid=no;
     $.post("http://pridebbs.com/delete_room_app.php",
   {
    uid:uid
    
       },
   function(data){

    chat_job_show2();
   
  var modal = UIkit.modal("#modal_chat", {center: true});


    modal.hide();
   });
   
  }

// 대화삭제 
 // 코멘트 삭제 
 function delete_chat_list(no,room_no) {
  var no=no;
  var room_no=room_no;
  console.log(no+" "+room_no);
  $.post("http://pridebbs.com/delete_chat_list_app.php",
   {
    
    no:no
    
       },
   function(data){
      open_chat(room_no);


   });

}

// 대화갱신

 function check_new_chat() {
  var last_no=$("#last_no").val();
  var room_no=$("#room_no").val();
  var check_chat=$("#check_chat").val();

  $("#check_chat").val("t");
  console.log(last_no+" "+room_no+" "+check_chat); 
  if (check_chat=="t") {
    exit;
  
  }
  
   $.post("http://pridebbs.com/check_new_chat_no_app.php",
   {
    
    last_no:last_no,
    room_no:room_no
    
       },
   function(data){
   	console.log("저장 "+data);
     var data=data;

     if (data) {
      $("#last_no").val(data);
      $("#check_chat").val("t");
    
      re_open_chat_room();
     } else {
       $("#check_chat").val("f");
     }


   });

}

// 대화 내용 경신
function reload_chat(room_no,last_no) {
  var room_no=room_no;
  var last_no=last_no;
  console.log('last_no'+last_no);
   $.post("http://pridebbs.com/check_new_chat_app.php",
   {
    
    last_no:last_no,
    room_no:room_no,
    memberuid:memberuid
    
       },
   function(data){
     if (data) {
      
        $("#chat_body").append(data); 

     }
 $("#check_chat").val("f"); 
 htop=$('#chat_body').height();
$('.content').scrollTop(htop);

   });
}


function re_open_chat_room () {
  var no=$("#room_no").val();

   console.log(memberuid+" room_no  "+no);
 $.post("http://pridebbs.com/chat_list_app.php",
   {
    no:no,
    memberuid:memberuid
    
       },
   function(data){
    console.log(data);
$("#chat_body").html(data);

chat_page_top();
   });
  $("#room_no").val(no);

  
$("#check_chat").val("f");
}

// 대화갱신
function sc_size_scheck() {

var top=$("#chat_body").offset().top;
var height=$("#chat_body").height();
var height2=$("#chat_room_modal").height();
var last_no=$("#last_no").val();
var postop=(top*-1)+height2-90;
var var1=height-postop;
console.log(last_no);
console.log("top"+postop+"height"+height+"cheight"+height2+"var1"+var1);
if (height<height2) {
check_new_chat();
} else if (var1<190) {
  check_new_chat();
} else if (last_no==0) {
  check_new_chat();
}



}



function close_chat_room() {
  navigator.notification.confirm("대화방을 나가시겠습니까 ?", exit_chat_room, "대화방", "예,아니요"); 
    
}

function exit_chat_room(button) {
    if(button==2){//If User selected No, then we just do nothing
        return;
    }else{
        $("#chat_room_modal").removeClass('active');
        menu="chat";
        clearInterval(chat_check_id);
    }
}