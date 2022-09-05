<?php 
require_once('connect.php');
if(!$_SESSION['UserID']){
  header('Location: login.php');
}else{



?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Index | Lab9</title>
  <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="../node_modules/MDB-Pro/css/mdb.min.css">
  <link rel="stylesheet" href="../node_modules/FontAwesomePro/css/all.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

  <style>
    @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');

    body {
      font-family: 'Mitr', sans-serif;
      background: url("https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80") no-repeat center center fixed;
      background-size: cover;
    }

    .card {
      opacity: 94.99%;
    }

    table.dataTable thead .sorting:after,
    table.dataTable thead .sorting:before,
    table.dataTable thead .sorting_asc:after,
    table.dataTable thead .sorting_asc:before,
    table.dataTable thead .sorting_asc_disabled:after,
    table.dataTable thead .sorting_asc_disabled:before,
    table.dataTable thead .sorting_desc:after,
    table.dataTable thead .sorting_desc:before,
    table.dataTable thead .sorting_desc_disabled:after,
    table.dataTable thead .sorting_desc_disabled:before {
      bottom: .5em;
    }

    .dataTables_filter,
    .pagination {
      float: right;
    }

    @media only screen and (max-width: 770px) {


      .dataTables_filter,
      .pagination {
        float: left;
      }
    }
  </style>

</head>

<body>
  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color lighten-1" style="opacity: 80%;">
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item">
        <p class="nav-link waves-effect waves-light">Welcome <?php echo $_SESSION['UserID'];?>, Role (
          <span id="role"><?php echo $_SESSION['role'];?></span> ) | </p>
      </li>
      <li class="nav-item">
        <a type="button" class="btn btn-danger btn-sm btn-rounded waves-effect" href="logout.php">Logout</a>
      </li>
    </ul>
  </nav>
  <!--/.Navbar -->

  <div class="container mt-3 mb-5">

    <?php if($_SESSION['role'] == 'admin'){
    require_once('add.php');
    }?>
    <div class="card">
      <div class="card-header text-center">
        List of Student
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table id="dataTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th class="th-sm">ID
                </th>
                <th class="th-sm">Fistname
                </th>
                <th class="th-sm">Lastname
                </th>
                <th class="th-sm">Major
                </th>
                <th class="th-sm">DOB
                </th>
                <th class="th-sm">Email
                </th>
                <th class="th-sm">Phone
                </th>
                <!-- <th class="th-sm">Edit
                </th> -->
              </tr>
            </thead>
            <tbody>
              <?php 
              $sql = "SELECT * FROM `students`";
              $reslut = mysqli_query($conn, $sql);
              while($row = mysqli_fetch_array($reslut)){
              ?>
              <tr>
                <td class="text-center"><?php echo $row['std_id'];?></td>
                <td><?php echo $row['firstname'];?></td>
                <td><?php echo $row['lastname'];?></td>
                <td><?php echo $row['major'];?></td>
                <td><?php echo $row['DOB'];?></td>
                <td><?php echo $row['email'];?></td>
                <td><?php echo $row['phone'];?></td>

              </tr>
              <?php
                }
              ?>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>



  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
    crossorigin="anonymous"></script>
  <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
  <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="../node_modules/MDB-Pro/js/mdb.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
  <script src="../node_modules/mdbootstrap/js/addons/datatables.min.js"></script>
  <script src="system/js/add.js"></script>


  <!-- <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script> -->
  <script src="../node_modules/jquery-tabledit-1.2.3/jquery.tabledit.min.js"></script>
  <!-- <link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css" /> -->
  <script src="../node_modules/MDB-Pro/src/js/vendor/pro/picker-date-time.js"></script>
  
  <script>
    $(document).ready(function () {
      $('#dataTable').DataTable();
      $('.dataTables_length').addClass('bs-select');

      $('.datepicker').pickadate({
        format: 'yyyy-mm-dd',
        formatSubmit: 'yyyy/mm/dd'
      })
      $('.mdb-select').materialSelect();

      var role = $('#role').text();

      if (role == 'admin') {

        // $('#dataTable').on('draw',function () {
            $('#dataTable').Tabledit({
              url: 'system/php/action.php',
              dataType: 'json',
              columns: {
                identifier: [0, 'std_id'],
                editable: [
                  [1, 'firstname'],
                  [2, 'lastname'],
                  [3, 'major', '{"1":"CS","2":"Math","3":"Stat"}'],
                  [4, 'DOB'],
                  [5, 'email'],
                  [6, 'phone']
                ]
              },
              restoreButton: false,
              buttons: {
                edit: {
                  class: 'btn btn-warning btn-sm',
                  html: '<i class="fad fa-edit edit" style="font-size: 15px;"></i>',
                  action: 'edit'
                },
                delete: {
                  class: 'btn btn-danger btn-sm',
                  html: '<i class="fad fa-trash" style="font-size: 15px;"></i>',
                  action: 'delete'
                },
                save: {
                  html: '<i class="fad fa-save" style="font-size: 15px;"></i>',
                  action: 'edit'
                },
                confirm: {
                  html: '<i class="fad fa-check-circle" style="font-size: 20px;"></i>'
                }
              },
              onSuccess: function (data, textStatus, jqXHR) {
                if (data.status) {
                  location.reload();
                } else {
                  location.reload();
                }
              }
            });
          // });

        }
      })
  </script>

</body>

</html>
<?php 
}
?>