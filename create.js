
  $(document).ready(function () {
    $(".createproduct").submit(function (event) {
      event.preventDefault();
      var formData = {
        Type: $("#Type").val(),
        provider_id: $("#provider_id").val(),
        product_name: $("#product_name").val(),
        description: $("#description").val(),
        price: $("#price").val(),
      };
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/product",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
    });
  });

  $(document).ready(function () {
    $(".ordercreate").submit(function (event) {
      var formData = {
        product_id: $("#product_id").val(),
        status: $("#status").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/order",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });

  $(document).ready(function () {
    $(".procreate").submit(function (event) {
      var formData = {
        provider_name: $("#provider_name").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/provider",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });

  $(document).ready(function () {
    $(".transactionCreate").submit(function (event) {
      var formData = {
        product_id: $("#product_id").val(),
        sum: $("#sum").val(),
        payment_for_goods: $("#payment_for_goods").val(),
        order_id: $("#order_id").val()
      };
  
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/transaction",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });
