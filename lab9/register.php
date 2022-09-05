<?php 
require_once('connect.php');
error_reporting(0);
if($_SESSION['UserID']){
    header('Location: index.php');
  }else{
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register | Lab9</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../node_modules/MDB-Pro/css/mdb.min.css">
    <link rel="stylesheet" href="../node_modules/FontAwesomePro/css/all.css">

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
    </style>

</head>

<body>

    <div class="container mt-5">
        <div class="card">
            <h5 class="card-header info-color white-text text-center py-4">
                <strong>Register</strong>
            </h5>
            <div class="card-body px-lg-5 pt-0">

                <form method="POST" action="system/php/system_register.php" id="form">
                    <div class="md-form">
                        <input type="text" id="username" name="username" class="form-control">
                        <label for="username">Username</label>
                    </div>
                    <div class="md-form">
                        <input type="password" id="password" name="password" class="form-control">
                        <label for="password">Password</label>
                    </div>

                    <div class="md-form">
                        <select class="mdb-select md-form colorful-select dropdown-primary" name="role">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <label class="mdb-main-label">Role</label>
                    </div>
                    <button class="text-center btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                        type="submit">Register</button>
                    <p class="text-center">Are you have a Username?
                        <a href="login.php">Login</a>
                    </p>
                </form>

            </div>

        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../node_modules/MDB-Pro/js/mdb.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="system/js/register.js"></script>
    <script>
        // Material Select Initialization
        $(document).ready(function () {
            $('.mdb-select').materialSelect();
        });
    </script>

</body>

</html>
<?php 
  }
?>