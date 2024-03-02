//  g =3

// if(g<5){
//     document.body.innerHTML += `<script src = "index.js"></script>" `
// }

//the index is for creating and storing the variables, while script is for fetching the stored data 
//and using it to represent the data

function loadScript(src, callback) {
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.async = true;
    newScript.src = src;

    if (newScript.readyState) {
        newScript.onreadystatechange = function () {
            if (/loaded|complete/.test(newScript.readyState)) {
                callback();
            }
        };
    } else {
        newScript.addEventListener('load', callback, false);
    }

    document.documentElement.firstChild.appendChild(newScript);
}

if (3==3) {
    loadScript('index.js', function () {
        console.log("index loaded")
        // Code to execute after lulz.js is loaded
        // ...
    });
} else {
    loadScript('script.js', function () {
        console.log("script loaded")
        // Code to execute after other_lulz.js is loaded
        // ...
    });
}

