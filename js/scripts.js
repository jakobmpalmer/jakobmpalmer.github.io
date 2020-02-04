var descriptors = ["Software Engineer", "Archivist", "Tech Enthusiast", "Animal Lover"];

function getString(){
    var currentDesc = document.getElementById('string-descriptor');
    currentDesc = descriptors[Math.random() * descriptors.length];
}

function textSlide(){
    //alert("TextSlide");
    var currentString = document.getElementById('stringDescriptor');
    var newString = currentString.innerHTML.valueOf();
    alert(newString + " ..")
    
    var stringWidth = (newString.clientWidth + 1) + "px";

    anime({targets: currentString,
    duration: 2000,
    translateX: screen.width/2 - stringWidth /2,});
}

//function beginTextSlide(){
if(requestIdleCallback in window){
    alert("callback");
    setInterval(textSlide(), 10000)
} else {
    //alert("No support for callback!");
    setTimeout(textSlide(), 10);
}
// $(document).ready(() => {
// 	anime({
// 		targets: 'div.boxGroup',
// 		translateY: [
// 			{value: 200, duration: 1000},
// 			{value: 100, duration: 800},
// 			{value: 200, duration: 2500},
// 			{value: 0, duration: 2000}, 
// 		],
// 		rotateX: '360deg',
// 		loop: true,
// 		easing: 'easeOutElastic',
// 		width: 110,
// 		delay: function(el, i, l) {return i * 1000}
// 	});
// });


anime({targets: '#box', 
    duration: 2000, 
    translateX: 300,     
});