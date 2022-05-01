    function fun_encreate_notes_watch() {
        if ($(document).width() <= 820) {
            $('div#notes_watch').remove();
        } else {
            $(window).resize(function () { 
                if ($(document).width() >= 820 ) {
                $("#easeNote").click();
                $('div#notes_watch').css("display", "block");
                }
            });
        }
    }

$(document).ready(function () {
    $("#loading").hide();
});

console.log("LAUNCHER SUCCESFULLY!");

$("div#notes-alt ul ").on("mousedown", function (e) {
    var code = e.which;
    if (code == 3) { // 1 = 鼠标左键 left; 2 = 鼠标中键; 3 = 鼠标右键

        var x = e.originalEvent.x;
        var y = e.originalEvent.y;
        $("#note_manage_menu").css("left", x);
        $("#note_manage_menu").css("top", y);

        $("[mdui-menu]").click();
    }
});

$("div.tab  a.mdui-ripple").click(function (e) {
    e.preventDefault();
    $(this).parent().attr("selected-index", $(this).index() + 1);

    pageSrc = "assets/pages/notes.php";
    switch ($(this).parent().attr("selected-index")) {
        case "2":
            pageSrc = "assets/pages/notes.php";
            break;
        case "3":
            pageSrc = "assets/pages/tasks.php";
            break;
        default:
            pageSrc = null;
            break;
    }

    $("div.content").children().attr("src", pageSrc);

});

$("#collect").click(function (e) {
    e.preventDefault();
    
    if ($("#notes-alt").attr("bar-collected") == "false") {
        $("#notes-alt").attr("bar-collected", "true");
        $(this).css("transform", "rotate(180deg)");
        $(this).attr("mdui-tooltip", "{content: '收缩', delay: 250}");
    } else {
        $("#notes-alt").attr("bar-collected", "false");
        $(this).css("transform", "rotate(0deg)");
        $(this).attr("mdui-tooltip", "{content: '展开', delay: 250}");
    }

});

document.oncontextmenu = function (e) {
    return false;
}

$("#notes_list").css("padding-bottom", "0");

setInterval("fun_encreate_notes_watch()", 250);
$.getJSON("../resources/index.json",
function(data, textStatus, jqXHR) {
  for (var i = 0; i < data.note.length; i++) {
    $('#notes_list').append("<li class='mdui-list-item mdui-ripple note-list' id='" + data.note[i].id + "'>" + "<i class='mdui-list-item-icon mdui-icon fas fa-" + data.note[i].icon + "'></i> <div class='mdui-list-item-content'>" + data.note[i].name + "</div></li>");
    a = "#" + data.note[i].id;
    $(a).attr("onclick", "start_pages(" + "'" + data.note[i].src + "');init_pages();");
  }
}
);

function start_pages(src) {
    if ($(document).width() <= 820) {
        window.open(src, "_blank");
    } else {
        $("#notes_watch_host").attr("src", src);
        $('div#notes_watch').css("display", "block");
    }
}

function init_pages() {
setTimeout("$('#note_title').text($('#notes_watch_host').contents().attr('title'));", 250);
setTimeout("$('iframe#notes_watch_host').css('height', function () { $(this).parent().css('height'); })", 1000);
}

if ($("metadata[name='type']").attr("value") == "note") {
    
}