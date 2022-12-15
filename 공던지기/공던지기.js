/**
 * 공을 던지는데 한명씩 건너뛰면서 던지는거야.. k번째로 공던지는 사람의 번호는 무엇이니..?
 * @param {Array} numbers 친구들 번호가 들어있는 정수 배열 [1, 2, 3, 4, 5, 6]
 * @param {number} k k번째로 공을 던지는 사람 번호= k번째까지만 공을 던지면 된다 5
 * @returns k번째로 공던지는 사람의 번호를 정답으로 리턴 3
 */

function solution(numbers, k) {
  let cnt = 1;
  for (let i = 0; ; i += 2) {
    i %= numbers.length;
    const item = numbers[i];
    if (cnt === k) {
      return item;
    }
    cnt++;
  }
}
