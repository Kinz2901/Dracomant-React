async function Api(request, response) {
  const dynamicDate = new Date();

  const resposta = await response.json({
    date: dynamicDate.toGMTString(),
  });

  return { resposta };
};

export default Api;
