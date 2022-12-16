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
