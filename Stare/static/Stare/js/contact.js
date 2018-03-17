
$("#subscribe-form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        // formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        $("#subscribe-submit").html('<i class="fa fa-spinner fa-spin"></i>');
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    // var email = $("#subscribe-email").val();
    // var email = $("#email").val();
    // var message = $("#message").val();
    // var csrf = $("#csrf").attr("csrf");

    // console.log('its data going'+name+ " and csrf :"+csrf)

    $.ajax({
        url: "subscribe",
        type: "post",
        data: $("#subscribe-form").serialize(), //"name=" + name + "&email=" + email + "&message=" + message+"&csrfmiddlewaretoken="+csrf, 
        // data: $("form-submit").serialize(),
        cache:false,
        // beforeSend : function(){

        // },
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(name){
    $("#subscribe-form")[0].reset();
    submitMSG(true, "It's good to hear from you.Thank you!")
}

// function formError(){
//     $("#subscribe-form").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(this).removeClass();
//     });
// }

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-left tada animated text-success";
    } else {
        var msgClasses = "h3 text-left text-danger";
    }
    // $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    alert(msg);
    if(valid){
        $("#subscribe-submit").html('Send <i class="fa fa-email" aria-hidden="true"></i>');
    }
}