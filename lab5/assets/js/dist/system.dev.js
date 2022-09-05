"use strict";

function process() {
  var f_name = document.getElementById("First_name").value;
  var l_name = document.getElementById("Last_name").value;
  var hourly = document.getElementById("hourly").value;
  var mon = document.getElementById("mon").value;
  var tue = document.getElementById("tue").value;
  var wed = document.getElementById("wed").value;
  var thu = document.getElementById("thu").value;
  var fri = document.getElementById("fri").value;
  var sat = document.getElementById("sat").value;
  var sun = document.getElementById("sun").value;
  var day = [Number(mon), Number(tue), Number(wed), Number(thu), Number(fri), Number(sat), Number(sun)];

  if (mon <= 8 && mon > -1 && tue <= 8 && tue > -1 && wed <= 8 && wed > -1 && thu <= 8 && thu > -1 && fri <= 8 && fri > -1 && sat <= 8 && sat > -1 && sun <= 8 && sun > -1) {
    sum = day.reduce(function (a, b) {
      return a + b;
    }, 0);
    realSum = sum * Number(hourly);

    if (!realSum == 0) {
      var set_fullname = document.getElementById("Full_Name");
      set_fullname.value = f_name + " " + l_name;
      var set_weekly = document.getElementById("Weekly_Earn");
      set_weekly.value = realSum;
      sWalert('success', 'คำนวณ สำเร็จ <span style="font-size: 20px;">⚡🌈</span>');
    } else {
      sWalert('error', 'กรุณากรอกข้อมูล Weely Hours \nและ กรอก Hourly Salary \nให้ถูกต้อง <span style="font-size: 20px;"> 😵 </span>');
    }
  } else {
    Swal.fire('Warning!', 'You cannot work more than 8 hours. <span style="font-size: 20px;">❗</span>', 'warning');
  }
}

function resetForm() {
  var reset = $('#actionForm').trigger("reset");
  var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: function onOpen(toast) {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  if (reset) {
    sWalert('success', 'ล้างฟอร์ม สำเร็จ <span style="font-size: 20px;">🗑️</span>');
  } else {
    sWalert('error', 'ล้างฟอร์ม ไม่สำเร็จ');
  }
}

function sWalert(status, message) {
  var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: function onOpen(toast) {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  Toast.fire({
    icon: status,
    title: message
  });
}

function changeBG2() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1548041347-390744c58da6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')";
}

function changeBG1() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1546593064-053d21199be1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')";
}