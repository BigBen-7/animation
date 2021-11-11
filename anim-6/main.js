let upg = document.getElementById('upg');
let ing = document.getElementById("ing");
let dvfr = document.querySelector('.form');

let f1 = document.getElementById('f1');
let f2 = document.getElementById('f2');

upg.onclick = function() {
    dvfr.classList.add("formin")
    f2.classList.add("fbup")
    f1.classList.add('fain')
    document.body.classList.add('bodyup')

}
ing.onclick = function() {
    dvfr.classList.remove("formin")
    f2.classList.remove("fbup")
    f1.classList.remove('fain')
    document.body.classList.remove('bodyup')
}


//virefication de formulaire in 
let subin = document.getElementById('subin')
let list_in = document.querySelectorAll("#emailin ,#passin")
let vrfin = false;
subin.disabled = true
list_in.forEach(function vrification(ele) {
    ele.onkeyup = function() {
        if (ele.value === "" || ele.value.length < 8) {
            ele.onblur = function() {
                this.style.borderColor = "red"
            }
            vrfin = true
        } else {
            ele.onblur = function() {
                this.style.borderColor = "#777"
            }
            vrfin = false
        }
        subin.disabled = vrfin
    }
    ele.onfocus = function() {
        this.style.borderColor = "#777"
    }
})
//virefication de formulaire up 
let passup1 = document.getElementById("passup1")
let passup2 = document.getElementById("passup2")
let subup = document.getElementById('subup')
let list_up = f2.querySelectorAll("#nameup,#emailin ,#passup1,#passup2")
let list_pass = [passup1.value, passup2.value]
let vrfup = false;
subup.disabled = true
list_up.forEach(function vrification(ele, index) {
    ele.onkeyup = function() {

        if (ele.value === "" || ele.value.length < 8) {
            ele.onblur = function() {
                this.style.borderColor = "red"
            }
            vrfup = true
        } else {
            ele.onblur = function() {
                this.style.borderColor = "#777"
            }
            vrfup = false
        }
        if (index == list_up.length - 1) {
            ele.addEventListener("blur", function() {
                let ps = !(passup1.value == passup2.value)
                vrfup = ps
                if (ps) {
                    ele.placeholder = "The Password Not Coreuct !!"
                    ele.value = ""
                }
            })

        }
        subup.disabled = vrfup
    }
    ele.onfocus = function() {
        this.style.borderColor = "#777"
    }
})