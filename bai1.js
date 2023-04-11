var input  = document.querySelector('.input');
var operations = document.querySelectorAll('.operation btn');
var numbers = document.querySelectorAll('.number btn');

console.log(input)
console.log(operations)
console.log(numbers)



// console.log(operations[0].getAttribute('value'));

operations.forEach((o, index) => {
    o.onclick = function() {
        if(o.getAttribute('value') == '+') {
            input.innerHTML += '+';
        }
        if(o.getAttribute('value') == '-') {
            input.innerHTML += '-';
        }
        if(o.getAttribute('value') == '*') {
            input.innerHTML += '*';
        }
        if(o.getAttribute('value') == '/') {
            input.innerHTML += '/';
        }
        if(o.getAttribute('value') == '=') {

            var a = input.innerText;
            var ii = 0;
            var so = []
            var pheptinh = []
            var sotinh = '';
            a.split('').forEach((a,i) => {
                if (a != '+' && a !=  '-' && a !=  '*' && a !=  '/' ){
                    sotinh += a + '';
                }else {
                    so[ii] = Number(sotinh);
                    sotinh = "";
                    pheptinh[ii] = a;
                    ii++;
                }
                
            })
            so[ii] = Number(sotinh);
            console.log(so);
            console.log(pheptinh);
            var result = so[0];
            for(let i = 0; i < pheptinh.length; i++) {
                if(pheptinh[i] == "+") {
                    result += so[i + 1];
                }
                if(pheptinh[i] == "*") {
                    result *= so[i + 1];
                }
                if(pheptinh[i] == "-") {
                    result -= so[i + 1];
                }
                if(pheptinh[i] == "/") {
                    result /= so[i + 1];
                }
            }

            console.log(result);  
            input.innerHTML += "=" + result;      
        }
    }
})

numbers.forEach((num, index)=> {
    num.onclick= function() {
        input.innerHTML += index
    }
})