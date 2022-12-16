[프로그래머스-배열 회전시키기](https://school.programmers.co.kr/learn/courses/30/lessons/120844)

## :book: 문제 설명

- 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 `rsp`가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.



## 제한 상황

- 0 < `rsp`의 길이 ≤ 100
- `rsp`와 길이가 같은 문자열을 return 합니다.
- `rsp`는 숫자 0, 2, 5로 이루어져 있습니다.



## 입출력 예 

| rsp   | result |
| ----- | ------ |
| "2"   | "0"    |
| "205" | "052"  |

### :heavy_check_mark: 내 코드

```js
const win = {
  2: "0",
  0: "5",
  5: "2",
};
/**
 * 가위는 2 바위 0 보는 5 매칭시키기 함수
 * @param {string} rsp 저장된 가위바위보 내는 순서
 * @returns 저장된 가위바위보 순서를 이기면된다!
 */
function solution(rsp) {
  var answer = "";

  for (let i = 0; i < rsp.length; i++) {
    const item = rsp[i];
    answer += win[item];
  }
  return answer;
}

```

