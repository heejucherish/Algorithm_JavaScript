[프로그래머스-2차원으로 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/120842)

## :book: 문제 설명

- 정수 배열 `num_list`와 정수 `n`이 매개변수로 주어집니다. `num_list`를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

  `num_list`가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 `n`이 2이므로 `num_list`를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

  | num_list                 | n    | result                           |
  | ------------------------ | ---- | -------------------------------- |
  | [1, 2, 3, 4, 5, 6, 7, 8] | 2    | [[1, 2], [3, 4], [5, 6], [7, 8]] |



## 제한 상황

- `num_list`의 길이는 `n`의 배 수개입니다.
- 0 ≤ `num_list`의 길이 ≤ 150
- 2 ≤ `n` < `num_list`의 길이



## 입출력 예 

| num_list                           | n    | result                                   |
| ---------------------------------- | ---- | ---------------------------------------- |
| [1, 2, 3, 4, 5, 6, 7, 8]           | 2    | [[1, 2], [3, 4], [5, 6], [7, 8]]         |
| [100, 95, 2, 4, 5, 6, 18, 33, 948] | 3    | [[100, 95, 2], [4, 5, 6], [18, 33, 948]] |



### :heavy_check_mark: 내 코드

```js
/**
 * 2차원 배열 만들기 함수입니다
 * @param num_list 여기는 일차원 배열이 들어갑니다 [1, 2, 3, 4, 5, 6, 7, 8]
 * @param n n개 길이 만큼 일차원 배열을 나누어집니다. 2
 * @returns 이차원 배열로 만들어서 리턴합니다. 	[[1, 2], [3, 4], [5, 6], [7, 8]]
 */

function solution(num_list, n) {
  const result = [];

  let temp = [];

  for (let i = 0; i < num_list.length; i++) {
    const item = num_list[i];
    temp.push(item);
    if (temp.length === n) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}


```

