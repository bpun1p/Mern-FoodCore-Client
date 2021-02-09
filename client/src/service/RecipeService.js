let currentPort;
const currentUrl = window.location.href;

if (currentUrl.includes('localhost')) {
  currentPort = 'http://localhost:5000';
} else {
  currentPort = '/api';
}
console.log(currentPort);
export default {
  getRecipes: () => fetch(`${currentPort}/user/recipes`,
    {
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { message: { msgBody: 'UnAuthorized' }, msgError: true };
    }),

  postRecipe: (recipe) => fetch(`${currentPort}/user/recipes`,
    {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { message: { msgBody: 'UnAuthorized' }, msgError: true };
    }),

  postAllRecipes: (recipe) => fetch(`${currentPort}/all-recipes`,
    {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { message: { msgBody: 'UnAuthorized' }, msgError: true };
    }),

  getAllRecipes: () => fetch(`${currentPort}/all-recipes`,
    {
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { message: { msgBody: 'UnAuthorized' }, msgError: true };
    }),
};
