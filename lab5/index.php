<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>

    <!-- import CSS CDN  -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

</head>

<body>
    <div class="container top">
        <div class="row">
            <div class="col-12">
                <div class="jumbotron">
                    <h1 class="font-1" style="font-size: 50px;">Oatwant Studio</h1>
                    <h5>ระบบประเมินเงินเดือน</h5>

                    <form action="" class="cmxform" id="actionForm">

                        <div class="form-group row">
                            <label for="First_name" class="col-sm-2 col-form-label">First Name: </label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="First_name" value=""
                                    placeholder="First Name" autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="Last_name" class="col-sm-2 col-form-label">Last Name: </label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="Last_name" value="" placeholder="Last Name">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="hourly" class="col-sm-2 col-form-label">Hourly Salary: </label>
                            <div class="col-sm-6">
                                <input type="number" class="form-control" id="hourly" min="0" value=""
                                    placeholder="money per hour">
                            </div>
                        </div>

                        <div class="form-group form-row">
                            <label class="col-sm-2 col-form-label">Weekly Hours</label>
                            <div class="col-md col-sm-12 col-form-label">
                                <span for="mon">Mon</span>
                                <input type="number" class="form-control" id="mon" name="mon" min="0" placeholder="0.00"
                                    max="24">
                            </div>

                            <div class="col-md col-sm-12 col-form-label">
                                <div for="tue">Tue</div>
                                <input type="number" class="form-control" id="tue" name="tue" min="0" placeholder="0.00"
                                    max="24">
                            </div>

                            <div class="col-md col-sm-12 col-form-label">
                                <div for="wed">Wed</div>
                                <input type="number" class="form-control" id="wed" name="wed" min="0" placeholder="0.00"
                                    max="24">
                            </div>

                            <div class="col-md col-sm-12 col-form-label">
                                <div for="thu">Thu</div>
                                <input type="number" class="form-control" id="thu" name="thu" min="0" placeholder="0.00"
                                    max="24">
                            </div>

                            <div class="col-md col-sm-12 col-form-label">
                                <div for="fri">Fri</div>
                                <input type="number" class="form-control" id="fri" name="fri" min="0" placeholder="0.00"
                                    max="24">
                            </div>

                            <div class="col-md col-sm-12 col-form-label">
                                <div for="sat">Sat</div>
                                <input type="number" class="form-control" id="sat" name="sat" min="0" placeholder="0.00"
                                    max="24">
                            </div>

                            <div class="col-md col-sm-12 col-form-label">
                                <div for="sun">Sun</div>
                                <input type="number" class="form-control" id="sun" name="sun" min="0" placeholder="0.00"
                                    max="24">
                            </div>

                        </div>

                        <button type="button" onclick="resetForm();" class="btn btn-danger">Reset</button>
                        <button type="button" onclick="process();" class="btn btn-primary">Process</button>

                        <hr>
                        <div class="row">
                            <div class="col-6">

                                <div class="touch">
                                    <div class="card text-left">
                                        <div class="card-body">

                                            <div class="form-group row">
                                                <label for="Full_Name" class="col-sm-2 col-form-label">Full Name:
                                                </label>
                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control" id="Full_Name" disabled>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="Weekly_Earn" class="col-sm-2 col-form-label">Week Earning:
                                                </label>
                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control" id="Weekly_Earn" disabled>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-6">
                                <div class="touch">
                                    <div class="card text-left">
                                        <div class="card-body">
                                            <h2>ระบบภายในเว็ปไซต์</h2>
                                            <p> - Sweat Alert 2</p>
                                            <p> - JS</p>
                                            <p>จัดทำโดย นายธนาธิป ชนะศรี 62102010027</p>
                                            <button type="button" onclick="changeBG2();" class="btn float-right"
                                                style="background-color: #E2E2E2;">BG2</button>
                                            <button type="button" onclick="changeBG1();" class="btn float-right mr-2"
                                                style="background-color: #A1A6B4; ">BG1</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <a href="../" class="ml-3" style="font-size: 50px; color:#A1A6B4"><i class="fas fa-backward"></i></a>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
    <footer id="sticky-footer" class="py-4 text-white mt-5">
        <div class="container text-center" style="font-size: 15px;">
            <div>Copyright © 2020 <a href="mailto:thanathip.oat@g.swu.ac.th">THANATHIP CHANASRI</a></div>
        </div>
    </footer>

    <!-- Import Java Script CDN -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous">
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"
        integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg=="
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

    <script src="assets/js/system.js"></script>


</body>

</html>