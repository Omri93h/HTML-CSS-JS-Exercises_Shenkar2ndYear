$(document).ready(function() {
    $("#start-button").click(function(){
        $(this).hide("slow");
        $("#welcome-page").hide("slow");
        $("#form-page").css("display", "block");
    });
});

function validateCheckbox() {
    var checkboxs=document.getElementsByName("interests[]");
    for(var i=0,l=checkboxs.length;i<l;i++) {
        if(checkboxs[i].checked){
            return true;
        }
    }
    alert("NO CHECKBOX CHECKED");
    return false;
}




(function () {
    var onload = window.onload;
    window.onload = function () {
        if (typeof onload == "function") {
            onload.apply(this, arguments);
        }
        var fields = [];
        var inputs = document.getElementsByTagName("input");
        var textareas = document.getElementsByTagName("textarea");
        for (var i = 0; i < inputs.length; i++) {
            fields.push(inputs[i]);
        }
        for (var i = 0; i < textareas.length; i++) {
            fields.push(textareas[i]);
        }
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (typeof field.onpaste != "function" && !!field.getAttribute("onpaste")) {
                field.onpaste = eval("(function () { " + field.getAttribute("onpaste") + " })");
            }
            if (typeof field.onpaste == "function") {
                var oninput = field.oninput;

                field.oninput = function () {
                    if (typeof oninput == "function") {
                        oninput.apply(this, arguments);
                    }
                    if (typeof this.previousValue == "undefined") {
                        this.previousValue = this.value;
                    }
                    var pasted = (Math.abs(this.previousValue.length - this.value.length) > 1 && this.value != "");
                    if (pasted && !this.onpaste.apply(this, arguments)) {
                        this.value = this.previousValue;
                    }
                    this.previousValue = this.value;
                };
                if (field.addEventListener) {
                    field.addEventListener("input", field.oninput, false);
                } else if (field.attachEvent) {
                    field.attachEvent("oninput", field.oninput);
                }
            }
        }
    }
})();