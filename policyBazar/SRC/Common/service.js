import axios from 'axios';

export default async function getUSerData(pageNo, pageData) {
  console.log('pageNO.', pageNo, 'pageData', pageData);
  let res = await axios.get(
    `https://reqres.in/api/users?page=${pageNo}&per_page=${pageData}`,
  );
  console.log('Data value check for api hit', res);
  return res;
}
