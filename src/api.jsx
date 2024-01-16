const Api = (request, response) => {
  const dynamicDate = new Date();

  const resposta = response.json({
    date: dynamicDate.toGMTString(),
  });

  return { resposta };
};

export default Api;
