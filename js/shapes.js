window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = hello;
    document.getElementById("rectangle").onclick = rectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

const hello = function() {
  let hello = document.getElementById("student-canvas-1");
  let ctx = hello.getContext("2d");
  ctx.clearRect(0, 0, hello.width, hello.height);
  let msg = null;
  let run = true;
  while (run == true) {
    msg = window.prompt("Message:");
    if (msg.length > 50) {
      alert("Your message is too long. Please enter another message under 50 characters.");
    } else {
      run = false
    }
  }
  msg.width = 1024;
  ctx.font = "48px sans-serif";
  ctx.strokeText(msg, 30, 70, 994);
};

const rectangle = function() {
  let rectangle = document.getElementById("student-canvas-2");
  let ctx = rectangle.getContext("2d");
  ctx.clearRect(0, 0, rectangle.width, rectangle.height);
  let run = true;
  let rectWid;
  let rectHeight;
  let rectx;
  let recty;
  while(run == true) {
    rectWid = window.prompt("Width:");
    rectHeight = window.prompt("Height:");
    rectx = window.prompt("x:");
    recty = window.prompt("y:");
      if (rectWid == null || rectHeight == null || rectx == null || recty == null) {
        rectWid = null;
        rectHeight = null;
        rectx = null;
        recty = null;
        run = false;
    } else if (isNaN(rectWid) == true || isNaN(rectHeight) == true || isNaN(rectx) == true || isNaN(recty) == true) {
      alert("One of your values is not a number.");
    } else if(rectWid > 1024 || rectWid < 1) {
      alert("Your width must be between 1 and 1024.");
    } else if(rectHeight > 512 || rectHeight < 1) {
      alert(("Your height must be between 1 and 512."));
    }  else if(rectx > 1024 || rectx < 1) {
      alert("Your x-coordinate must be between 1 and 1024.");
    } else if(recty > 512 || recty < 1) {
      alert("Your y-coordinate must be between 1 and 512.");
    } else if ((Number(rectx) + Number(rectWid)) > 1024 || (Number(recty) + Number(rectHeight)) > 512) {
      alert("Your rectangle won't fit on the canvas.");
    } else {
      run = false;
    }
  }
    ctx.beginPath();
    ctx.rect(rectx, recty, rectWid, rectHeight);
    ctx.stroke();
};

const drawColoredRectangle = function() {
  let rect = document.getElementById("student-canvas-3");
  let colored = rect.getContext("2d");
  colored.clearRect(0, 0, rect.width, rect.height);
  let run = true;
  let color = null;
  while (run == true){
    color = window.prompt("Color: ");
    color = color.toLowerCase();
    color = color.trim();
    switch (color){
      case "black":
        colored.fillStyle = color;
        run = false;
        break;
      case "blue":
        colored.fillStyle = color;
        run = false;
        break;
      case "orange":
        colored.fillStyle = color;
        run = false;
        break;
      case "green":
        colored.fillStyle = color;
        run = false;
        break;
      case "purple":
        colored.fillStyle = color;
        run = false;
        break;
      case "yellow":
        colored.fillStyle = color;
        run = false;
        break;
      case "red":
        colored.fillStyle = color;
        run = false;
        break;
      case null:
        run = false;
        break;
      default:
        alert(color + " is not a supported color.");
        break;
    }
  }
  if(color != null){
  colored.beginPath();
  colored.rect(10, 10, 100, 50);
  colored.fill();
}
};

const drawTriangle = function() {
  let triangle = document.getElementById("student-canvas-4");
    let ctx = triangle.getContext("2d");
    ctx.clearRect(0, 0, triangle.width, triangle.height);
    let run = true;
    while(run == true){
      let side1 = window.prompt("Side 1:");
      let side2 = window.prompt("Side 2:");
      let side3 = window.prompt("Side 3:");
      (side3 >= side2)? side3 = side3 : side3 = side2;
      (side3 >= side1)? side3 = side3 : side3 = side1;
      (side2 >= side1)? side2 = side2 : side2 = side1;
      if(Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
        alert("One of your sides is not a number.");
      } else if(side3 == null || side2 == null || side1 == null){
        run = false;
      } else if(side1 > 1024 || side1 < 1 ||side2 > 1024 || side2 < 1 || side3 > 1024 || side3 < 1){
        alert("Your side lengths must be between 1 and 1024.");
      } else if ((25 + Number(side2)) > 1024 || (Number(side1)+25) > 512){
        alert("Your triangle won't fit on the canvas.");
      } else if(side3*side3 != side1 * side1 + side2*side2) {
        alert("That's not a valid right triangle.");
      } else {
        ctx.beginPath();
        ctx.moveTo(25,25);
        ctx.lineTo(25,(25+Number(side1)));
        ctx.lineTo((25+Number(side2)), (25+Number(side1)));
        ctx.lineTo(25,25);
        ctx.stroke();
        run = false;
      }
    }
  };

  const drawFace = function() {
    const canvas = document.getElementById("student-canvas-5");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let radius = null;
    const centerHorizontal = canvas.width / 2;
    const centerVertical = canvas.height / 2;
    let run = true;
    while (run == true) {
        radius = window.prompt("Radius:");
        if (radius == null) {
            run = false;
        } else if (Number.isNaN(Number(radius))) {
            window.alert("Your radius is not a number.");
        } else if (Number(radius < 32)) {
            window.alert("Your radius must be at least 32.");
        } else if (Number(radius) > centerVertical) {
            window.alert("Your smiley face won't fit on the canvas.");
        } else {
          run = false;
        }
    }

      ctx.beginPath();
      ctx.arc(centerHorizontal, centerVertical, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerHorizontal - (0.4 * radius), centerVertical - (0.4 * radius), 0.15 * radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerHorizontal + (0.4 * radius), centerVertical - (0.4 * radius), 0.15 * radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerHorizontal, centerVertical, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerHorizontal, centerVertical, 0.7 * radius, 0, Math.PI);
      ctx.stroke();
  };

const drawPyramid = function() {
  const canvas = document.getElementById('student-canvas-6');
  const ctx = canvas.getContext('2d');
  let spcBtwn = null;
  let height = null;
  let spcChange = null;
  let heightChange = null;
  let counter = 5;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var side = (prompt("Side: "));
    if (side == null) {
      break;
    }
    if (side < 1) {
      alert("Your block size must be at least 1.");
    }
    if (side >= 101) {
      alert("Your pyramid won't fit on the canvas");
    }
    if (isNaN(side)) {
      alert("Your block size is not a number.");
    }
  } while (isNaN(side) || side >= 101 || side < 1)

  for (i = 5; i > 0; i--) {
    counter = i
    while(counter >= 1) {
      ctx.beginPath();
      ctx.rect(10 + Number(spcBtwn), (502 - side) - Number(height), Number(side), Number(side));
      ctx.stroke();
      ctx.closePath();
      spcBtwn = (Number(spcBtwn) + Number(side));
      counter--;
    }
    spcChange ++;
    spcBtwn = spcChange * ((1/2) * side);
    heightChange ++;
    height = (heightChange * side);
  }
};
