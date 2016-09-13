(function() {
      $('#submit').on('click', function(event) {
        event.preventDefault()
        
        $("#name").text($("#a").val());
        $("#job-title").text($("#b").val());
        $("#phone").text($("#c").val());
        $("#email").text($("#d").val());
      });

      $('button.blue').on('click', function(event) {
        event.preventDefault()
        $(".biz-card").toggleClass("blue").removeClass("yellow");
      });

      $('button.yellow').on('click', function(event) {
        event.preventDefault()
        $(".biz-card").toggleClass("yellow").removeClass("blue");
      });
    })()