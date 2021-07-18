module.exports = function toReadable (number) {
  const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const third = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const strOfNum = String(number);


  if (number < 10) {
    return first[number];

  } else if (number < 20) {
    return second[strOfNum[1]];

  } else if (number < 100 && number % 10 == 0) {
    return third[strOfNum[0] - 1];

  } else if (number < 100) {
    return `${third[strOfNum[0] - 1]} ${first[strOfNum[1]]}`;

  } else if (number < 1000 && number % 100 == 0) {
    return `${first[strOfNum[0]]} hundred`;

  } else if (number < 1000 && strOfNum[1] == 0) {
    return `${first[strOfNum[0]]} hundred ${first[strOfNum[2]]}`;

  } else if (number < 1000 && strOfNum[2] == 0) {
    return `${first[strOfNum[0]]} hundred ${third[strOfNum[1] - 1]}`;

  } else if (number < 1000 && strOfNum[1] == 1) {
    return `${first[strOfNum[0]]} hundred ${second[strOfNum[2]]}`;

  } else if (number < 1000) {
    return `${first[strOfNum[0]]} hundred ${third[strOfNum[1] - 1]} ${first[strOfNum[2]]}`;
  }
}
