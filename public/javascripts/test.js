// window.onload =function(){
// 	var btn = document.getElementById('btn');
// 	var username = document.getElementById('username');
// 	var password = document.getElementById('password');
// 	btn.onclick = function(){
// 		alert(username.value+'  '+password.value);
// 	}
// }
$(function(){
	$("#btn").on('click',function(){
		// console.log($("#username"));
		var username = $('#username')[0].value;
		var password = $('#password')[0].value;
		alert(username+'  '+password);
		$.post('/login',{username:username,password:password},function(){
			
		},"json");

	});
});