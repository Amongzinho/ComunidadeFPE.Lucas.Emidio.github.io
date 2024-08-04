function loadCharacter(file) {
  const container = document.getElementById('character-info-container');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', file, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      container.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}
