const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

/**
 * 모스부호 편지 해독하는 함수!
 * @param {string} letter 모스부호 편지 (" ") 공백을 기준으로 구분
 * @returns 위에 객체 대로 해석 해서 모스부호를 해석반환
 */
function solution(letter) {
  let currentMorse = "";
  let answer = "";
  for (let i = 0; i < letter.length; i++) {
    const item = letter[i];
    if (item === " ") {
      answer += morse[currentMorse];
      currentMorse = "";
    } else {
      currentMorse += item;
    }
  }
  answer += morse[currentMorse];
  return answer;
}
