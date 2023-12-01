const getItems = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Access-Key': '$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy0VcOnlcWDM.Oh9CT4o1QxvuFq',
      'X-JSON-Path': '$.items[*]',
      'X-Bin-Meta': false,
    },
  });

  return await res.json();
};

const testAPI = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    // headers: {
    //   'X-Access-Key': '$2b$10$wh.K0go7oYuH93pP1amFBupx4yjy
    // }
    
  });

  return await res.json();
  // return 'hello world!';
}

export { getItems, testAPI };
