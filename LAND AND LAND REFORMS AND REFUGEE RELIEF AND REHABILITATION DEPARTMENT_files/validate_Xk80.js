function validateLoginCaptcha() {
	var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
	var str2 = removeSpaces(document.getElementById('txtInput').value);
	if (str1 == str2) {
		return true;
	} else {
		alert("Please Enter Captcha Properly.");
		document.getElementById('txtInput').value = '';
		return false;
	}
}

function removeSpaces(string) {
	return string.split(' ').join('');
}

function validateRegistrationCaptcha() {
	var str1 = removeSpaces(document.getElementById('regCaptcha').value);
	var str2 = removeSpaces(document.getElementById('regInputCaptcha').value);
	if (str1 == str2) {
		return true;
	} else {
		alert("Please Enter Captcha Properly.");
		document.getElementById('txtInput').value = '';
		return false;
	}
}
