//These are your super secret characters you will use to make the password super secure
var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
var superSecretHash = {};
for (var j = 0; j < superSecretChars.length; j++){
	debugger;
	var oneChar = superSecretChars[j][0];
	superSecretHash[oneChar] = superSecretChars[j][1];
	superSecretHash[oneChar.toUpperCase()] = superSecretChars[j][1];
}
function createSSP(password){
	var newPass = "";
	for (var i = 0; i < password.length; i++){
		newPass += ((superSecretHash.hasOwnProperty(password[i])) ? superSecretHash[password[i]]: password[i]);
	}
	return newPass;
}

//Notes:
/**
 * String.replace
 * How the following regex works:
 *
 * /[text-here]/ starts the expression
 * g, global flag, multiple matches
 * i, case-insensitive search
 * 
 */