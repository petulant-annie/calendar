export const sendTask = async (
  data: {
    duration: number,
    user: string,
    start: string,
    title: string,
  }) => {
  try {
    const res = await fetch('http://localhost:3030/', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};
