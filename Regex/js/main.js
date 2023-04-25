$(document).ready(function(){
    $("#link-myModal").click(function(){
        $("#myModal").modal();
    })
    // $("#close-modal").click(function(){
    //     $("#myModal").modal("hide");
    // })

    var maTour = $("#txtMa");
    var chkMa = $("#chkMa");

    function KiemTraMa(){
        var re = /^[A-Z]{3}-[A-Z]{3}-\d{2}-\d{4}$/;

        if(maTour.val() == "")
        {
            chkMa.html("* Bắt buộc nhập");
            return false;
        }

        if(re.test(maTour.val()) == false)
        {
            chkMa.html("Ma tour theo mau: XXX-XXX-XX-XXXX");
            return false;
        }

        chkMa.html("*");
        return true;
    }

    maTour.blur(KiemTraMa);

    var txtHanhTrinh = $("#txtTour");
    var chkHanhTrinh = $("#chkTour");

    var txtNgayKhoiHanh = $("#txtDate");
    var chkDate = $("#chkDate");

    var txtTime = $("#txtTime");
    var chkTime = $("#chkTime");

    var txtPrice = $("#txtPrice");
    var chkPrice = $("#chkPrice");

    var txtImage = $("#File");
    var chkImage = $("#chkImage");

    var i = 0;
    $("#btnSave").click(function(){
        var tourID = maTour.val();
        var tour = txtHanhTrinh.val();
        var date = txtNgayKhoiHanh.val();
        var time = txtTime.val();
        var giaTour = txtPrice.val();
        console.log(giaTour);
        var image = txtImage.val().substring(12);

        var them = 
        "<tr>"
        + "<td>" + (i++) + "</td>"
        + "<td>" + tourID + "</td>"
        + "<td>" + tour + "</td>"
        + "<td>" + date + "</td>"
        + "<td>" + time + "</td>"
        + "<td>" + giaTour + "</td>"
        + "<td>" + image + "</td>"
        + "</tr>";

        // console.log(them);
        // $(".abc").append("<p>asdasdaas</p>");
        $(".table").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})