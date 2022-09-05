$(document).ready(function () {

    $("#form").submit(function (event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        // alert(form_data)
        $.ajax({
            type: 'POST',
            url: 'system/php/add.php',
            data: form_data,
            dataType: 'json',
            success: function (data) {
                if (data.status) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: data.message
                      }).then(function () {
                        window.location.href = 'index.php';
                    })
                } else {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'warning',
                        title: data.message
                      }).then(function () {
                        window.location.href = 'index.php';
                    });
                }
            }
        
        });
    });
});

