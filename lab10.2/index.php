<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index | Lab10.2</title>
    
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


    <div class="container mt-3 mb-5">

        <div class="card">
            <div class="card-header text-center">
                List of Student
            </div>
            <div class="card-body">
                <form action="" id="form">
                    <div class="form-row">
                        <div class="col">
                            <!-- Table  -->
                            <div class="md-form">
                                <div class="md-form mt-0">
                                    <input class="form-control" type="text" id="table" name="table" placeholder="Table" aria-label="Table">
                                </div>
                            </div>
                        </div>
    
                        <div class="col">
                            <!-- Limit -->
                            <div class="md-form">
                                <div class="md-form mt-0">
                                    <input class="form-control" type="number" id="limit" name="limit" placeholder="Limit" aria-label="Limit" min="0">
                                </div>
                            </div>
                        </div>
    
                    </div>
                </form>
                <button type="button" class="float-right btn btn-outline-primary waves-effect" onclick="post();">Fetch data</button>
                <p id="data"></p>

            </div>
        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../node_modules/MDB-Pro/js/mdb.min.js"></script>


<script>
    function post(){
        var limit, table, obj, dbParam, amlhttp, myObj, x, txt = "";
        table = document.getElementById('table').value;
        limit = document.getElementById('limit').value;

        obj = {"limit":limit , "table": table};
        console.log(obj);
        
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){

                var resultText = xmlhttp.responseText;
                myObj = JSON.parse(resultText);
                console.log(myObj[0]['firstname']);

                for(x in myObj){
    
                    txt += "[ " + x + " ]" + " Name : " + myObj[x]['firstname'] + " " + myObj[x]['lastname'] + "</br>"; 
                }
                if(limit < 1){
                    document.getElementById("data").innerHTML = null;
                }
            }
            document.getElementById("data").innerHTML = txt;
        };

        xmlhttp.open("POST","json_php_db_post.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
    }
    
</script>
</body>

</html>