export default {
  login: (user) => fetch('/api/user/login',
    {
      method: 'post',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { isAuthenticated: false, user: { username: '' } };
    }),

  register: (user) => fetch('/api/user/register',
    {
      method: 'post',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .then((data) => data),

  logout: () => fetch('/api/user/logout',
    {
      withCredentials: true,
      credentials: 'include',
    })
    .then((res) => res.json())
    .then((data) => data),

  isAuthenticated: () => fetch('/api/user/authenticated',
    {
      withCredentials: 'true',
      credentials: 'include',
    })
    .then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      return { isAuthenticated: false, user: { username: '' } };
    }),
};
