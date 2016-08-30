export default {
  addFavorite: function (data) {
  const fetchSettings = {
    method: 'PATCH',
    body: JSON.stringify(data)
  }
  console.log(data);
  return fetch('https://final-project-db431.firebaseio.com/favorites.json', fetchSettings).then(res => {
    return res.json();
  })
},
  getAll: function () {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://final-project-db431.firebaseio.com/favorites.json', fetchSettings).then(res => {
      return res.json();
    })
  }
}
