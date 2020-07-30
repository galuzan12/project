const aObj = document.getElementsByTagName('a');
for (let i = 0; i < aObj.length; i++) {
    if (aObj[i].href.includes('xxx')) aObj[i].href += '?test=true';
}
