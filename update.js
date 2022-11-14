// $(document).ready(function (response) {
//       $("form").submit(function (event) {
//         event.preventDefault();
//         var formData = {
//           Type: $("#Type").val(),
//           provider_id: $("#provider_id").val(),
//           product_name: $("#product_name").val(),
//           description: $("#description").val(),
//           price: $("#price").val(),
//         };
//           if (jQuery.isFunction(formData)) {
//               callback = formData;
//               formData = {};
//           }
//           return jQuery.ajax({
//               type: 'PUT',
//               url: 'http://127.0.0.1:8000/api/product/5',
//               data: formData,
//               success: true,
             
//               });
      
//       });
//     });

    // $(document).ready(function () {
    //   $("form").submit(function (event) {
    //     event.preventDefault();
    //     var formData = {
    //       product_id: $("#product_id").val(),
    //      status: $("#status").val(),
    //     };
    //       if (jQuery.isFunction(formData)) {
    //           callback = formData;
    //           formData = {};
    //       }
    //       return jQuery.ajax({
    //           type: 'PUT',
    //           url: 'http://127.0.0.1:8000/api/order/1',
    //           data: formData,
    //           success: true,
    //           });
      
    //   });
    // });

    // $(document).ready(function () {
    //   $("form").submit(function (event) {
    //     event.preventDefault();
    //     var formData = {
    //       provider_name: $("#provider_name").val(),
    //     };
    //       if (jQuery.isFunction(formData)) {
    //           callback = formData;
    //           formData = {};
    //       }
    //       return jQuery.ajax({
    //           type: 'PUT',
    //           url: 'http://127.0.0.1:8000/api/provider/1',
    //           data: formData,
    //           success: true
    //           });
    //     });
    // });

      
    // $(document).ready(function () {
    //   $("form").submit(function (event) {
    //     event.preventDefault();
    //     var formData = {
    //       product_id: $("#product_id").val(),
    //       sum: $("#sum").val(),
    //       payment_for_goods: $("#payment_for_goods").val(),
    //       order_id: $("#order_id").val()
    //     };
    //       if (jQuery.isFunction(formData)) {
    //           callback = formData;
    //           formData = {};
    //       }
    //       return jQuery.ajax({
    //           type: 'PUT',
    //           url: 'http://127.0.0.1:8000/api/transaction/11',
    //           data: formData,
    //           success: true
    //           });
    //     });
    // });


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

// jQuery.extend({
//     put: function(url, data, callback, type) {
//         return _ajax_request(url, data, callback, type, 'PUT');
//     },
//     delete_: function(url, data, callback, type) {
//         return _ajax_request(url, data, callback, type, 'DELETE');
//     }
// });

