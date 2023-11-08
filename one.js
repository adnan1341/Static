if (window.location.href.endsWith("/html/Landing-Page.html") || window.location.href.endsWith("/html/Landing-Page.html#")) {
    // console.log("First/Landing Page") // Check if you're on the First/Landing Page...

    if (localStorage.getItem("Email_Key") !== null && localStorage.getItem("Password_Key") !== null && localStorage.getItem("Log_In_Key") !== null && localStorage.getItem("Log_In_Key") !== null) {

        document.getElementById("toggle").style.display = "block";
        document.getElementById("data").classList.add("d-none");
        document.getElementById("logged_data").classList.remove("d-none");
        console.log("The key exists!, Logged In"); // See in console if the data exists in localStorage & Logged In...

        function log_out() {

            localStorage.removeItem("Log_In_Key");
            location.reload();
            // console.log("Hello"); // See if the function is Working...
            
        };

        function del_account() {

            localStorage.removeItem("Log_In_Key");
            localStorage.removeItem("Email_Key");
            localStorage.removeItem("Password_Key");
            location.reload();
            // console.log("Hello, removed"); // See if the function is Working...
        };
    }

    else if (localStorage.getItem("Email_Key") !== null || localStorage.getItem("Password_Key") !== null || localStorage.getItem("LogIn_Key") !== null && localStorage.getItem("LogIn_Key") == null) {
        
        console.log("The key exists!, Logged Out"); // See in console if the data exists in localStorage & Logged Out...
    }

    else {

        console.log('The key does not exist!'); // See in console if the data doesn't exists in localStorage...
    }

    function sign_up() {

        window.location.href = "/html/Sign-Up.html";
    };

    function log_in() {

        window.location.href = "/html/Log-In.html";
    };
}

else if (window.location.href.endsWith("/html/Sign-Up.html") || window.location.href.endsWith("/html/Sign-Up.html#")) {
    // console.log("Second/Sign-Up Page"); // Check if you're on the Second/Sign-Up Page...

    const form = document.forms["sign_up"];

    const email_text = "Email_Key";
    const email = document.forms["sign_up"]["email"];

    const pass_text = "Password_Key";
    const pass = document.forms["sign_up"]["password"];
    const showHideBtn = document.forms["sign_up"]["show_hide"];

    showHideBtn.addEventListener("click", function (event) {

        event.preventDefault(); // Prevent form submission

        if (pass.type === "password") {

            pass.type = "text";
            document.getElementById("pass_icon").classList.replace("fa-eye", "fa-eye-slash");
            // console.log(pass.type); // See Input type value after changing it in Console...
        }

        else {

            pass.type = "password";
            document.getElementById("pass_icon").classList.replace("fa-eye-slash", "fa-eye");
            // console.log(pass.type); // See Input type value after changing it in Console...
        };
    });

    form.addEventListener("submit", () => {

        localStorage.setItem(`${email_text}`, `${email.value}`);
        localStorage.setItem(`${pass_text}`, `${pass.value}`);
        // console.log(email.value, pass.value); // See Entered data after saving it in Console...
        window.location.href = "/html/Log-In.html";
    });
}

else if (window.location.href.endsWith("/html/Log-In.html") || window.location.href.endsWith("/html/Log-In.html#")) {
    // console.log("Third/Log-In Page"); // Check if you're on the Third/Log-In Page...

    const pass = document.forms["log_in"]["password"];
    const showHideBtn = document.forms["log_in"]["show_hide"];
    
    showHideBtn.addEventListener("click", function (event) {

        event.preventDefault(); // Prevent form submission

        if (pass.type === "password") {

            pass.type = "text";
            document.getElementById("pass_icon").classList.replace("fa-eye", "fa-eye-slash");
            // console.log(pass.type); // See Input type value after changing it in Console...
        }

        else {

            pass.type = "password";
            document.getElementById("pass_icon").classList.replace("fa-eye-slash", "fa-eye");
            // console.log(pass.type); // See Input type value after changing it in Console...
        };
    });

    document.getElementById("form2").addEventListener("submit", () => {

        const E_email = document.forms["log_in"]["email"];
        const E_password = document.forms["log_in"]["password"];

        // console.log(E_email.value, E_password.value); // See Entered Credentials in Console...

        if (localStorage.getItem("Email_Key") === E_email.value && localStorage.getItem("Password_Key") === E_password.value) {

            localStorage.setItem("Log_In_Key", "Logged In");
            window.location.href = "/html/Landing-Page.html";
        }

        else if ((localStorage.getItem("Email_Key") !== E_email.value) || (localStorage.getItem("Password_Key") !== E_password.value)) {

            // console.log("Wrong Email & Password Combination"); // Show Wrong Credentials Error message in Console...
            document.getElementById("error").classList.add("show");
            document.getElementById("error").style.display = "block";
        }
    });

    document.getElementById("close").addEventListener("click", () => {

        document.getElementById("error").classList.remove("show");
        document.getElementById("error").style.display = "none";
    });
    
    document.getElementById("close_button").addEventListener("click", () => {
    
        document.getElementById("error").classList.remove("show");
        document.getElementById("error").style.display = "none";
    });
}

else {

    console.log("Page URL is Wrong!"); // Show Wrong Page Message in Console if you're on different page...
}