import { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);


  const parseLocalStorage = JSON.parse(localStorage.getItem("fsgUserData"));
  let username = "";
  if(parseLocalStorage){
    username = parseLocalStorage.username;
  }


  return greeting + " " + username + "!";
};

export default Greeting;