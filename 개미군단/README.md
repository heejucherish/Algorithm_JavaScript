[프로그래머스-가위바위보](https://school.programmers.co.kr/learn/courses/30/lessons/120839)

## :book: 문제 설명

- 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 `hp`가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

## 제한 상황

- `hp`는 자연수입니다.
- 0 ≤ `hp` ≤ 1000.

## 입출력 예

| hp  | result |
| --- | ------ |
| 23  | 5      |
| 24  | 6      |

### :heavy_check_mark: 내 코드

```js
/**
 * 게임처럼 생각하면됩니다. 몬스터 hp, 공격력 5,3,1을 활용해서 최소 공격으로 몬스터를 죽여라..!
 * @param {number} hp 몬스터 hp..
 * @returns 최소 공격횟수
 */

function solution(hp) {
  let cnt = 0;
  let arr = [5, 3, 1];
  let idx = 0;
  while (idx < arr.length) {
    let item = arr[idx];
    if (hp >= item) {
      cnt += Math.floor(hp / item);
      hp -= Math.floor(hp / item) * item;
    }
    idx += 1;
  }
  return cnt;
}
```
