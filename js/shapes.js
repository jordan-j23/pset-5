window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

// exercise 1

const sayHello = function() {
  const canvas = document.getElementById("student-canvas-1");
  const ctx = canvas.getContext("2d");

  let text = prompt("Message:");

if (text === null) {
  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}

  while (text.height > 50) {
    alert("Your message is too long. Keep it under 50 characters.");
    text = prompt("Message:");
  }

  ctx.font = "48px Sans-serif";
  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
  ctx.strokeText(text, 30 , 70, canvas.width - 30);

};

// exercise 2

const drawRectangle = function() {

    let canvas = document.getElementById("student-canvas-2");
    let ctx = canvas.getContext("2d");

    let width = prompt("Width:");
    let height = prompt("Height:");
    let x = prompt("X:");
    let y = prompt("Y:");
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);

    ctx.strokeRect(x , y , width , height);

    if (x === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (y === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (width === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if (height === null) {
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    }

    if ((width + x) > canvas.width) {
      alert("Your width must be between 1 and 1024.");
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
      width = prompt("Width:");
      height = prompt("Height:");
      x = prompt("X:");
      y = prompt("Y:");
    }

    if ((height + y) > canvas.height) {
      alert("Your width must be between 1 and 1024.");
      ctx.clearRect(0 , 0 , canvas.width , canvas.height);
      width = prompt("Width:");
      height = prompt("Height:");
      x = prompt("X:");
      y = prompt("Y:");
    }
};

// exercise 3

const drawColoredRectangle = function() {

  let canvas = document.getElementById("student-canvas-3");
  let ctx = canvas.getContext("2d");

  let color = prompt("Color:");

if (color != null) {
    color = color.toLowerCase();
}

  ctx.clearRect(0 , 0 , canvas.width , canvas.height);

  switch (color) {
      case "black":
        ctx.fillStyle = "black";
        ctx.fillRect(10, 10, 100, 50);
          break;
      case "blue":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "blue";
       ctx.fill();
          break;
      case "green":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "green";
       ctx.fill();
          break;
      case "orange":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "orange";
       ctx.fill();
          break;
      case "purple":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "purple";
       ctx.fill();
         break;
      case "red":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "red";
       ctx.fill();
         break;
      case "yellow":
       ctx.rect(10 , 10 , 100 , 50);
       ctx.fillStyle = "yellow";
       ctx.fill();
         break;
      case null:
        ctx.clearRect(0 , 0 , canvas.width , canvas.height);
        break;
      default:
        alert(color + " is not a supported color.");
        text = prompt("Color:");
          break;
  }

};

// exercise 4

const drawTriangle = function() {
  let canvas = document.getElementById("student-canvas-4");
  let ctx = canvas.getContext("2d");

  var s1 = prompt("Side 1:");
    var s2 = prompt("Side 2:");
    var s3 = prompt("Side 3:");
    var height = Math.min(s1, s2, s3);
    var hypotenuse= Math.max(s1, s2, s3) ;
    var base = Number(s1) + Number(s2) + Number(s3) - hypotenuse- height;


  if (Math.sqrt(Math.pow(height, 2) + Math.pow(base, 2)) != Math.sqrt(Math.pow(hypotenuse, 2))) {
    alert("That's not a right triangle.");
    height = prompt("Side 1:");
    base = prompt("Side 2:");
    hypotenuse = prompt("Side 3:");
  } else if ((base + 25) > canvas.width || (height + 25) > canvas.height) {
      alert("Your triangle won't fit on the canvas.");
      height = prompt("Side 1:");
      base = prompt("Side 2:");
      hypotenuse = prompt("Side 3:");
  } else {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    ctx.beginPath();
    ctx.moveTo(25 , 25);
    ctx.lineTo(25 , 25 + height);
    ctx.lineTo(25 + base , 25 + height);
    ctx.lineTo(25 , 25);
    ctx.stroke();
  }

};

// exercise 5

const drawFace = function() {
  let canvas = document.getElementById("student-canvas-5");
  let ctx = canvas.getContext("2d");

  let radius = prompt("Radius:");

  if (radius === null) {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
  }

  if (radius > canvas.height / 2) {
    alert("Your smiley face won't fit on the canvas.");
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    radius = prompt("Radius:");
  } else if (radius < 32) {
    alert("Your radius must be at least 32.");
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    radius = prompt("Radius:");
  } else if (radius.isNaN) {
    alert("Your radius is not a number.");
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    radius = prompt("Radius:");
  }

  ctx.clearRect(0 , 0 , canvas.width , canvas.height);
  ctx.beginPath();
    ctx.arc(canvas.width / 2 , canvas.height / 2 , radius , 0 , Math.PI * 2);
    ctx.moveTo((canvas.width / 2 - 0.4 * radius + 0.15 * radius), (canvas.height / 2 - 0.4 * radius));
    ctx.arc((canvas.width / 2 - 0.4 * radius), (canvas.height / 2 - 0.4 * radius) , (0.15 * radius) , 0 , Math.PI * 2);
    ctx.moveTo((canvas.width / 2 + radius * 0.4 + radius * 0.15) , (canvas.height / 2 - 0.4 * radius));
    ctx.arc(canvas.width / 2 + 0.4 * radius , canvas.height / 2 - 0.4 * radius, 0.15 * radius , 0 , Math.PI * 2);
    ctx.moveTo((canvas.width / 2 + 0.7 * radius) , (canvas.height / 2));
    ctx.arc((canvas.width / 2) , (canvas.height / 2) , (0.7 * radius) , 0 , Math.PI);
    ctx.stroke();

};


// exercise 6

// const drawPyramid = function() {
//   let canvas = document.getElementById("student-canvas-6");
//   let ctx = canvas.getContext("2d");

//   let radius = prompt("Radius:");
};
