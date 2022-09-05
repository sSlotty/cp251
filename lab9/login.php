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
    <title>Login | Lab9</title>
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
    </style>

</head>

<body>

    <div class="container mt-5">
        <div class="card">
            <h5 class="card-header info-color white-text text-center py-4">
                <strong>Sign in</strong>
            </h5>
            <div class="card-body px-lg-5 pt-0">

                <form class="text-center" id="form" action="">
                    <div class="md-form">
                        <input type="text" id="username" name="username" class="form-control" value="<?php echo $_COOKIE['UserID']; ?>">
                        <label for="username">Username</label>
                    </div>
                    <div class="md-form">
                        <input type="password" id="password" name="password" class="form-control">
                        <label for="password">Password</label>
                    </div>
                    <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit"
                        name="submit" id="submit">Login</button>
                    <p>Not a member?
                        <a href="register.php">Register</a>
                    </p>
                </form>
                <small>
                    <h5>Admin</h5>
                    <p>Username : admin</p>
                    <p>Passowrd: admin</p>
                    <h5>User</h5>
                    <p>Username : user</p>
                    <p>Passowrd: user</p>

                </small>

            </div>

        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../node_modules/MDB-Pro/js/mdb.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="system/js/login.js"></script>
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