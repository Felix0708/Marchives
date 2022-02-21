import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // const user = {
    //   id: nextId.current,
    //   username,
    //   email
    // };
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

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
      <UserList users={users} />;
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
    </>
  );
}

export default App;