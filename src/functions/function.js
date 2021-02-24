function ajaxPost(url, data) {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          resolve(xmlhttp.responseText);
        } else {
          reject(xmlhttp);
        }
      }
    };
    xmlhttp.onerror = function (error) {
      reject(error);
    };
    xmlhttp.open('POST', url);
    xmlhttp.send(data);
  });
}
export default ajaxPost;
