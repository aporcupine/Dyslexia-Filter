
// Use of this source code is governed by a GNU-style license that can be
// found in the LICENSE file.

var overlay = document.createElement("div");
chrome.storage.sync.get('color', function(data){
  var color = 'lime';
  if ('color' in data) {
    color = data.color;
  }
  var style_string = 'height: 100%;' +
                     'width: 100%;' +
                     'background-color:' + color + ';' +
                     'z-index: 2000000000;' +
                     'position: fixed;' +
                     'left: 0;' +
                     'top: 0;' +
                     'opacity:0.2;' +
                     'pointer-events: none;';
  overlay.setAttribute('style', style_string);
  });

overlay.setAttribute("id", "dyslexia_filter_overlay");
document.body.appendChild(overlay);

chrome.storage.onChanged.addListener( function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    if (key === 'color') {
      var overlay = document.getElementById('dyslexia_filter_overlay');
      overlay.style.background = storageChange.newValue;
    }
  }
});