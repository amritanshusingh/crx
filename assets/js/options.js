$(document).ready(function(){
	restore_options();
	$('#save').click(function(){
		save_options();
	});
	$('#clear').click(function(){
		clear_options();
	});

});

function save_options() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('pass').value;
	chrome.storage.sync.set({
			loginUsername : username,
			loginPassword : password
	},function(){
		var status = document.getElementById('status');
		status.textContent = 'Options Saved.';
		setTimeout(function() {
			status.textContent = '';
		},750);	
	});	


}

function restore_options() {
	chrome.storage.sync.get({
		loginUsername : "",
		loginPassword : ""
	},function(items){
		document.getElementById('username').value = items.loginUsername;
		document.getElementById('pass').value = items.loginPassword;
	});

}

function clear_options() {
	chrome.storage.sync.set({
		loginUsername : "",
		loginPassword : "",
		travelDate : "",
		trainNumber : "",
		travelClass : "",
		sourceStation : "",
		destinationStation : "",
		quota : "",
		passengerName : "",
		passengerAge : "",
		passengerGender: "",
		passengerBirthPreference : ""
	},restore_options);

}
