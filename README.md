# Day1 개발환경이해

## 왜 필요한가?
- Js 과정을 잘 진행할 수 있도록 필요한 개발환경과 학습방법을 이해해야 한다.


## 학습 목표
- nodejs로 javascript코드를 실행할 수 있고, VSCode에서 JavaScript프로그램 구현을 할 수 있다.
- 기본 개발 환경을 구성하고 git과  github을 활용해서 소스코드를 관리할 수 있다.

----


## 미션

최대공약수를 구하는 프로그램
### 1. 저장소 fork 
- step1번 문제의 github에 접속해서 fork 를 한다.
- fork한 저장소를 로컬컴퓨터로 clone한다.



### 2. 두 수의 최대공약수를 계산하는 함수를 구현한다. 
```javascript
gcd([18,45])
9
```
step1.js 파일로 결과를 저장한다.



### 3. 2개 이상, n개의 수를 입력받아 최대공약수를 계산하는 multipleGcd함수를 추가로 만든다. 
```javascript
multipleGcd([120,60,40,20,160])
20
```
step1.js 파일에 코드를 추가한다.



### 4. github PR(Pull Request)
  fork한 원래의 원격저장소에 PR을 보낸다. 보낼때 본인의 아이디로 되어 있는 branch로 PR을 보내야 한다.
  master브랜치로 PR을 보내지 않도록 조심한다.

  

### 프로그램조건 
- 함수를 사용해서 구현한다.
- 입력값을 받기 위해서 표준입력방식을 사용해도 되고, 소스코드 파일 안에서 함수를 호출하면서 입력값을 넣어도 된다.
- 최대공약수를 구하는 방법은 이미 알려진 알고리즘을 활용해도 상관없다.
- 결과는 VSCODE콘솔에 출력되야 한다.
- 함수  구현이 끝나면 git commit 으로 완성된 결과를 커밋하고, 커밋로그를 작성한다.
- 다 완성이 되면 fork한 github저장소에 코드를 push 한다.



-----
## 배경 지식

### 개발환경
- 개발도구는 자유롭게 본인이 선택할 수 있다. 
- 과정 전체에서는 VSCode(Visual Studio Code)사용을 권장하며 사용을 원하는 개발자는 VSCODE를 찾아서 설치하도록 한다.
- 참고로 IDE라는 것이 무엇인지 공부하면 좋다.


### NodeJS
- NodeJS를 통해서 JavaScript를 브라우저 이외의 공간에서 실행할 수 있음.
- NodeJS를 통해서 JavaScript코드를 CLI(Command Line Interface)를 통해서 실행할 수 있음.
- NodeJS 프로그램을 설치한다. (여러버전을 설치할 수 있지만, 가급적 10.16 버전을 설치하는 것을 권장한다)
- NodeJS 실행은 터미널환경에서 실행할 수 있음
- 윈도우에서는 파워쉘이나 윈도우bash 또는 VSCode에서 제공하는 터미널을 사용할 수 있음
- MAC OS에서는 기본 제공되는 터미널 프로그램을, 활용하거나 VSCode의 터미널을 활용

```shell
//run.js 파일을 실행하는 방법
> node run.js
```

### 변수
변수는 var, let, const 로 변수를 선언할 수 있다. 어떤 것을 사용하는 가에 의해서 scope라는 변수의 유효범위가 달라진다.
우선 var를 사용해서 변수를 선언한다. 
여러가지 type의 변수 선언방법을 확인해보자. 

```javascript
var a = 2;
var a = "aaa";
var a = 'aaa';
var a = true;
var a = [];
var a = {};
var a = undefined;
  ```

### 연산자
연산자 우선순위를 표현하기 위해서는 ()를 사용하면 된다. 
수학연산자는 +,-,*,/,%(나머지) 등이 있다.

논리 연산자, 관계연산자, 삼항연산자도 있음. 

```javascript
//or 연산자 활용
const name = "crong";
const result = name || "codesquad";
console.log(result);
const name = "";
const result = name || "codesquad";
console.log(result);
```

### 연산자 - 비교연산자
비교는 == 보다는 ===를 사용한다. ==로 인한 다양한 오류 상황이 있는데 아래 결과를 참고하자. 

```javascript
0 == false;
“” == false;
null == false;
0 == “0”;
null==undefined;
```

이런 현상에 대해서는 자바스크립트를 이해하는데 어려움을 느낄 수 있다. 
이런 부분도 자바스크립트의 특징중 하나이며, 이유에 대해서 궁금해 할 필요가 있다. 
이 부분을 좀더 알기 위해서 암묵적인 형변환에 대해서 알아보자.

### 자바스크립트의 Type
자바스크립트 타입에는 다양한 것이 존재.

```javascript
> undefined, null, boolean, number, string, object, function, array, Date, RegExp,Symbol
```

타입은 선언할때가 아니고, 실행타임에 결정된다. 함수안에서의 파라미터나 변수는 실행될때 그 타입이 결정된다. 
타입을 체크하는 또렷한 방법은 없다. 정확하게는 toString.call 을 이용해서 그 결과를 매칭하곤하는데, 문자,숫자와 같은 기본타입은 typeof 키워드를 사용해서 체크할 수 있다. 
배열의 경우 타입을 체크하는 isArray함수가 표준으로 있다.(브라우저 지원범위를 살펴보고 사용해야 함)


### 비교문, 분기문, 반복문
if/switch/for/for-of 문은 MDN사이트를 찾아서 공부하도록 한다.
배열의 경우 forEach와 같은 메서드를 통해서 좀더 쉽게 탐색할 수 있다. 
for-of를 통한 탐색도 자주 사용된다. 
(for-of를 따르는 타입은 배열이외에도 문자열등 더 많다. iterable object인 경우에 for-of를 사용할 수 있는데 이부분은 나중에 더 공부한다)

for-in은 객체를 탐색할때 사용한다. 



### 함수 생성 방법
- 기본적인 js로 함수를 작성할때 사용하는 방법이다
``` javascript
///test.js
function main(x){
  console.log(x+9)
}
main(3)
```
를 작성하고 실행하면
```shell
> node test.js
12 
```
- 더 자세한 방법은 2주차 md에 나옵니다.


### 터미널 명령어

터미널을 사용하다보면 디렉토리를 만들고, 제거하거나 파일을 복사하는 등의 작업을 해야 한다. 기본적인 명령어를 공부하자.
(UNIX 명령어로 검색하는 것도 방법)
- cd
- mv
- mkdir
- rm
- cp



### git
##### git이란? 
- 소스코드를 완성하면서 의미있는 지점마다 기억할 필요가 있다. git을 활용하면 원하는 시점에서의 변경사항을 기록하게 할 수 있다.
- git이 무엇인지 좀더 공부하도록 한다
- git에 대한 학습자료는 '생활코딩' 등 국내의 자료도 무수히 많다.
- git이 설치되어 있지 않다면 git을 설치하도록 한다. 

##### 필수 명령어
git실행을 위해서 필수 명령어를 공부하도록 한다.
- add
- commit
- branch
- checkout
- merge

##### git clone 과 로컬 branch개발
원격지(github 의 저장소)에서 git clone 명령어를 통해서 로컬컴퓨터에 소스코드를 내려받을 수 있다.
그 이후에는 checkout명령어를 활용해서 새로운 로컬 브랜치를 생성할 수 있다.
fork한 이후에 로컬에서 어떻게 브랜치를 만들어서 개발할 수 있는지 공부하자.

##### push
git commit 을 통해서 소스코드의 변경을 저장한 후에는, git push를 통해서 원격저장소(github)에 코드를 올려서 다른사람과 코드를 공유할 수 있다.
push, pull 명령어를 공부한다.

##### PR
Pull Request를 통해서 fork를 했던 원래의 저장소에  소스코드를 보낼 수가 있다.
이과정은 fork한 후에  어떤 변경을 한후, 원래의 소스코드 저장소에 이를 반영하는 과정이라고 이해할 수 있다.
github사이트에서 PR을 보내는 방법을 찾아서 공부하고 실습해보는 것을 권장한다.



----

##### 1. fork한 프로젝트를 자신의 컴퓨터로 clone한다.

주의사항은 clone할때 single-branch 옵션을 주어야 한다는 것이다.

```shell
git clone https://github.com/{본인깃헙아이디}/{저장소이름} -b {본인아이디} --single-branch

ex) 깃헙아이디가 crong, 본인아이디 ss66이고, 저장소가 day1-challenge 인경우,
git clone https://github.com/crong/day1-challenge -b ss66 --single-branch
```



##### 2. commit

```shell
git status //확인

git rm 파일명 //삭제된 파일

git add 파일명(or * 모두) // 추가/변경 파일

git commit -m "메세지" // 커밋

```





##### 3. 본인 원격 저장소에 올리기

```shell
git push origin 본인_브랜치

ex) git push origin ss66

```



##### 4. Pull Request보내기

\- pull request는 github 웹 서비스에서 진행할 수 있다. 

\- pull request는 반드시 inuappcenter의 original 저장소 브랜치와 fork한 **자신의 저장소 브랜치 이름**(ex. ap18)이 같아야 한다.



----
## 학습정리
### 피어 컴파일링 체크포인트

```
1. [ ] 두 수의 최대공약수를 계산하는 함수를 구현
2. [ ] n개의 수를 입력받아 최대공약수를 계산하는 multipleGcd함수 구현
3. [ ] 본인의 브랜치로 PR을 보냄
4. [ ] 함수의 실행결과가 VSCODE콘솔에 출력
5. [ ] 커밋로그가 함수단위로 되어 있음
```

### 스스로 확인할 사항
- 최대공약수 문제는 잘 동작하는가? 
- 필요한 함수를 여러가 만들었는가?
- git의 branch에 대해서 이해를 하고 있는가? 
- vscode에서 개발한 후에 commit을 하고, fork한 저장소로 잘 push했는가?
- fork에서 시작해서 PR을 보낼때까지의 흐름에 대해서 제대로 이해하고 있는지 서로 설명해본다.
- git add와 commit을 할때 git 내부에서는 어떤 일이 일어나는 것인지 찾아서 학습하고 이를 정리한다.
- 여러명이 협업을 하며 프로젝트를 개발할때는 다양한 branch전략을 세워서 한다. 실무에서 사용하는 git workflow에 대해서 찾아보고, 왜 그런 전략이 필요한지 고민한 후 정리한다.


## 참고자료 사이트
[참고자료](www.poiemaweb.com)<www.poiemaweb.com>
