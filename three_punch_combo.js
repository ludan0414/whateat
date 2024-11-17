$i = 0;
$warn = false
$("#start").click(function () {
    $i++;
    if ($i >= 6 && !$warn) {
        alert("这么纠结？再纠结就别吃了！");
        send("纠结");
        $warn = true;
    }
    if ($i >= 12){
        $("#start").hide();
        $("#stop").show();
    }
});
$("#stop").click(function () {
    alert("别吃了，啃袋子去吧！");
    $("#ganfan").hide();
    $("#ruizhi").hide();
    $("#qidai").hide();
    $("#daizi").show();
    $("#what").html("老八啃的布制购物袋");
    send("啃袋子");
    $(this).hide();
});