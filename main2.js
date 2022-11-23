function GetOrdersByPayed(){
$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:8000/api/ordersp",
    dataType: "json"
  }).done(function(response) {
    let ordersDiv = $("#ordersbypayed");
    console.log(response.data);
    $.each(response.data, function(i, order) {
      ordersDiv.append('<p> Status ' + order.status + '</p>');
      $.each(order.products, function(i, orderProduct) {
        console.log(orderProduct);
        ordersDiv.append('<p>' + orderProduct + '</p>');
      });
    });
  });
});
}
function GetOrdersByNotPayed(){
  $(document).ready(function () {
    $.ajax({
      url: "http://127.0.0.1:8000/api/ordersn",
      dataType: "json"
    }).done(function(response) {
      let ordersDiv = $("#ordersbynotpayed");
      console.log(response.data);
      $.each(response.data, function(i, order) {
        ordersDiv.append('<p> Status ' + order.status + '</p>');
        $.each(order.products, function(i, orderProduct) {
          console.log(orderProduct);
          ordersDiv.append('<p>' + orderProduct + '</p>');
        });
      });
    });
  });
  }
function GetProducts(Type){
$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:8000/api/products?Type="+Type,
    dataType: "json"
  }).done(function(response) {
    let ProductsDiv = $("#products");
    console.log(response.data);
    $.each(response.data, function(i, product) {
        ProductsDiv.append('<p>' + product.Type + '</p>');
      $.each(product.providers, function(i, providerProduct) {
        console.log(providerProduct);
        ProductsDiv.append('<p>' + providerProduct + '</p>');
      });
    });
  });
});
}
function GetProviders(){
$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:8000/api/providers",
    dataType: "json"
  }).done(function(response) {
    let ProvidersDiv = $("#providers");
    console.log(response.data);
    $.each(response.data, function(i, provider) {
        ProvidersDiv.append('<p>' + provider.id + '</p>');
        ProvidersDiv.append('<p>' + provider.provider_name + '</p>');
    //   $.each(provider.providers, function(i, providerProviders) {
    //     console.log(providerProviders);
    //     ProvidersDiv.append('<p>' + providerProviders + '</p>');
    //   });
    });
  });
});
}
function GetTransactions(){
$(document).ready(function () {
    $.ajax({
      url: "http://127.0.0.1:8000/api/transactions",
      dataType: "json"
    }).done(function(response) {
      let OrdersDiv = $("#transactions");
      console.log(response);
      $.each(response.data, function(i, transaction) {
        OrdersDiv.append('<p>' + transaction.id + '</p>');
        $.each(transaction.products, function(i, tranProduct) {
          console.log(tranProduct);
          OrdersDiv.append('<p>' + tranProduct + '</p>');
          $.each(tranProduct.orders, function(i, tranOrder) {
            console.log(tranOrder);
            OrdersDiv.append('<p>' + tranOrder + '</p>');
          });
        });
      });
    });
  });
}