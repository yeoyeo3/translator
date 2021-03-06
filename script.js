function translator(str) {
    return str.split('').map(function(char){
      var d = Hangul.disassemble(char);
      if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])) {
        var tmp = d[3];
        d[3] = d[2];
        d[2] = tmp;
      }
      return Hangul.assemble(d);
    }).join('');
};

//돔만 받았을때 시작한다?
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.change').addEventListener('click', function functionName() {
    var changedText = translator(document.querySelector('.original-text').value);
    document.querySelector('.result-text').innerText = changedText;
  });
});
