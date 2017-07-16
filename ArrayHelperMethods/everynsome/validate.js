function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field("test");
//console.log(username.validate());
var password = new Field("SuperSecretPass");
var birthdate = new Field("05/09/2010");

var fields = [username, password, birthdate];

var formIsValid = fields.every(field => field.validate() );

if(formIsValid){
    console.log('valid');
} else {
    console.log('valid error');
}