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

let COLUMN_TYPE = ["todo", "doing", "done"];

let getData = function () {
  if (typeof (Storage) !== "undefined") {
    let data;
    data = JSON.parse(localStorage.getItem("list")) || {};
    return data;
  } else {
    alert("Sorry! No Web Storage support")
  }
}

let setData = function (data) {
  localStorage.setItem("list", JSON.stringify(data));
}

let list = getData();

let addJob = function (e, type, input) {
  let inputVal = $(input).val();
  let item = '<a href="#!" class="collection-item">' + inputVal +
    '<button class="btn-floating btn-small waves-effect waves-light red delete" onclick="deleteJob(this)"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">edit</i></button> </a>';
  let event = window.event || e;
  if (event.keyCode === 13 && inputVal.trim() !== "") {
    if (!list[type]) {
      list[type] = [];
    }
    list[type].push(inputVal);
    setData(list);
    $('#' + type).append(item);
    $(input).val("");
  }
};

let loadJob = function (type, job) {
  let item = '<a href="#!" class="collection-item">' + job +
    '<button class="btn-floating btn-small waves-effect waves-light red delete" onclick="deleteJob(this)"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">edit</i></button> </a>';
  $('#' + type).append(item);
};

let deleteJob = function (button) {
  $("#modal-confirm").modal('open');
  let item = $(button).parent();
  $("#confirm-delete").on("click", function () {
    item.remove();
    $("#modal-confirm").modal('close');
  });
}

$(document).ready(function () {
  $('.modal').modal();
});

$(function () {
  COLUMN_TYPE.forEach(function (type) {
    let columnType = list[type] || [];
    columnType.forEach(function (job) {
      loadJob(type, job)
    })
  });

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