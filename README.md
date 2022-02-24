# react_practice

리액트를 공부하기 위해 벨로퍼트와 함께 하는

1. 모던 리액트
2. 모던 자바스크립트

2가지를 공부한 기록입니다.



## react_introduce



#### 1) 리액트는 어쩌다 만들어졌을까?

##### 배경

- dom을 직접 건드리는 작업은 번거롭다.

##### React의 발상

- dom을 전부 날려버리고 다시 만들어서 보여주자

##### 문제점

- 매번 이렇게 하게되면 다양한 문제가 발생

##### 해결

- 메모리게 가상DOM을 만든다.
- 업데이트가 필요한 부분만 가상DOM으로 수정한다.
- 그 이후 REACT의 알고리즘을 통해 다른 부분을 감지하여 실제 DOM에 패치 시켜준다.

------

#### 2) 윈도우에서 terminal 설정하는법

1. 상단 file탭
2. Preferences
3. Setting 클릭
   --- 현재까지가 vscode에서 ctrl + , 누른 창
4. Terminal 검색
5. Terminal › External: Windows Exec에 gitbash 경로 삽입

------

#### 3) JSX란?

리액트 컴포넌트에서 xml 형식의 값을 반환해는 것

------

#### 4-1) Babel이란?

- 자바스크립트 문법 확장해주는 도구
- 아직 지원하지 않는 최신 문법을 정식 자바스크립트로 변환해준다.

#### 4-2) JSX 규칙

태그는 꼭 닫혀야 한다.

두개 이상의 태그가 존재한다면 꼭 하나의 태그로 감싸져야 한다.

#### 4-3) Fragment란?

- 단순히 감싸기 용으로 태그를 이용해야 할 때 사용하면된다.
- 형태 : <> </>

#### 4-4) Javascript 값 사용할 때에는 {}를 사용한다.

#### 4-5) 인라인스타일의 경우 style의 네이밍은 camelCase로 사용해야한다.

#### 4-6) css파일에서 불어올때는 'className=' 으로 설정해야한다.

------

#### 5) Props

##### 사용법

- 컴포넌트 내부에서 코드를 작성한다.

```
<Hello name="아무거나">
```

- 받는쪽은 props 라는 예약어를 통해 받는다.

```
function Hello(props) {
  return <div>{props.name}</div>
}
```

##### 비구조화할당

- 컴포넌트의 파라미터에서 {}안에 받는 내용을 미리 표기한다.

```
function Hello({name}) {
  return <div>{name}</div>
}
```

##### defaultProps

```
function Hello({name, age}) {
  return <div>{name}</div>
}

Hello.defaultProps = {
  name: '이름없음'
}
```

##### Props.children

- 컴포넌트 태그 사이에 값이 있을때 'children'이란 예약어를 사용한다.

------

#### 6-1) javascript에서는 null,false,undefined를 렌더링 하면 아무것도 나타나지 않는다.

#### 6-2) 삼항연산자를 이용해 조건부 렌더링을 할 수 있다.

```
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
```

#### 6-3) &&를 사용하자

```
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
```

- &&를 사용하면 첫번째로 나오는 false값을 반환하며 없다면 마지막 값을 반환한다.

------

#### 7) useState

##### 화살표함수

- 형태

```
const funcName () => {
//body
}
```

##### 리액트에서 이벤트 설정을 주로 "on이벤트이름={함수이름}" 형태로 작성한다.

##### state 선언 방식

```
  const [number, setNumber] = useState(0);
return(
<div>{number}</div>
)
```

##### useState 동작 원리

- 배열 비구조화 할당을 활용
- 첫번째 원소는 현재 상태, 두번째 원소는 setter 함수
- 원래대로라면

```
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];
```

------

#### 8) Input

- input의 onChange를 사용하면 이벤트 객체 e를 파라미터로 받아올 수 있다.
- 이 객체의 e.target은 이벤트가 발생한 DOM을 가리킨다.
- e.target.value를 조회하면 현재 input의 value값을 알 수 있다.

------

#### 9-1) onChange

- 변할때마다 실행된다.
- 주로 input 태그의 이벤트값을 받아와서 name과 value를 비구조화 할당을 통해 추출한다.

#### 9-2) onClick

- 클릭되면 실행된다.

#### 9-3) 헷갈리는 부분 정리

- 비구조화 할당 : 객체를 추출하는 방법
- 구조분해 할당 : 객체나 배열을 변수로 '분해’할 수 있게 해주는 특별한 문법

------

#### 10) useRef

- javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
- 특정 DOM에 접근할 때 사용한다.
- 외부 라ㅣ브러리 사용할때 유용하다.
- 원하는 위치에 ref={} 의 형태로 작성하면 된다.
- 포커스를 잡으려면 nameInput.current.focus() 형태로 작성하면 된다.

```
const nameInput = useReft();

const onClick = () => {
    nameInput.current.focus();
}

return(
    <input ref={nameInput} />
    <button onClick={onClick}>클릭</button>
)
```

------

#### 11-1) Map을 이용한 렌더링

- arr.map(i => ) 의 형태로 하위 컴포넌트에게 값을 전달해준다.

#### 11-2) Map에서 Key가 필요한 이유

- Map에 key 값이없다면 중간의 값이 바뀌었을때 그 하위 값들이 전부 변하기 때문인다. key값을 사용한다면 key를 이용해 중간의 값을 추가하게 된다.

------

#### 12) useRef의 또 다른 역할

- 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 관리
- useRef로 관리되는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않습니다.

------

#### 13) 배열에 항목 추가

##### spread 연산자 사용

- setUsers([...users, user]);

##### concat 함수 사용

- setUsers(users.concat(user));

##### 1-13 구조에서 알아두면 좋은 점

- 부모 컴포넌트에서 state값(input 등등)과 함수를 작성하고 자식 컴포넌트에게 전달하는 구조를 기억하자

------

#### 14-1) 배열에서 요소 지우기

- filter를 사용하여 false 인 값만 담는다.
- 태그에서 변수를 전달하고 싶을땐 아래와 같이 작성한다.

```
<button onClick={() => onRemove(param)}>
```

#### 14-2) 복습

- input에서 onCick의 event 객체의 경우 위와 같이 변수로 전달해줄 필요 없다. (class형에서는 어떻게 동작할지 알아봐야한다.)

------

#### 15) boolean 값으로 배열 항목 수정하기

- 수정할 때 불변성을 지켜준다.
  - 불변성을 지킨다는건 state값을 유지 한다고 생각하면 된다.
- 수정할때에도 map과 if문을 비교하여 setState를 활용한다.
- style 속성에도 js를 사용할 수 있다.
- boolean 값으로 on/off 할 때 onToggle 이란 함수명을 자주 사용하자

------

#### 16) useEffect

##### 용어

- 마운트 : 처음 나타남
- 언마운트 : 사라짐

##### useEffect 구조

- 함수이다
- 첫번째 인자는 함수, 두번째 인자는 배열(주로 deps 라고 칭한다.)이 들어간다.

##### cleanup 함수

- useEffect 안에서 return 할 때 실행된다.
- useEffcet의 뒷정리를 한다. -> state에서 값 지울때 실행됨

##### deps

- deps 에 특정값을 넣게 되면, 컴퍼넌트가 마운트 될 때, 지정한 값이 업데이트 될 때 useEffect 실행된다.
- deps에 값이 없다면 useEffect가 최신 값을 가리키지 않게 된다.
- deps에 값이 없다면 컴포넌트가 리렌더링 될 때마다 호출이 된다.
- deps에 값을 넣는것을 기본이라고 생각하는게 좋다.

------

#### 17) useMemo

- 성능을 최적화할 때 사용한다.
- memo는 memorized의 약자이다.
- 첫번째 인수에는 함수, 두번째 인수에는 배열을 넣어주면 된다.
  - 두번째 인수에 넣어준 배열의 값이 바뀔때만 함수가 실행된다.
  - 그렇지 않다면 이전의 값을 재사용한다.

------

#### 18) useCallback

- useMemo와 비슷하다. --> useMemo 기반으로 만들어졌기 때문에
- 첫번째 인수에 함수를 두번째 인수에 상태가 props에서 사용하는 배열을 넣는다.

------

#### 19) React.memo를 통한 최적화

- React.memo()안에 컴포넌트(여기서는 함수)를 인자로 넣는다.
- 최적화가 필요한 상황이 아니라면 useCallback을 통한 최적화는 고려해보자
  - 최적화는 학습을 좀 더 하고 사용하면 좋을것같다.

------

#### 20) useReducer

- 현재 컴포넌트가 아닌 다른 곳에 state를 저장하고 싶을때 유용한다.

##### useReducer를 위한 함수

- reducer 라는 함수를 만들고 state와 action 이라는 인자를 받는다.
  - reducer 라는 함수는 예약어는 아니어서 다른 이름으로 만들수있다. (하지만 reducer로 사용하는게 좋다.)
- action에는 객체가 전달되는데 그 안에 type 이라는 프로퍼티를 주로 설정해서 사용한다.
- type 프로퍼티를 통해 switch 문으로 분기한다.
- state는 useReducer를 통해 저장된 변수다.
- 주로 initialState라는 객체에 초기 정보를 담고 useReducer 에게 전달한다.

##### useReducer 형태

```
  const [state, dispatch] = useReducer(reducer, initialState);
```

- reducer는 함수
- initialState는 객체이다
