const BASE_URL = import.meta.env.VITE_API_URL;

const apiUrl = {
  api: {
    jobs: {
      postings: `${BASE_URL}/api/jobs/job-posting/`,
      detail: (jobId: string) => `${BASE_URL}/api/jobs/job-posting/${jobId}/`,
    },
    schema: `${BASE_URL}/api/schema/`,
  },
  users: {
    list: `${BASE_URL}/users/`,
    detail: `${BASE_URL}/users/user/`,
    logout: `${BASE_URL}/users/logout/`,
    passwordReset: `${BASE_URL}/users/password-reset/`,
    token: `${BASE_URL}/users/token/`,
    tokenRefresh: `${BASE_URL}/users/token/refresh`,
    register: `${BASE_URL}/users/register/`,
    login: `${BASE_URL}/users/token/`,
    refresh: `${BASE_URL}/users/token/refresh/`,
  },
};

export default apiUrl;
