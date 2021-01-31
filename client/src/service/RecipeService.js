export default {
  getRecipes: () => fetch('/api/user/recipes',
    {
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { message: { msgBody: 'UnAuthorized' }, msgError: true };
    }),

  postRecipe: (recipe) => fetch('/api/user/recipes',
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

  postAllRecipes: (recipe) => fetch('/api/all-recipes',
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

  getAllRecipes: () => fetch('/api/all-recipes',
    {
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { message: { msgBody: 'UnAuthorized' }, msgError: true };
    }),
};
