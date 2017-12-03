/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
      

        console.log('Received Event: ' + id);
        app.onmain();
    },
    onmain : function() {
       
    }
};




$("#find_pw_btn").click(
    function() {

        var modal = UIkit.modal("#find_pw_uk_modal",{center: true});
           modal.show();


    })
$("#find_pw_submit").click(
    function() {
        var email=$("#email").val()
        alert_msg("MESSAGE",email+" send new password");
        var modal = UIkit.modal("#find_pw_uk_modal");
           modal.hide();
    })

$("#login_btn").click(
    function() {
    var user_id=$("#user_id").val();
    var password=$("#password").val();
    if (!user_id) {
        alert_msg("LOGIN","plz user id"); 
        
        exit;
    }
    if (!password) {
        alert_msg("LOGIN","plz PASSWORD"); 
      
        exit;
    }
    login_press(user_id,password);

    })

function login_press(user_id,password) {
    var user_id=user_id;
    var password=password;

     $.post("http://pridebbs.com/login_check.php",
   {
    user_id:user_id,
    password:password
    
       },
   function(data){
     console.log(data);
    if (data=="ok"){
   
    alert_msg("LOGIN","로그인 되었습니다.");
    // 회원 memberuid 가져오기
        window.localStorage.setItem("user_id", user_id);
        user_id = window.localStorage.getItem("user_id");
        console.log(user_id);
               $.post("http://pridebbs.com/login_check_uid.php",
               {
                user_id:user_id
                   },
               function(data){
                console.log(data);
                window.localStorage.setItem("memberuid", data);
                 location.replace('main.html') ;
               });
          


    } else {
 alert_msg("LOGIN",data);

    } 
   });
}

$("#join_btn").click(
    function() {

        var modal = UIkit.modal("#join_uk_modal",{center: true});
           modal.show();


 $.post("http://pridebbs.com/join_app_form.php",
   {
 
    
       },
   function(data){

  

$("#join_modal_contents").html(data);

   });

    })

$("#join_submit").click(
    function() {
        var nick=$("#nick").val();
        var email=$("#email").val();
        var kg=$("#kg").val();
        var age=$("#age").val();
        var country=$("#country").val();
        var job=$("#job").val();
        console.log(country);
        if (!nick) {
        alert_msg("join","nick name plz");
            return;
        }
         if (!email) {
        alert_msg("join","email plz");
            return;
        }

         if (!kg) {
        alert_msg("join","kg plz");
            return;
        }
        if (!age) {
        alert_msg("join","age plz");
            return;
        }
        if (!country) {
            alert_msg("join","country not selected");
            return;
        }
        if (!job) {
            alert_msg("join","job not selected");
            return;
        }

        
    var params = jQuery("#formname1").serialize(); // serialize() : 입력된 모든Element(을)를 문자열의 데이터에 serialize 한다.
    jQuery.ajax({
        url: 'http://m.pridebbs.com/member_save.php',
        type: 'POST',
        data:params,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8', 
        dataType: 'html',
        success: function (result) {
            if (result){
                alert_msg("join",result);

                    UIkit.modal("#join_uk_modal",{center: true}).hide();
            }
        }
    });


        
        

        
    });