$T = {}
$T.toast = function(txt,t){
	if(t == undefined){
		t = 3
	}
	if(txt == undefined){
		return
	}
	document.querySelector(".rz_toast_txt").innerHTML = txt;
	document.querySelector(".rz_toast_ctn").style.display = "block";
	setTimeout(function(){
		document.querySelector(".rz_toast_ctn").style.display = "";
	},t*1000)
}
$T.sexOptions = [
      				{id: 0, name: '保密'},
      				{id: 1, name: '男'},
      				{id: 2, name: '女'}
    			];
$T.eduOptions = [
					{id: 0, name: '大专以下'},
					{id: 1, name: '大专'},
					{id: 2, name: '本科'},
					{id: 3, name: '硕士'},
					{id: 4, name: '硕士以上'}
				];