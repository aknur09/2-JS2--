// const today=document.querySelector("#today")
// const plans=document.querySelector("#plans")
// const btns=document.querySelectorAll("button")
// const input=document.querySelector('input')

// function createTask(title, callback) {
//     //<li></li>
//     const liTag=document.createElement('li')
//     //<li>Buy ahouse</li>
//     liTag.innerHTML=title

//     //addPlans(<li>Buy ahouse</li>)
//     callback(liTag)

// }

// function addPlans(task){
//     plans.appendChild(task)
// }


// btns[1].onclick=()=>{
//     if(input.value.trim().length>0){
//         createTask(input.value, addPlans)
//     input.value=''
//     input.style="none"
//     }else{
//         input.style.borderColor="red"
//     }
   
// }


// btns[0].onclick=()=>{
//     if(input.value.trim().length>0){
//         createTask(input.value, function(jumush){
//             today.appendChild(jumush)
//          }       )
//     input.style="none"
//     }else{
//         input.style.borderColor="red"
//     }
   
// }

// const women=["Anna", "Sveta", 'Katya', 'Emma'  ]

// const men=[ 'Vova', 'Jenbeek', 'Nur Ali', 'Adyl',    ]

// //rest, spread


// console.log(women.concat(men));

// const all=[...women, 'Sasha', ...men]
// console.log(all);

// const stName=['Aknur']
// const bukvy=[...stName]
// console.log(stName);

//палиндром - слово или фраза , которые одинаково читаются слева направо и справа налево
//примеры:  заказ , шалаш ,  дед,  Анна и.т.д.

//шалаш
//дерево

function palindrom(str) { //str - строк - string
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(palindrom('шалаш'));

console.log(palindrom('дерево'));

console.log(palindrom('Анна'));

console.log(palindrom('заказ'));

console.log(palindrom('эже'));

console.log(palindrom('дед'));





