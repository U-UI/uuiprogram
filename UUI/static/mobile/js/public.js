// 回到顶部
$(function(){
     //获取鼠标的滚动距离
  window.onscroll=function(){

        let backTop=$("#backTop")[0];
        let box=$(".box")[0];
        var _top=document.body.scrollTop||document.documentElement.scrollTop;
        var content=$("#content").offset().top;
        var _content=$("#content").scrollTop()
        // alert(content)
        //当鼠标滚动到手机一频时显示backTop
        //3临界显示与隐藏
        if (_content>=3){
            backTop.style.display="block";
            box.style.display="block";
        }else{
            backTop.style.display="none";
            box.style.display="none";
        }

        //添加事件
        $("#backTop")[0].onclick=function(){
            $("#content").scrollTop(0);
            backTop.style.display="none";
        }  
    }
})
 