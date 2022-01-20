function getHistory() {
    return document.getElementById("historic").innerText;
}
function printHistory(num) {
     document.getElementById("historic").innerText=num;

}
function getOutput() {
    return document.getElementById("out").innerText;
}
function printOutput(num) {
    if(num=="") {
    document.getElementById("out").innerText=num;
    }
    else
     { document.getElementById("out").innerText=getFormattedNumber(num);
     }
}
function getFormattedNumber(num) {
    var n=Number(num);
    if(num=="-") {
    return ""; }
    var v = n.toLocaleString("en");
    return v;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++) {
    operator[i].addEventListener('click',klickop);
    // document.addEventListener('keydown',keyboard);
}
// function keyboardop(event) {
//     pressop(event);
// }
function klickop() {
    if(this.id=="clear") {
        printHistory("");
        printOutput("");
    }
    else if(this.id=="backspace") {
        var output=reverseNumberFormat(getOutput()).toString();
        if(output) {
            output=output.substr(0,output.length-1);
            printOutput(output);
        }
    }
    else {
        var output=getOutput();
        var history=getHistory();
        if(output==""&&history!="") {
            if(isNaN(history[history.length-1])) {
                history=history.substr(0,history.length-1);
            }
        }
        if(output!="" || history!="") {
            output= output==""?output:reverseNumberFormat(output);
            history=history+output;
            if(this.id=="=") {
                var result =eval(history);
                printOutput(result);
                printHistory("");
            }
            else {
                history=history+this.id;
                printHistory(history);
                printOutput("");
            }
        }
    }
    }
// function pressop(event) {
//     if(event.keyCode==46) {
//         printHistory("");
//         printOutput("");
//     }
//     else if(event.keyCode==8) {
//         var output=reverseNumberFormat(getOutput()).toString();
//         if(output) {
//             output=output.substr(0,output.length-1);
//             printOutput(output);
//         }
//     }
//     else {
//         var output=getOutput();
//         var history=getHistory();
//         if(output==""&&history!="") {
//             if(isNaN(history[history.length-1])) {
//                 history=history.substr(0,history.length-1);
//             }
//         }
//         if(output!="" || history!="") {
//             output= output==""?output:reverseNumberFormat(output);
//             history=history+output;
//             if(event.keyCode==13) {
//                 var result =eval(history);
//                 printOutput(result);
//                 printHistory("");
//             }
//             else {
//                 history=history+event.key;
//                 printHistory(history);
//                 printOutput("");
//             }
//         }
//     }
// }


var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++) {
    number[i].addEventListener('click',klick);
    document.addEventListener('keydown',keyboard);
}
function klick() {
    var output= reverseNumberFormat(getOutput());
    if(output!=NaN) {
        output=output+this.id;
        printOutput(output);
    }
}
function keyboard(event) {
    
    // if(event.key!=NaN && event.keyCode!=8 && event.keyCode!=46 && event.keyCode!=13 && event.keyCode!=109 && event.keyCode!=107 && event.keyCode!=106 && event.keyCode!=111)
    press(event.key);
    // else {
    // pressop(event);}
}
function press(currentKey) {
    var s = currentKey.toString();
    var output= reverseNumberFormat(getOutput());
    if(output!=NaN) {
        output=output+currentKey;
        printOutput(output);
    }
}