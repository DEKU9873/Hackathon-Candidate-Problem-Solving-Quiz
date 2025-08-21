const FindMissingRanges = (frames) => {
  let gaps = [];
  let missingCount = 0;
  let longestGap = [];
  let maxGapLength = 0;
  for (let i = 0; i < frames.length; i++) {
    for (let j = i + 1; j < frames.length; j++) {
      if (frames[j] < frames[i]) {
        let oldValue = frames[i];
        frames[i] = frames[j];
        frames[j] = oldValue;
      }
    }
  }
  for (let i = 1; i < frames.length; i++) {
    let prev = frames[i - 1];
    let curr = frames[i];

    if (curr - prev > 1) {
      let start = prev + 1;
      let end = curr - 1;

      gaps.push([start, end]);

      let gapLength = end - start + 1;
      missingCount += gapLength;
      if (gapLength > maxGapLength) {
        maxGapLength = gapLength;
        longestGap = [start, end];
      }
    }
  }
  return {
    gaps: gaps,
    longest_gap: longestGap,
    missing_count: missingCount,
  };
};

let frames = [1, 11, 5, 3, 6, 10, 2, 16];
console.log(FindMissingRanges(frames));
