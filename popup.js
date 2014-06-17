
// Use of this source code is governed by a GNU-style license that can be
// found in the LICENSE file.

function addButtonListener() {
  var color = this.getAttribute('data-color');
  chrome.storage.sync.set({'color': color}, function() {
    // Notify that we saved.
    console.log('Color updated to: ' + color);
  });
}

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', addButtonListener);
    }
});