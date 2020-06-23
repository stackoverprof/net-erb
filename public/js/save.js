
setInterval(() => {
    xdoc('sendfood').value = foodscore;
    xdoc('sendrain').value = raincounter;
}, 10);
// function savescore(sel,e) {
//     e.preventDefault();
//     console.log(sel.value);
    
//     var selval = sel.value;
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if( xhr.readyState == 4 && xhr.status == 200){
//             prodiselecan.innerHTML = xhr.responseText;
//         }
//     }
//     xhr.open('GET', 'ajax/ajax.php?keyword=' + selectedVal + '&boolklas=' + boolklas, true);
//     xhr.send();


// }