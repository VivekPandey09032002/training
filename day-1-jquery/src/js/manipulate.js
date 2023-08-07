function addEducation() {
  const educationItem = `<div class="education-item">
                    <div class="row">
                        <div class="col-10 row">
                            <div class="form-group col-md-3">
                                <label for="institution">Institution</label>
                                <input type="text" class="form-control" name="courseInstitution[]" placeholder="college name" required>
                                <div class="invalid-feedback">invalid field</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="degree">Degree</label>
                                <input type="text" class="form-control" name="courseDegree[]" placeholder="college degree" required>
                                <div class="invalid-feedback">invalid field</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="year">Year</label>
                                <input type="number" class="form-control" name="courseYear[]" placeholder="course year" required>
                                <div class="invalid-feedback">invalid field</div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="degree">Degree Type</label>
                                <input type="text" class="form-control" name="coursedegreeType[]" placeholder="Masters | Gradudation" required>
                                <div class="invalid-feedback">invalid field</div>
                            </div>                    
                        </div>
                        <div class="col-2 m-auto">
                            <button type="button" class="btn btn-outline-danger align-center" onclick="removeEducation(this)">Remove</button>
                        </div>
                    </div>

                </div> <hr >`;

  $("#education-form").append(educationItem);
}

function removeEducation(button) {
  $(button).closest(".education-item").remove();
}
