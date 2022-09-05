<div class="row">
    <div class="col-12 mb-2">

        <div class="card" style="width: 30rem; margin: 0 auto; float: none; margin-bottom: 10px;">
            <!--Content-->
            <div class="content">


                <div class="card-header light-blue darken-3 white-text">
                    <h4 class="title"><i class="fas fa-pencil-alt"></i> Contact form</h4>
                </div>

                <div class="card-body mb-0">

                    <form id="form" action="" method="POST">

                        <div class="md-form form-sm">
                            <i class="fad fa-user prefix"></i>
                            <input type="text" id="firstname" name="firstname" class="form-control" required>
                            <label for="firstname">Firstname</label>
                        </div>

                        <div class="md-form form-sm">
                            <i class="fad fa-user prefix"></i>
                            <input type="text" id="lastname" name="lastname" class="form-control" required>
                            <label for="lastname">Lastname</label>
                        </div>

                        <div class="md-form form-sm">
                            <!--Blue select-->
                            <select class="mdb-select md-form colorful-select dropdown-primary" name="major" required>
                                <option value="CS">CS</option>
                                <option value="Math">Math</option>
                                <option value="Stat">Stat</option>

                            </select>
                            <label class="mdb-main-label">Major</label>
                            <!--/Blue select-->
                        </div>

                        <div class="md-form form-sm">
                            <i class="fad fa-calendar-week prefix"></i>
                            <input placeholder="Selected dob" type="date" name="dob" id="dob"
                                class="form-control datepicker" required>
                        </div>

                        <div class="md-form form-sm">
                            <i class="fad fa-envelope-square prefix"></i>
                            <input type="email" id="email" name="email" class="form-control" required>
                            <label for="email">E-mail</label>
                        </div>

                        <div class="md-form form-sm">
                            <i class="fad fa-phone prefix"></i>
                            <input type="text" id="phone" name="phone" class="form-control" required>
                            <label for="phone">Phone number</label>
                        </div>

                        <div class="text-center mt-1-half">
                            <button class="btn btn-info mb-2 waves-effect waves-light" type="submit" name="submit" id="submit "> add student</button>
                        </div>

                    </form>

                </div>
            </div>
            <!--/.Content-->
        </div>
    </div>
</div>