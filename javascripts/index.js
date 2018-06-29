function onSearch(evt) {
  evt.preventDefault();
  console.log(document.querySelector('input').value);
  let url = new URL(
    'https://runtime.adobe.io/api/v1/web/smacdona/default/runtime'
  );
  url.search = new URLSearchParams({
    q: document.querySelector('input').value
  });
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log('got a response');
      updateUI(json);
    });
}

function updateUI(data) {
  const results = document.querySelector('.results-control');
  let images = '';
  data.files.forEach(entry => {
    images = images + entry.thumbnail_html_tag;
  });
  results.innerHTML = images;
}

function onLoad() {
  console.log('loaded');
  document.querySelector('button').addEventListener('click', onSearch, true);
}
