      function checkFName() {
        let fname = document.getElementById("fName").value;
        const nameRegex = /^[a-zA-Z]+$/;
        let error = document.getElementById("erorrFirstName");

        if (nameRegex.test(fname)) {
          error.innerText = "Valid";
          error.classList = "valid";
        } else {
          error.innerText = "Numbers are not allow.";
          error.classList = "error";
        }
      }

      function checkLName() {
        let lname = document.getElementById("lName").value;
        const nameRegex = /^[a-zA-Z]+$/;
        let error = document.getElementById("erorrLastName");

        if (nameRegex.test(lname)) {
          error.innerText = "valid";
          error.classList = "valid";
        } else {
          error.innerText = "Numbers are not allow.";
          error.classList = "error";
        }
      }

      function checkDate() {
        let date = document.getElementById("bDate");

        const dateRegex =
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][20])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        let error = document.getElementById("erorrBirthDate");

        if (dateRegex.test(date.value)) {
          error.innerText = "Valid";
          error.classList = "valid";
        } else {
          error.innerText = "Date must be( dd/mm/yyyy )";
          error.classList = "error";
        }
      }
      function checkEmail() {
        let email = document.getElementById("Email");

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let error = document.getElementById("erorrEmail");

        if (emailRegex.test(email.value)) {
          error.innerText = "Valid";
          error.classList = "valid";
        } else {
          error.innerText = "Write a currect Email ";
          error.classList = "error";
        }
      }

      function checkConfirmEmail() {
        let Email = document.getElementById("ConfirmEmail").value;
        let email = document.getElementById("Email").value;
        let error = document.getElementById("erorrConfirmEmail");

        if (email === Email) {
          error.innerText = "VALID";
          error.classList = "valid";
        } else {
          error.innerText = "Email Not Match";
          error.classList = "error";
        }
      }

      function checkpass() {
        let pass = document.getElementById("Password").value;
        const passRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let errorDiv = document.getElementById("errorDiv");
        errorDiv.innerHTML = "";

        const missingConditions = [];

        if (!passRegex.test(pass)) {
          if (!/(?=.*[a-z])/g.test(pass)) {
            missingConditions.push("At least one lowercase letter");
          }
          if (!/(?=.*[A-Z])/g.test(pass)) {
            missingConditions.push("At least one uppercase letter");
          }
          if (!/(?=.*\d)/g.test(pass)) {
            missingConditions.push("At least one digit");
          }
          if (!/(?=.*[@$!%*?&])/g.test(pass)) {
            missingConditions.push("At least one special character");
          }
          if (pass.length < 8) {
            missingConditions.push("Minimum length of 8 characters");
          }
          for (let condition in missingConditions) {
            let err = document.createElement("span");
            err.innerHTML = "- " + missingConditions[condition] + "<br>";
            err.classList = "error";
            errorDiv.appendChild(err);
          }
        } else {
          let err = document.createElement("span");
          err.textContent = "Valid Password";
          err.classList = "valid";
          errorDiv.appendChild(err);
        }
      }
      function confirmPass() {
        let pass = document.getElementById("Password");
        let passConfirm = document.getElementById("ConfirmPassword");
        let message = document.getElementById("erorrConfirmPassword");

        if (pass.value === passConfirm.value) {
          message.innerText = "Password Confirmed !";
          message.classList = "valid";
        } else {
          message.innerText = "Write Match Password To Confirmed !";
          message.classList = "error";
        }
      }
      //   function checkpass() {

      //     let pass = document.getElementById("Password").value;
      //     const passRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      //     let error = document.getElementById("erorrPassword");
      //     const missingConditions = [];

      //     if (!passRegex.test(pass)) {

      //       if (!/(?=.*[a-z])/g.test(pass)) {
      //         missingConditions.push("At least one lowercase letter");
      //       }
      //       if (!/(?=.*[A-Z])/g.test(pass)) {
      //         missingConditions.push("At least one uppercase letter");

      //       }
      //       if (!/(?=.*\d)/g.test(pass)) {
      //         missingConditions.push("At least one digit");

      //       }
      //       if (!/(?=.*[@$!%*?&])/g.test(pass)) {
      //         missingConditions.push("At least one special character");

      //       }
      //       if (pass.length < 8) {
      //         missingConditions.push("Minimum length of 8 characters");

      //       }
      //     }

      //     if (missingConditions.length > 0) {
      //         let errorDiv = document.getElementById("errorDiv");

      //       for (let i in missingConditions) {

      //         console.log(missingConditions[i]);
      //         let err = document.createElement('<span>');
      //         err.textContent = "1- "+missingConditions[i];
      //         err.classList ="error";
      //         errorDiv.appendChild(err);

      //       }
      //     } else {
      //         let err = document.createElement("<p>");
      //         err.textContent = "Valid Password";
      //         err.classList ="valid";
      //         errorDiv.appendChild(err);
      //     }
      //   }
    