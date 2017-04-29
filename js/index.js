alert("歡迎蒞臨，屁孩世界");
function hi(){
    var name = $("#name").val();
    var age  = $("#age").val();
    var orange = ""
    var apple = ""
    var banana = ""
    var bala = ""
    var like = ""
    if($("#stu").prop("checked")){
        var stu = "好學生"
    } else{
    	var stu = "壞學生"
    }

    if ($("#orange").prop("checked")) {
        orange = "橘子"
        like="你喜歡的水果有"
    }
    if ($("#apple").prop("checked")) {
    	apple = "蘋果"
    	like="你喜歡的水果有"
    }
    if ($("#banana").prop("checked")) {
        banana = "香蕉"
        like="你喜歡的水果有"
    }
    if ($("#bala").prop("checked")) {
    	bala = "芭樂"
    	like="你喜歡的水果有"
    }

    alert("你好,你叫"+name+",你"+age+"歲。而且你是一位"+stu+"。"+like+" "+orange+" "+apple+" "+banana+" "+bala+"。")
 
    $("#name").val(""); 
    $("#age").val("");
    $("#stu").prop("checked",false);
    $("#orange").prop("checked",false);
    $("#apple").prop("checked",false);
    $("#banana").prop("checked",false);
    $("#bala").prop("checked",false);

};

$("#hi").on("click",hi)
