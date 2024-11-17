function getmai() {
    var burger = $("#maiburger")
        .val()
        .replace(/ +/g, " ")
        .replace(/^ | $/g, "")
        .replace(/[\n\r]/,"")
        .split(" ");
    var snack = $("#maisnack")
        .val()
        .replace(/ +/g, " ")
        .replace(/^ | $/g, "")
        .replace(/[\n\r]/,"")
        .split(" ");
    var r = Math.ceil(Math.random() * burger.length);
    var r2 = Math.ceil(Math.random() * snack.length);
    return burger[r-1] + '配' + snack[r2-1];
}
$(function () {
    var run = 0,
        heading = $("h1"),
        timer;

    $("#start").click(function () {
        $("#ganfan").hide();
        $("#ruizhi").hide();
        $("#daizi").hide();
        $("#qidai").show();
        var list = $("#list")
            .val()
            .replace(/ +/g, " ")
            .replace(/^ | $/g, "")
            .replace(/[\n\r]/,"")
            .split(" ");
        var r,food;
        if (!run) {
            heading.html(heading.html().replace("吃这个！", "吃什么？"));
            $(this).val("停止");
            timer = setInterval(function () {
                r = Math.ceil(Math.random() * list.length);
                food = list[r - 1];
                if (food.trim().length!==0){
                    $("#what").html(food);
                }
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>")
                    .html(food)
                    .hide()
                    .css({
                        top: rTop,
                        left: rLeft,
                        color: "rgba(0,0,0,." + Math.random() + ")",
                        fontSize: rSize + "px",
                    })
                    .appendTo("body")
                    .fadeIn("slow", function () {
                        $(this).fadeOut("slow", function () {
                            $(this).remove();
                        });
                    });
            }, 50);
            run = 1;
        } else {
            heading.html(heading.html().replace("吃什么？", "吃这个！"));
            $("#ruizhi").hide();
            $("#daizi").hide();
            $("#qidai").hide();
            $("#ganfan").show();
            r = Math.ceil(Math.random() * list.length);
            food = list[r - 1];
            $("#what").html(food);
            if (food.search("麦门")!==-1){
                $("#what").html("麦门之"+getmai());
            }
            $(this).val("不行，换一个");
            clearInterval(timer);
            run = 0;
        }
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});
