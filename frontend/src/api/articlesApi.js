import * as domains from './domain';

const axios = require('axios');

export default {
  getAllArticles() {
    const instWithCred = axios.create({
      baseURL: domains.POSTS,
    });
    return instWithCred.get('getArticles');
  },
  addNewPost(form) {
    const instWithCred = axios.create({
      baseURL: domains.POSTS,
    });
    return instWithCred.post('newArticle', { form });
  },
  deleteArticle(id) {
    const instWithCred = axios.create({
      baseURL: domains.POSTS,
    });
    return instWithCred.delete(`deleteArticle/?id=${id}`);
  },
};
