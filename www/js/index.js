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
var count = 0;
var q = ["Is it something you absolutely need?","Do you need it immediately?","Will you use it regularly?","Get it!!!"];
var total = q.length - 1;

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
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
		
    }
};

function hitReset(){
	count = 0;
	document.getElementById('btnOk').style.display = "none"; 
	document.getElementById('btnReset').style.display = "none"; 

	document.getElementById('question').innerHTML = q[count];
	document.getElementById('btnYes').style.display = "block";
	document.getElementById('btnNo').style.display = "block";
}

function hitYes(){
	
	document.getElementById('btnOk').style.display = "none"; 
	document.getElementById('btnReset').style.display = "none"; 
	document.getElementById('btnYes').style.display = "block";
	document.getElementById('btnNo').style.display = "block";
	
	document.getElementById('question').innerHTML = q[count];
	
	if(count == total){
		document.getElementById('btnYes').style.display = "none";
		document.getElementById('btnNo').style.display = "none";
		document.getElementById('btnReset').style.display = "block"; 
	}
	
	if(count > total){
		return true;
	}
	
	count = parseInt(count) + 1;
}

function hitNo(){

	document.getElementById('btnOk').style.display = "none"; 
	document.getElementById('btnReset').style.display = "block"; 

	document.getElementById('question').innerHTML = "Don't get it!!!";
	document.getElementById('btnYes').style.display = "none";
	document.getElementById('btnNo').style.display = "none";

	return true;
}