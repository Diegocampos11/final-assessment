const saveData = async (jsonBody) => {
  const data = await fetch(`/api/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonBody),
  });
  return await data.json();
};

const getAllUsers = async () => {
  const data = await fetch(`/api/user/get_all`);
  return await data.json();
};

export { saveData, getAllUsers };
