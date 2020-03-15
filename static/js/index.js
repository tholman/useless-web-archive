// function applyCanvasStyles() {
//   const firstColor = ["#fed96a", "#fff"];
//   const otherColors = ["#f9f9f9", "#fff"];

//   const canvii = document.querySelectorAll("canvas");

//   [...canvii].forEach((canvas, index) => {
//     let thisColorSet;
//     if (index === 0) {
//       thisColorSet = firstColor;
//     } else {
//       if (index % 2 === 0) {
//         thisColorSet = otherColors;
//       } else {
//         thisColorSet = [otherColors[1], otherColors[0]];
//       }
//     }

//     const context = canvas.getContext("2d");
//     canvas.height = 300;
//     const baseWidth = 20;
//     const remainingWidth = window.innerWidth % baseWidth;
//     const totalItems = Math.floor(window.innerWidth / baseWidth);
//     let fullWidth = Math.floor(baseWidth + remainingWidth / totalItems);
//     canvas.width = totalItems * fullWidth * 2;
//     fullWidth = fullWidth * 2;

//     context.fillStyle = thisColorSet[1];
//     context.fillRect(0, 0, canvas.width, canvas.height);

//     for (var i = 0; i < totalItems; i++) {
//       context.beginPath();
//       const odd = i % 2 === 0 ? 1 : -1;

//       const newHeight = canvas.height / 2 + odd * Math.random() * 55;

//       context.fillStyle = thisColorSet[0];
//       context.fill();
//       context.fillRect(i * fullWidth, 0, fullWidth, newHeight);

//       if (odd === -1) {
//         context.fillStyle = thisColorSet[1];
//       }
//       context.arc(
//         i * fullWidth + fullWidth / 2,
//         newHeight,
//         fullWidth / 2,
//         0,
//         2 * Math.PI
//       );
//       context.fill();
//     }
//   });
// }

// applyCanvasStyles();
// window.onresize = applyCanvasStyles;

// let callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       let imgHolder = entry.target.querySelectorAll("noscript");

//       // If the image isn't displayed, display it
//       if (imgHolder[0]) {
//         const imgItem = document.createElement("span");
//         imgItem.innerHTML = imgHolder[0].innerText;

//         const imgItem2 = document.createElement("span");
//         imgItem2.innerHTML = imgHolder[0].innerText;

//         imgHolder[0].parentNode.replaceChild(imgItem, imgHolder[0]);
//         imgHolder[1].parentNode.replaceChild(imgItem2, imgHolder[1]);
//       }

//       observer.unobserve(entry.target);
//     }
//   });
// };

// let observer = new IntersectionObserver(callback, {
//   rootMargin: "0px 0px 400px 0px"
// });

// let targets = document.querySelectorAll(".inner-wrapper");
// targets.forEach(target => {
//   observer.observe(target);
// });
