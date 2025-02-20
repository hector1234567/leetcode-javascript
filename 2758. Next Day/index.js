// Write code that enhances all date objects such that you can call the date.nextDay() method on any date object and it will return the next day in the format YYYY-MM-DD as a string.

export const nextDay = function () {
  const nextD = new Date(this.valueOf() + 24 * 60 * 60 * 1000);

  const year = nextD.getFullYear();
  const month =
    nextD.getMonth() < 9 ? "0" + (nextD.getMonth() + 1) : nextD.getMonth() + 1;
  const day = nextD.getDate() < 10 ? "0" + nextD.getDate() : nextD.getDate();

  return `${year}-${month}-${day}`;
};

// OTRA SOLUCIÓN

// Date.prototype.nextDay = function () {
//     const date = new Date(this.valueOf());
//     date.setDate(date.getDate() + 1);
//     return date.toISOString().slice(0, 10);
// };
