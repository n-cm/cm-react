function getContent(file, encode = 'UTF-8') {
  return new Promise( (resolve, reject) => {
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, encode);
      reader.onload = function (evt) {
        resolve(evt.target.result);
      }
      reader.onerror = function (evt) {
        console.log("error reading file");
        reject()
      }
    } else {
      reject("No file selected")
    }
  })
}

export default {getContent}