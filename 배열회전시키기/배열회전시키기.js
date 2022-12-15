/**
 * 풀이 1 right 하면 끝에있는 원소를 맨 앞으로, left 하면 첫번째 원소를 맨 뒤로하는 함수.
 * @param {Array} numbers [1, 2, 3]
 * @param {string} direction "right"
 * @returns direction에 따른 결과값 입니다. [3, 1, 2]
 */
function solution(numbers, direction) {
  const answer = [];
  if (direction === "right") {
    answer.push(numbers[numbers.length - 1]);
    for (let i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
  } else {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  }
  return answer;
}

/**
 * 풀이 2, 배열 메소드 사용, 하지만 이건 원본을 훼손하게 된다. 현업에서는 권장사항 x
 * @param {} numbers
 * @param {} direction
 * @returns
 */

function solution(numbers, direction) {
  if (direction === "right") {
    const lastItem = numbers.pop(); //맨 뒤 무언소 빼는 pop 파이썬이랑 동일
    numbers.unshift(lastItem); //맨 앞에 넣어주기.
  } else {
    const firstItem = numbers.shift(); //맨 앞에꺼 빼기
    numbers.push(firstItem); //맨 뒤에 넣기
  }
  return numbers;
}
