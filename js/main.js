// let url;
//      class Shutka {
//       // Конструктор
//       constructor(objImage) {
//         this.url = objImage[0];
//       }
//       // Функция создает строку таблицы
//       createDiv() {
//         let div = document.createElement('div');

//         let node = document.createElement('p');      
//           div.appendChild(node);
//         let nodes = this.url;
//         node.innerHTML=nodes;
//         let table = document.getElementById('main');
//         table.appendChild(div);
//       }
//     }
// // function getOrder(){
// //     let xr = new XMLHttpRequest();
// //     $.ajax({
// //       url:"http://127.0.0.1:8000/api/orders",
// //       type:"GET",
// //       data:{id :id  ,product_id:pro_id,status:status},
// //       success:function(data,statusText,jqXHR){
// //         alert(data);
// //       }
// //     });
// // }


//         function getImage() {
//       let xhr = new XMLHttpRequest();
//       xhr.open("GET", "http://127.0.0.1:8000/api/orders", true);
//       xhr.onload = function (e) {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             let images = [];
//             let rspns = JSON.parse(xhr.response);
//             for (var i = 0; i < rspns.data.length; i++) {
//               images[i] = new Shutka(rspns.data[i]);
//               images[i].createDiv();
//             //   images[i].getOrder()
//             }
//             console.log(xhr.responseText);
            
//           } else {
//             console.error(xhr.statusText);
//           }
//         }
// xhr.responseText;
//       };
//       xhr.onerror = function (e) {
//         console.error(xhr.statusText);
//       };

//       xhr.send(null); // При POST включается содержание запроса
//     }