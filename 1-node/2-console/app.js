console.log('logging.....');
console.clear();

// log level
console.log('log');   // 개발
console.info('info');   // 정보
console.warn('warn');   // 경보
console.error('error');   // 에러, 사용자 에러, 시스템 에러

// assert
// 인자값이 true가 아닐 때만 출력됨
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'eunjeong', IQ: -300, company: { name: 'AC' }};
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
console.time('for loop');
for ( let i = 0; i < 10; i++ ) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
};
a();
a();

// trace 
// 디버깅할 때 쓰면 좋음
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();