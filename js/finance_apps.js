/****************************************************
*************MORTGAGE CALCULATOR*********************
****************************************************/
const mortCalcBtn = document.getElementById("mort-calc-btn");
mortCalcBtn.addEventListener("click", mortCalculate);

function mortCalculate() {
  const princial = document.querySelector("#mort-princial").value;
  const rate = document.querySelector("#mort-rate").value;
  const term = document.querySelector("#mort-term").value;
  
  
}
/*****************************************************
*************STATS************************************
*****************************************************/

const statsBtn = document.getElementById("stats-btn");
statsBtn.addEventListener("click", statsCalculate);

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
}

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}

const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

function statsCalculate() {
  const value = document.querySelector("#stats-numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#stats-mean").textContent = mean.toFixed(2);
  document.querySelector("#stats-median").textContent = median.toFixed(2);
  document.querySelector("#stats-mode").textContent = mode;
  document.querySelector("#stats-range").textContent = range.toFixed(2);
  document.querySelector("#stats-variance").textContent = variance.toFixed(2);
  document.querySelector("#stats-standardDeviation").textContent = standardDeviation.toFixed(2);
}
