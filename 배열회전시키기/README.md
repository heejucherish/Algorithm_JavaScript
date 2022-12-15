[프로그래머스-배열 회전시키기](https://school.programmers.co.kr/learn/courses/30/lessons/120844)

## :book: 문제 설명

- 정수가 담긴 배열 `numbers`와 문자열 `direction`가 매개변수로 주어집니다. 배열 `numbers`의 원소를 `direction`방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.



## 제한 상황

- 3 ≤ `numbers`의 길이 ≤ 20
- `direction`은 "left" 와 "right" 둘 중 하나입니다.



## 입출력 예 

| numbers                   | direction | result                    |
| ------------------------- | --------- | ------------------------- |
| [1, 2, 3]                 | "right"   | [3, 1, 2]                 |
| [4, 455, 6, 4, -1, 45, 6] | "left"    | [455, 6, 4, -1, 45, 6, 4] |



### :heavy_check_mark: 내 코드

```js
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

```

