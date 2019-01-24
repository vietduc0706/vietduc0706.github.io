$(function () {
  $(".sorted-list").sortable({
    connectWith: ".sorted-list",
    placeholder: "ui-state-highlight",
    start: function (event, ui) {
      $(ui.item[0]).addClass("dragging");
    },
    stop: function (event, ui) {
      $(ui.item[0]).removeClass("dragging");
    }
  });
});

$(document).ready(function () {
  $('input#input_text, textarea#textarea2').characterCounter();
});

$(".sorted-list .delete").click(function () {
  $(this).parent().remove();
});
