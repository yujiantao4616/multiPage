
var storage_Key = "tianbao-key";
var storage_UKey = "tianbao-Ukey";
var storage_PKey = "tianbao-Pkey";

function fetchStorage () {
  return window.localStorage.getItem(storage_Key)
}

function saveStorage (value) {    // watch所监听的函数名称
  window.localStorage.setItem(storage_Key, value);
}

function fetchUStorage () {
  return window.localStorage.getItem(storage_UKey)
}

function saveUStorage (value) {    // watch所监听的函数名称
  window.localStorage.setItem(storage_UKey, value);
}

function fetchPStorage () {
  return window.localStorage.getItem(storage_PKey)
}

function savePStorage (value) {    // watch所监听的函数名称
  window.localStorage.setItem(storage_PKey, value);
}
