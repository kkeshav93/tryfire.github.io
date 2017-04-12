// SIGN UP FORM VALIDATION
$(document).ready(function (){
  $('#signup').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields : {
      firstname : {
        validators : {
          stringLength : {
            min : 2,
            max : 20,
            message : "Mimum should be 2 and maximum should be 20"
          },
          notEmpty : {
            message : "Please provide firstname"
          }
        }
      },
      lastname : {
        validators : {
          stringLength : {
            min : 2,
            max : 30,
            message : "Mimum should be 2 and maximum should be 30"
          },
          notEmpty : {
            message : "Please provide firstname"
          }
        }
      },
      password : {
        validators : {
          stringLength : {
            min : 2,
            max : 30,
            message : "Mimum should be 2 and maximum should be 30"
          },
          notEmpty : {
            message : "Please provide password"
          },
          identical : {
            field : 'confpassword',
            message : 'your typed passwords dont match'
          }
        }
      },
      confpassword : {
        validators : {
          stringLength : {
            min : 2,
            max : 30,
            message : "Mimum should be 2 and maximum should be 30"
          },
          notEmpty : {
            message : "Please provide firstname"
          },
          identical : {
            field : 'password',
            message : 'your typed passwords dont match'
          }
        }
      },
      email : {
        validators : {
          notEmpty : {
            message : "Please provide an email address"
          },
          emailAddress : {
            message : 'Provide Valid email address'
          }
        }
      },
      phone : {
        validators : {
          notEmpty : {
            message : 'Cant be left blank'
          },
          phone : {
            country : 'US',
            message : 'Please provide valid phone number'
          }
        }
      }
    }
  });
});
