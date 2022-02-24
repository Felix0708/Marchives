// import React, { useRef, useState, useMemo, useCallback, } from 'react';
import React, { useRef, useMemo, useCallback, useReducer, } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;

  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: '',
  // })
  // const { username, email } = inputs;
  // const onChange = e => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   })
  // }

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);
  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   setInputs(inputs=> ({
  //     ...inputs,
  //     [name]: value
  //   }));
  // },[]);

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: 'velopert',
  //     email: 'public.velopert@gmail.com',
  //     active: true
  //   },
  //   {
  //     id: 2,
  //     username: 'tester',
  //     email: 'tester@example.com',
  //     active: true
  //   },
  //   {
  //     id: 3,
  //     username: 'liz',
  //     email: 'liz@example.com',
  //     active: true
  //   }
  // ]);

  // const nextId = useRef(4);
  // const onCreate = () => {
  //   // 나중에 구현 할 배열에 항목 추가하는 로직
  //   // ...
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email
  //   };
  //   setUsers([...users, user]);
  //   // const user = {
  //   //   id: nextId.current,
  //   //   username,
  //   //   email
  //   // };
  //   // setUsers(users.concat(user));

  //   setInputs({
  //     username: '',
  //     email: ''
  //   });
  //   nextId.current += 1;
  // };
  // const onCreate = useCallback(() => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email
  //   };
  //   setUsers(users => users.concat(user));

  //   setInputs({
  //     username: '',
  //     email: ''
  //   });
  //   nextId.current += 1;
  // }, [username, email]);
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  // const onRemove = id => {
  //   // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //   // = user.id 가 id 인 것을 제거함
  //   setUsers(users.filter(user => user.id !== id));
  // };
  // const onRemove = useCallback(id => {
  //     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //     // = user.id 가 id 인 것을 제거함
  //     setUsers(users => users.filter(user => user.id !== id));
  //   },[]);
  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  // const onToggle = id => {
  //   setUsers(
  //     users.map(user =>
  //       user.id === id ? { ...user, active: !user.active } : user 
  //       // JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자입니다. 
  //       // 맨 앞에 조건문 들어가고. 그 뒤로 물음표(?)와 조건이 참truthy이라면 실행할 식이 물음표 뒤로 들어갑니다. 
  //       // 바로 뒤로 콜론(:)이 들어가며 조건이 거짓falsy이라면 실행할 식이 마지막에 들어갑니다. 
  //       // 보통 if 명령문의 단축 형태로 쓰입니다.
  //     )
  //   );
  // };
  // const onToggle = useCallback(id => {
  //     setUsers(users =>
  //       users.map(user =>
  //         user.id === id ? { ...user, active: !user.active } : user
  //       )
  //     );
  //   },[]);
  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <Wrapper>
        {/* 주석은 화면에 보이지 않습니다 */}
        /* 중괄호로 감싸지 않으면 화면에 보입니다 */
        <Hello 
          // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
          name="react" color="red" isSpecial
        />
        {/* isSpecial={true} */}
        <Hello color="pink"/>
      </Wrapper>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Counter />
      <InputSample />
      {/* <UserList /> */}
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />;
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;