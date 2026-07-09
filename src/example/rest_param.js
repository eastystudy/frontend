/**
 * JavaScript Rest Parameter (나머지 매개변수) 예시
 * 
 * Rest 파라미터는 정해지지 않은 수의 매개변수를 배열로 나타낼 수 있게 합니다.
 * 매개변수 이름 앞에 세 개의 점 `...`을 붙여서 정의합니다.
 */

// 예시 1: 기본적인 사용법 (모든 인자를 배열로 받기)
function sumAll(...numbers) {
  // numbers는 전달된 모든 인자를 담은 실제 배열(Array)입니다.
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log("sumAll(1, 2, 3):", sumAll(1, 2, 3)); // 출력: 6
console.log("sumAll(1, 2, 3, 4, 5):", sumAll(1, 2, 3, 4, 5)); // 출력: 15


// 예시 2: 일반 매개변수와 혼용하기
// 중요: Rest 파라미터는 반드시 함수의 마지막 매개변수여야 합니다.
function printTeamInfo(leader, ...members) {
  console.log(`팀장: ${leader}`);
  console.log(`팀원들: ${members.join(', ')}`);
  console.log(`총 팀원 수 (팀장 제외): ${members.length}명`);
}

printTeamInfo("Alice", "Bob", "Charlie", "David");
// 출력:
// 팀장: Alice
// 팀원들: Bob, Charlie, David
// 총 팀원 수 (팀장 제외): 3명


// 예시 3: arguments 객체와의 차이점
// arguments는 유사 배열 객체(Array-like)이지만, Rest 파라미터는 진짜 배열입니다.
function checkDifference(...restParam) {
  // arguments는 배열 메서드를 바로 쓸 수 없습니다. (예: arguments.map은 에러 발생)
  // 반면 Rest 파라미터는 배열이기 때문에 바로 map, filter 등을 사용할 수 있습니다.
  const squared = restParam.map(x => x * x);
  console.log("제곱 결과 배열:", squared);
}

checkDifference(1, 2, 3, 4); // 출력: 제곱 결과 배열: [1, 4, 9, 16]


// 예시 4: 객체 및 배열 구조 분해 할당(Destructuring)에서의 Rest 사용
const colors = ["red", "green", "blue", "yellow"];
const [primaryColor, ...otherColors] = colors;

console.log("첫 번째 색상:", primaryColor); // 출력: red
console.log("나머지 색상들:", otherColors);   // 출력: ["green", "blue", "yellow"]


// 예시 5: JSON 데이터와 Rest 프로퍼티 (객체 구조 분해 할당)
// JSON 문자열을 파싱하여 객체로 만든 후, 특정 필드만 제외하고 나머지 데이터만 묶어서(Rest) 처리할 때 유용하게 쓰입니다.
const jsonString = '{"id": 1, "name": "John Doe", "email": "john@example.com", "role": "admin", "joinedDate": "2026-01-01"}';

// 1. JSON 문자열 파싱
const user = JSON.parse(jsonString);

// 2. 구조 분해 할당과 Rest 프로퍼티를 사용하여 특정 정보 분리
// id와 joinedDate는 개별 변수로 분리하고, 나머지 정보(name, email, role)를 userInfo 객체에 모읍니다.
const { id, joinedDate, ...userInfo } = user;

console.log("ID:", id);                                // 출력: 1
console.log("가입일:", joinedDate);                    // 출력: 2026-01-01
console.log("나머지 정보 (userInfo 객체):", userInfo); // 출력: { name: "John Doe", email: "john@example.com", role: "admin" }

// 3. 필요한 정보만 모은 객체를 다시 JSON 문자열로 변환
const cleanJsonString = JSON.stringify(userInfo);
console.log("정제된 JSON 문자열:", cleanJsonString);    // 출력: {"name":"John Doe","email":"john@example.com","role":"admin"}

