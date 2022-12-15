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
