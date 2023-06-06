const handleUsername = () => {

  const foodArray = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Tacos'];
  const directionArray = ['North', 'South', 'East', 'West'];
  const countryArray = ['USA', 'Canada', 'India', 'Australia', 'Germany'];

  const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const getRandomUsername = () => {
    const food = getRandomElement(foodArray);
    const direction = getRandomElement(directionArray);
    const country = getRandomElement(countryArray);

    return `${food}${direction}${country}`;
  }

  const getRandomUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const storedUserInfo = localStorage.getItem("fsgUserData");

  if (!storedUserInfo) {
    const username = getRandomUsername();
    const uuid = getRandomUUID();

    const userInfo = { username, uuid };
    localStorage.setItem("fsgUserData", JSON.stringify(userInfo));
  }
};

export default handleUsername;