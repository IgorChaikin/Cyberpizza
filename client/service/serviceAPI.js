const serviceAPI = {
  getDataAsync: async (url, query = {}) => {
    const params = Object.entries(query)
      .map((value) => `${value[0]}=${value[1]}`)
      .join('&');
    const response = await fetch(`/api${url}?${params}`, {
      method: 'GET',
    });
    const result = await response.json();
    return { data: result };
  },
  postOrder: async (id, time) => {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        time,
      }),
    });
    const result = await response.json();
    return { data: result };
  },
};

export default serviceAPI;
