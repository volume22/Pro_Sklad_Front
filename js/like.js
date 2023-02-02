$(document).ready(function  () {
    $("#likecreate").submit(function (event) {
      var formData = {
        product_id: $("#product_id").val(),
        like: $("#like").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/like",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });

  $(document).ready(function (response) {
    $(".deletelike").submit(function (event) {
      event.preventDefault();
      var formData = {
        id: $("#id_deleted").val(),
      };
      $.ajax({
        type: 'DELETE',
        processData: false,
        contentType: 'application\json',
        url: 'http://127.0.0.1:8000/api/like/'+formData.id,
        data: formData
      });
    });
  });
  function GetLike(){
    $(document).ready(function () {
      $.ajax({
        url: "http://127.0.0.1:8000/api/like",
        dataType: "json"
      }).done(function(response) {
        let LikeDv = $("#likes");
        console.log(response.data);
        $.each(response.data, function(i, like) {
          LikeDv.append('<p>Product id ' + like.product_id + '</p>');
          $.each(like.products, function(i, LikeProduct) {
            console.log(LikeProduct);
            LikeDv.append('<p>' + LikeProduct + '</p>');
          });
        });
      });
    });
    }

