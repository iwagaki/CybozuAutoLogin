if (document.title == 'ログイン - サイボウズ(R) Office') {
  chrome.storage.local.get([
    'cybozu_id',
    'password'
  ], function(items) {
    document.getElementsByName('_ID')[0].value = items['cybozu_id'];
    document.getElementsByName('Password')[0].value = items['password'];
    document.getElementsByName('Submit')[0].click();
  });
}
