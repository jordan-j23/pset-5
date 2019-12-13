window.onload = function() {
    document.getElementById("hello").onclick = sayHelloStaff;
    document.getElementById("rectangle").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle").onclick = drawTriangleStaff;
    document.getElementById("smile").onclick = drawFaceStaff;
    document.getElementById("pyramid").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    
