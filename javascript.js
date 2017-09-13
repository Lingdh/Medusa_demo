//加载函数
function addLoadEvent(func){
	var a=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
		}else{
			window.onload=function(){
				a();
				func();
				}
			}
}

//导航栏
function nav(){
	var node_ul = document.getElementsByClassName("node_ul");//返回一个数组
	var li_lists = node_ul[0].childNodes;
	for(var i=0,len=li_lists.length;i<len;i++){
		if(li_lists[i].nodeType==1){
			//添加鼠标经过和离开效果
			li_lists[i].onmousemove=function(){
				this.style.backgroundColor="#CD3700";
			}
			li_lists[i].onmouseout=function(){
				if(this.className!="on"){
					this.style.backgroundColor="#C5C1AA"
				}else{
					this.style.backgroundColor="#CD6839"
				}
			}
			//添加标签点击事件
			li_lists[i].setAttribute("onclick","show(this)");
		}
	}

}

//标签点击事件
function show(obj){
	//设置li的class为“”
	var node_ul =document.getElementsByClassName("node_ul")
	var li_lists = node_ul[0].childNodes;
	for(var j =0;j<li_lists.length;j++){
		if(li_lists[j].nodeType==1){
			li_lists[j].setAttribute("class","");
			li_lists[j].style.backgroundColor="#C5C1AA";
		}
	}
	
	//设置name 为 “div” 的class 为“hide”
	var div_lists =document.getElementsByName("div");
	for(var i =0;i<div_lists.length;i++){
		div_lists[i].setAttribute("class","hide");
	}
	
	//将点击的标签的class 设置为“on”,并显示相应的div
	var x=obj.innerHTML;
	switch(x){
		case  "主页":
			div_lists[0].setAttribute("class","show");
			obj.setAttribute("class","on");
		break;
		case "技能":
			div_lists[1].setAttribute("class","show");
			obj.setAttribute("class","on");
		break;
		case "技巧":
			div_lists[2].setAttribute("class","show");
			obj.setAttribute("class","on");
		break;
		case "排行榜":
			div_lists[3].setAttribute("class","show");
			obj.setAttribute("class","on");
		break;
		case "联系作者":
			div_lists[4].setAttribute("class","show");
			obj.setAttribute("class","on");
		break;
	}
}

//提交按钮点击事件
function lxzz_submit(){
	var sub_name =document.getElementById("sub_name");
	var sub_mail = document.getElementById("sub_mail");
	var sub_adv = document.getElementById("sub_adv");
	var sub_list =[sub_name,sub_mail,sub_adv];
	if(sub_name.value==""){
		alert("名字不能为空！");
	}else{
		if(sub_mail.value==""){
			alert("邮箱不能为空！");
		}else{
			if(sub_adv.value==""){
				alert("留言不能为空！");
			}else{
				alert("感谢您的反馈！");
			}
		}
	}

}

//home 页面的图片倒数切换 ?????
/* function counter(){
	var home_img = (document.getElementsByName("home_img"))[0];
	var img_lists = home_img.childNodes;
	var len = img_lists.length;
	alert(img_lists[1].nodeType);
	var timer = window.setInterval(function(){
		for(var i = 0;i<len;i++){
			if(img_lists[i].nodeName==)
		}
	},1000);

} */

//鼠标经过排行榜表格事件
function mouseover_table(){
	// var table_phb = document.getElementById("table_phb");
	var tr_phb_lists =document.getElementsByName("tr_phb");
	for(var i=0;i<tr_phb_lists.length;i++){
		tr_phb_lists[i].onmousemove=function(){
			this.style.backgroundColor="#CDC673";
		}
		tr_phb_lists[i].onmouseout=function(){
			var x =this.getAttribute("class");
			if(x=="odd"){
				this.style.backgroundColor="#FFD39B";
			}else{
				this.style.backgroundColor="#CDB38B";
			}
		}
	}
}

//技能图标点击显示技能介绍
function jn_img_click(obj){
	var img_index = obj.getAttribute("index");
	var jnjs_lists = document.getElementsByName("jn_img_p"); 
	for(var i=0;i<jnjs_lists.length;i++){
		jnjs_lists[i].setAttribute("class","hide");
	}
	jnjs_lists[img_index].setAttribute("class","");
}

addLoadEvent(nav);
addLoadEvent(mouseover_table);