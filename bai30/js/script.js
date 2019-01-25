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

let refreshBadge = function () {
  $(".badge")[0].innerText = list["todo"].length;
  $(".badge")[1].innerText = list["doing"].length;
  $(".badge")[2].innerText = list["done"].length;
}

let setData = function (data) {
  localStorage.setItem("list", JSON.stringify(data));
}

let list = getData();

let addJob = function (e, type, input) {
  let inputVal = $(input).val();
  let item = '<a href="#!" class="collection-item">' + inputVal +
    '<button class="btn-floating btn-small waves-effect waves-light red delete" onclick="deleteJob(this)"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red edit" onclick="editJob(this)"><i class="material-icons">edit</i></button> </a>';
  let event = window.event || e;
  if (event.keyCode === 13 && inputVal.trim() !== "") {
    if (!list[type]) {
      list[type] = [];
    }
    list[type].push(inputVal);
    setData(list);
    $('#' + type).append(item);
    $(input).val("");
    refreshBadge();
  }
};

let pushJob = function (type, pushType) {
  let inputVal = $("." + pushType).val();
  console.log("inputVal khi pushJob là " + inputVal);
  let item = '<a href="#!" class="collection-item">' + inputVal +
    '<button class="btn-floating btn-small waves-effect waves-light red delete" onclick="deleteJob(this)"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red edit" onclick="editJob(this)"><i class="material-icons">edit</i></button> </a>';
  console.log("item khi pushJob là " + item);
  if (inputVal.trim() !== "") {
    list[type].push(inputVal);
    setData(list);
    $('#' + type).append(item);
    $("." + pushType).val("");
    refreshBadge();
  }
}

let loadJob = function (type, job) {
  let item = '<a href="#!" class="collection-item">' + job +
    '<button class="btn-floating btn-small waves-effect waves-light red delete" onclick="deleteJob(this)"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red edit" onclick="editJob(this)"><i class="material-icons">edit</i></button> </a>';
  $('#' + type).append(item);
};

let deleteJob = function (button) {
  $("#modal-confirm").modal('open');
  let item = $(button).parent();
  $("#confirm-delete").off("click");
  $("#confirm-delete").on("click", function () {
    let columnType = item.parent().attr("id");
    let itemPosition = item.index();
    list[columnType].splice(itemPosition, 1);
    setData(list);
    item.remove();
    refreshBadge();
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
    });
  });
});

$(function () {
  $(".sorted-list").sortable({
    connectWith: ".sorted-list",
    placeholder: "ui-state-highlight",
    start: function (event, ui) {
      $(ui.item[0]).addClass("dragging");
      ui.item.oldColumnType = ui.item.context.parentElement.getAttribute("id");
      ui.item.oldItemPosition = ui.item.index();

    },
    stop: function (event, ui) {
      $(ui.item[0]).removeClass("dragging");
      let oldColumnType = ui.item.oldColumnType;
      let oldItemPosition = ui.item.oldItemPosition;
      let newColumnType = ui.item.context.parentElement.getAttribute("id");
      let newItemPosition = ui.item.index();
    
    list[oldColumnType].splice(oldItemPosition, 1);
    list[newColumnType].splice(newItemPosition, 0, ui.item[0].innerText);
    
    setData(list);
    refreshBadge();
    }
  });

});

$(document).ready(function () {
  $('input#input_text, textarea#textarea2').characterCounter();
});

$(document).ready(function () {
  refreshBadge();
});

var editPosition;
var editColumn;
var beforeEdit;

let editJob = function (button) {
  editPosition = $($(button.parentElement), "#" + button.parentElement.parentElement.getAttribute("id")).index();
  editColumn = button.parentElement.parentElement.getAttribute("id");
  beforeEdit = button.parentElement.innerText.replace("delete", "").replace("edit", "").trim();
  console.log ("beforeEdit khi click edit là " + beforeEdit);
  button.parentElement.innerHTML = `<label for="input_text" style="margin-left: 5px; color: #26a69a;">Edit task</label>
  <input id="input_text" class="input_edit" type="text" data-length="32" onkeydown="replaceJob(this)" value="${beforeEdit}">`
  $(".input_edit").val(beforeEdit);
}

let replaceJob = function (input) {
  let afterEdit = $(input).val();
  let item = `${afterEdit} <button class="btn-floating btn-small waves-effect waves-light red delete" onclick="deleteJob(this)"><i class="material-icons">delete</i></button> <button class="btn-floating btn-small waves-effect waves-light red edit" onclick="editJob(this)"><i class="material-icons">edit</i></button>`;
  let event = window.event || e;
  if (event.keyCode === 13 && afterEdit.trim() !== "") {
    $("#" + editColumn).children()[editPosition].innerHTML = item;
    list[editColumn][editPosition] = afterEdit;
    setData(list);
    $("#success").show();
    $("#div_ctrl").hide();
    $("#button").hide();
  }
};

