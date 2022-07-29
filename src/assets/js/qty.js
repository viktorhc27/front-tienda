$(document).ready(function () {
    let num = 1
    $("#quantity").val(1);
    $("#plus").click(function () {
        num++;
        parseInt(num)
        console.log("sumando"+num);
        $("#quantity").val(num);
    })
    $("#minus").click(function () {
        if (num > 1 ) {
            parseInt(num)
            num--;
            console.log("restando" + num);
            $("#quantity").val(num);
        }

    })

});

