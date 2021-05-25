// create variable for first-html
var textInput = document.querySelector('#textInput');
var select = document.querySelector('#selectFormat');
var clickmeBtn = document.querySelector(".btn-primary");

// var resultUrl = 'results.html';

// var requestUrl = 'https://www.loc.gov/search/?q=baseball&fo=json';
// var userSearch = document.querySelector('#selectFormat').value;
// // var userForm = 


// var formSubmitHandler = function (event) {
//     event.preventDefault();
// }

// fetch(badRequestUrl).then(function (response) {
//     // Check the response value is equal to 404.
//     if (response.status === 404) {
//       // If the page is not on the 404 page, redirect to it.
//       document.location.replace(redirectUrl);
//     } else {
//       return response.json();
//     }
//   });

// var getUserRepos = function (userSearch) {
//     var apiUrl = photoUrl + userSearch;
  
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//             displayRepos(data, userSearch);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to GitHub');
//       });
//   };
