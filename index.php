<?php 
if(file_exists("counter.txt")){
    $f = fopen("counter.txt","r");

    $data = fread($f,5);
    fclose($f);
    $data++;
}else{
    $data = 0;
}

    $f=fopen("counter.txt","w"); 
    fputs($f,$data); 
    fclose($f);
    $data=sprintf("%05d",$data);

    
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
</head>
<style>
@import url('https://fonts.googleapis.com/css?family=Prompt');


body {
    padding: 0;
    margin: 0;
    font-family: 'Prompt', sans-serif;
    background: url("https://images.unsplash.com/photo-1543207169-eb2e51c5979c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80") no-repeat center center fixed
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: white;
    text-underline-position: unset;
}

.jumbotron{
    opacity: 90%;
}
.alert:hover, .btn-secondary:hover{
    background-color: #89c9b8;
    border: none;
}

.jumbotron:hover{
    background-color: #797270;
    color: whitesmoke;
}
</style>

<body>
    
    <div class="container" style="margin-top: 200px;">
    

        <div class="jumbotron pt">
        
                <h1 class="display-4">THANATHIP C.</h1>
                <p class="lead">นายธนาธิป ชนะศรี รหัสนิสิต 62102010027
                </p>
                <div class="btn btn-group btn-group-toggle">

                    <a role="button" class="btn btn-secondary" href="lab1/index.html">Lab 1</a>
                    <a role="button" class="btn btn-secondary" href="lab1/main.html">Lab 2</a>
                    <a role="button" class="btn btn-secondary" href="lab3/index.html" type="radio">Lab 3</a>
                    <a role="button" class="btn btn-secondary" href="lab4" type="radio">Lab 4</a>
                    <a role="button" class="btn btn-secondary" href="lab5" type="radio">Lab 5</a>
                    <a role="button" class="btn btn-secondary" href="lab6" type="radio">Lab 6</a>
                    <a role="button" class="btn btn-secondary" href="lab7" type="radio">Lab 7</a>
                    <a role="button" class="btn btn-secondary" href="lab9/" type="radio">Lab 9</a>
                    <a role="button" class="btn btn-secondary" href="lab10" type="radio">Lab 10</a>
                    <a role="button" class="btn btn-secondary" href="lab10.2/" type="radio">Lab 10.2</a>
                    <a role="button" class="btn btn-secondary" href="lab11/" type="radio">Lab 11</a>


                </div>
                <br>
                <br>
                <br>
                <div class="alert alert-dark text-center" style="font-size: 20px; border:none;" role="alert">
                    จำนวนผู้เข้าชมเว็ปไซต์ <?php echo $data;?>
                
            </div>
        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
    
</body>

</html>