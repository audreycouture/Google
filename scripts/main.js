			


document.querySelector('demo1').onclick = function() {
    alert('Aïe, arrêtez de cliquer !!');
}

let monImage = document.querySelector('demo1');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/firefox-icon.png') {
      monImage.setAttribute ('src','images/firefox2.png');
    } else {
      monImage.setAttribute ('src','images/firefox-icon.png');
    }
}
