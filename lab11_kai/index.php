<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index | Lab11</title>

    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../node_modules/MDB-Pro/css/mdb.min.css">
    <link rel="stylesheet" href="../node_modules/FontAwesomePro/css/all.css">
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtRuvW6h8Rl2PjUuDKqiXVQX7GdykrYxM&callback=initMap&libraries=&v=weekly"></script>
   
   <style>
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');

        html,body {
            font-family: 'Mitr', sans-serif;
            background: url("https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80") no-repeat center center fixed;
            background-size: cover;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        #map {
            height: 100%;
        }

        .custom-map-control-button {
        appearance: button;
        background-color: #fff;
        border: 0;
        border-radius: 2px;
        box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        margin: 10px;
        padding: 0 0.5em;
        height: 40px;
        font: 400 18px Roboto, Arial, sans-serif;
        overflow: hidden;
    }
    .custom-map-control-button:hover {
        background: #ebebeb;
    }
    .gm-ui-hover-effect { 
    display: none !important; 
  } /* remove infoWindow x */ 
  #map {
        height: 100%;
  }
    </style>

</head>

<body>

    <div id="map" style="width: 100%; height: 500px;"></div>


    <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../node_modules/MDB-Pro/js/mdb.min.js"></script>
    <script src="map.js"></script>

<script>

</script>
</body>

</html>