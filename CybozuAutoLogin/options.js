function save_options() {
  chrome.storage.local.set({
    'cybozu_id': document.getElementById('cybozu_id').value,
    'password': document.getElementById('password').value
  }, function() {
    var status = document.getElementById('status');
    status.innerHTML = 'Options saved.';
    setTimeout(function() {
      status.innerHTML = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get([
    'cybozu_id',
    'password'
  ], function(items) {
    document.getElementById('cybozu_id').value = items['cybozu_id'];
    document.getElementById('password').value = items['password'];
  });
}

window.addEventListener('DOMContentLoaded', function(e) {
  restore_options();
  document.querySelector('#save').addEventListener('click', save_options);
}, false);
