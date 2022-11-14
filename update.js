$(document).ready(function () {
      $(".update#1").submit(function (event) {
        event.preventDefault();
        // var formDate={
         
        // };
        var formData = {
          Type: $("#type").val(),
           id: $("#id").val(),
          provider_id: $("#provider_update").val(),
          product_name: $("#product_name_update").val(),
          description: $("#description_update").val(),
          price: $("#price_update").val(),
        };
          if (jQuery.isFunction(formData)) {
              callback = formData;
              formData = {};
          }
          return jQuery.ajax({
              type: 'PUT',
              url: 'http://127.0.0.1:8000/api/product/'+formData.id,
              data: formData,
              success: true,
             
              });
      
      });
    });

$(document).ready(function () {
      $(".updateOrder").submit(function (event) {
        debugger
        event.preventDefault();
        var formData = {
          id:$("#id").val(),
          product_id: $("#product_id_update").val(),
         status: $("#status_update").val(),
        };
          if (jQuery.isFunction(formData)) {
              callback = formData;
              formData = {};
          }
          return jQuery.ajax({
              type: 'PUT',
              url: 'http://127.0.0.1:8000/api/order/'+formData.id,
              data: formData,
              success: true,
              });
      
      });
    });

    $(document).ready(function () {
      $(".proupdate").submit(function (event) {
        event.preventDefault();
        var formData = {
          id: $("#provider_id").val(),
          provider_name: $("#provider_name_update").val(),
        };
          if (jQuery.isFunction(formData)) {
              callback = formData;
              formData = {};
          }
          return jQuery.ajax({
              type: 'PUT',
              url: 'http://127.0.0.1:8000/api/provider/'+formData.id,
              data: formData,
              success: true
              });
        });
    });

      
    $(document).ready(function () {
      $(".transactionUpdate").submit(function (event) {
        debugger
        event.preventDefault();
        var formData = {
          id: $("#transaction_id").val(),
          product_id: $("#product_id_update").val(),
          sum: $("#sum_update").val(),
          payment_for_goods: $("#payment_for_goods_update").val(),
          order_id: $("#order_id_update").val()
        };
          if (jQuery.isFunction(formData)) {
              callback = formData;
              formData = {};
          }
          return jQuery.ajax({
              type: 'PUT',
              url: 'http://127.0.0.1:8000/api/transaction/'+formData.id,
              data: formData,
              success: true
              });
        });
    });


    //   $.ajax({
    //     url: 'http://127.0.0.1:8000/api/product/5',
    //     type: 'PUT',
    //     success: function(response) {
    //       console.log(data);
    //     }
    //  });
  //   $.ajax({
  //     url: 'http://127.0.0.1:8000/api/product/5',
  //     type: 'PUT',
  //     dataType: "json",
  //     data: formData,
  //     success: function(response) {
  //       console.log(data);
        
  //     }
  //  });

//   function _ajax_request( data) {
//     if (jQuery.isFunction(data)) {
//         callback = data;
//         data = {};
//     }
//     return jQuery.ajax({
//         type: 'PUT',
//         url: 'http://127.0.0.1:8000/api/product/5',
//         data: data,
//         success: true,
//         dataType:type
//         });
// }

jQuery.extend({
    put: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'PUT');
    },
    delete_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'DELETE');
    }
});

