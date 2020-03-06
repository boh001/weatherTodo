export const clockReducer = (state, action) => {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  switch (action.type) {
    case "tictoc": {
      const nowTime = `${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${
        s < 10 ? `0${s}` : s
      }`;
      return { nowTime };
    }
    case "changeMent": {
      const newMent = `${
        h > 21
          ? "Good night"
          : h > 18
          ? "Good evening"
          : h > 12
          ? "Good afternoon"
          : h > 6
          ? "Good morning"
          : "Good night"
      }`;
      return { newMent };
    }

    default:
      return state;
  }
};
