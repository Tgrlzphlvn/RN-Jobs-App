const mainURL = `https://www.themuse.com/api/public`;
const pageURL = '/jobs?page=';
const jobsURL = `${mainURL}/jobs/`;
const companyURL = `${mainURL}/companies/`;
const coachURL = `${mainURL}/coaches/`;

const UrlManager = (num, queryParameter, isPage) => {
  if (isPage) {
    return `${mainURL}/${queryParameter}${num}`;
  } else {
    return `${mainURL}/${queryParameter}`;
  }
};

export {pageURL, jobsURL, companyURL, coachURL, UrlManager};
