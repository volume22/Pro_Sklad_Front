$(document).ready(function (response) {
      $("#deleted_id").submit(function (event) {
        event.preventDefault();
        var formData = {
          id: $("#id").val(),
        };
          $.ajax({
              type: 'DELETE',
              processData: false,
              contentType: 'application\json',
              url: 'http://127.0.0.1:8000/api/product/'+formData.id,
              data: formData
              });
      });
    });

    $(document).ready(function (response) {
        $(".deletedOrder").submit(function (event) {
          event.preventDefault();
          var formData = {
            id: $("#id_deleted").val(),
          };
            $.ajax({
                type: 'DELETE',
                processData: false,
                contentType: 'application\json',
                url: 'http://127.0.0.1:8000/api/order/'+formData.id,
                data: formData
                });
        });
      });

      $(document).ready(function (response) {
        $(".prodeleted").submit(function (event) {
          event.preventDefault();
          var formData = {
            id: $("#deleted_id").val(),
          };
            $.ajax({
                type: 'DELETE',
                processData: false,
                contentType: 'application\json',
                url: 'http://127.0.0.1:8000/api/provider/'+formData.id,
                data: formData
                });
        });
      });
    
      $(document).ready(function (response) {
        $(".TransactionDelete").submit(function (event) {
            debugger
          event.preventDefault();
          var formData = {
            id: $("#id_deleted").val(),
          };
            $.ajax({
                type: 'DELETE',
                processData: false,
                contentType: 'application\json',
                url: 'http://127.0.0.1:8000/api/transaction/'+formData.id,
                data: formData
                });
        });
      });