const saveData = async (jsonBody) => {
  const data = await fetch(`/api/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonBody),
  });
  return data;
};

const updateData = async (jsonBody) => {
  const data = await fetch(`/api/user`, {
    method: "PUT",
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

const getUserById = async (id) => {
  const data = await fetch(`/api/user/${id}`)
  return await data.json();
}


const deleteUser = async (id) => {
  const data = await fetch(`/api/user/${id}`, {method: "DELETE"})
  return await data.json();
}


export { saveData, getAllUsers, getUserById, updateData, deleteUser };
