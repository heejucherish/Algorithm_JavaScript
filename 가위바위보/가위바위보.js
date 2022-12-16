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
