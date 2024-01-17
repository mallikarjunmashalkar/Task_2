export const getAPI = async () => {
  const data = await fetch(
    "https://632dfb22b37236d2ebe44adf.mockapi.io/Task-1"
  );
  const userList = await data.json();
  console.log(userList);
  return userList;
};

export const postAPI = async () => {
  const data = await fetch(
    "https://632dfb22b37236d2ebe44adf.mockapi.io/Task-1"
  );
  const userList = await data.json();
  console.log(userList);
  return userList;
};
