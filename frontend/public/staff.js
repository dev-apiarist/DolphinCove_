let msgtrack;
$(document).ready(() => {
    $("form#form1").on("submit", function (e) {
        e.preventDefault();
        let data = {
            fname: $("input[name=fname]").val(),
            lname: $("input[name=lname]").val(),
            date: $("input[name=date]").val(),
            payment_method_id: $("input[name=payment_method_id]").val(),
            hotel_id: $("input[name=hotel_id]").val(),
            program_id: $("input[name=program_id]").val(),
        };
        $.ajax({
            type: "post",
            url: "/session/booking",
            data: data,
            success: (response) => {
                $("form#form1").trigger("reset");
                $("div#message").css({
                    display: "block",
                    background: "#0f0",
                });
                $("div#message").text("Booking Successful!");
                $("form#form1").prop("disabled", true);
                clearTimeout(msgtrack);
                msgtrack = setTimeout(() => {
                    $("div#message").css({ display: "none" });
                    $("div#message").text("");
                    window.location.reload();
                }, 3000);
            },
            error: () => {
                $("div#message").css({ display: "block", background: "#f00" });
                $("div#message").text("Booking Error!");
                clearTimeout(msgtrack);
                msgtrack = setTimeout(() => {
                    $("div#message").css({ display: "none" });
                    $("div#message").text("");
                }, 3000);
            },
        });
    });
    $("form#form2").on("submit", function (e) {
        e.preventDefault();
        let data = {
            tour_company: $("input[name=tour_company]").val(),
            tour_company_address: $("input[name=tour_company_address]").val(),
            tour_company_desc: $("input[name=tour_company_desc]").val(),
            email: $("input[name=email]").val(),
        };
        $.ajax({
            type: "post",
            url: "/profile/tour_co",
            data: data,
            success: () => {
                $("form#form2").trigger("reset");
                $("div#message").css({
                    display: "block",
                    background: "#0f0",
                });
                $("div#message").text("Profile Created!");
                $("form#form2").prop("disabled", true);
                clearTimeout(msgtrack);
                msgtrack = setTimeout(() => {
                    $("div#message").css({ display: "none" });
                    $("div#message").text("");
                    window.location.reload();
                }, 3000);
            },
            error: () => {
                $("div#message").css({ display: "block", background: "#f00" });
                $("div#message").text("Profile Error!");
                clearTimeout(msgtrack);
                msgtrack = setTimeout(() => {
                    $("div#message").css({ display: "none" });
                    $("div#message").text("");
                }, 3000);
            },
        });
    });
});

function removeCompany(id) {
    $.ajax({
        type: "delete",
        url: `/profile/${id}`,
        success: () => {
            $("div#message").css({
                display: "block",
                background: "#0f0",
            });
            $("div#message").text("Profile Deleted!");
            clearTimeout(msgtrack);
            msgtrack = setTimeout(() => {
                $("div#message").css({ display: "none" });
                $("div#message").text("");
                window.location.reload();
            }, 3000);
        },
        error: () => {
            $("div#message").css({ display: "block", background: "#f00" });
            $("div#message").text("Cannot Erase!");
            clearTimeout(msgtrack);
            msgtrack = setTimeout(() => {
                $("div#message").css({ display: "none" });
                $("div#message").text("");
            }, 3000);
        },
    });
}
function removeBooking(id) {
    $.ajax({
        type: "delete",
        url: `/booking/${id}`,
        success: () => {
            $("div#message").css({
                display: "block",
                background: "#0f0",
            });
            $("div#message").text("Profile Deleted!");
            clearTimeout(msgtrack);
            msgtrack = setTimeout(() => {
                $("div#message").css({ display: "none" });
                $("div#message").text("");
                window.location.reload();
            }, 3000);
        },
        error: () => {
            $("div#message").css({ display: "block", background: "#f00" });
            $("div#message").text("Cannot Erase!");
            clearTimeout(msgtrack);
            msgtrack = setTimeout(() => {
                $("div#message").css({ display: "none" });
                $("div#message").text("");
            }, 3000);
        },
    });
}
