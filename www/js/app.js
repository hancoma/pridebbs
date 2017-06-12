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
        document.addEventListener("backbutton", onBackKeyDown, false);
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
        console.log('Received Event: ' + id);
       
        app.onmain();
    },
    onmain : function() {

    main_show();
    buy_item();
     navigator.geolocation.getCurrentPosition(geo_onSuccess,geo_error);
    
}
};


function buy_item() {
inAppPurchase
  .getProducts(['com.com.gaymeninloveapp.anyphoto1_1','com.com.gaymeninloveapp.anyphoto1_2'])
  .then(function (products) {
    alert_msg("msg",products);
    /*
       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
    */
  })
  .catch(function (err) {
    alert_msg("error msg",err);
  });

 inAppPurchase
  .restorePurchases()
  .then(function (data) {
    alert_msg('MSG',data);
    /*
      [{
        transactionId: ...
        productId: ...
        state: ...
        date: ...
      }]
    */
  })
  .catch(function (err) {
    alert_msg('ERROR',err);
  });
  
 inAppPurchase
  .buy('com.com.gaymeninloveapp.anyphoto1_1')
  .then(function (data) {
    alert_msg('MSG',data);
  })
  .catch(function (err) {
    alert_msg('ERROR',err);
  });

}