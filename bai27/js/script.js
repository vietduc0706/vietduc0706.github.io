// var app = { 
//   addJob: function (e, type, input) {
//     var inputVal = $(input).val();


//     var event = window.event || e;
//     console.log (event);
//     if (event.keyCode === 13 && inputVal.trim() !== "") {
//       // Update DOM
//       console.log (inputVal);
//       this.jobVal = (type, inputVal);
//       // Reset input
//       $(input).val("");
//     }
//   },
  
//   jobVal: function (type, inputVal) {
//     var item = '<a href="#!" class="collection-item">' + inputVal + 
//     '<button class="btn-floating btn-small waves-effect waves-light red delete"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">edit</i></button> </a>';
//     $("#" + type).append(item);
//     console.log (item);
//     console.log (inputVal);  }
  
// }

addJob = function (e, type, input) {
  let inputVal = $(input).val();
  let item = '<a href="#!" class="collection-item">' + inputVal + 
             '<button class="btn-floating btn-small waves-effect waves-light red delete" onclick="deleteJob(this)"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">edit</i></button> </a>';
  let event = window.event || e;
  if (event.keyCode === 13 && inputVal.trim() !== "") {
    $('#'+type).append(item);
    $(input).val("");
  }};

deleteJob = function (button) {
  $("#modal-confirm").modal('open');
  let item = $(button).parent();
  $("#confirm-delete").on("click",function(){
    item.remove();
    $("#modal-confirm").modal('close');
  });
}

$(document).ready(function(){
  $('.modal').modal();
});

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