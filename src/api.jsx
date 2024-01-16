const Api = (request, response) => {
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toGMTString(),
  });

  return { request, response };
};

export default Api;
