function save_freeboard_comment(no) {
	var no=no;
	var freeboard_comment=$("#freeboard_comment").val();
	  $.post("http://gallerybear.com/freeboard_comment_save.php",
   {
    no:no,
    memberuid:memberuid,
    freeboard_comment:freeboard_comment
    
       },
   function(data){
          if (data=="ok") {
            
            contents_modal_show("freeboard",no);

          }
   });

	
}

function save_parade_comment(no) {
	var no=no;
	var parade_comment=$("#parade_comment").val();
  console.log("uid:"+memberuid);
	  $.post("http://gallerybear.com/parade_comment_save.php",
   {
    no:no,
    memberuid:memberuid,
    parade_comment:parade_comment
    
       },
   function(data){
          if (data=="ok") {
            
            contents_modal_show("parade",no);

          }
   });

	
}
