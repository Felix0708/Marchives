import React, { useEffect, useContext, } from 'react';
import { UserDispatch } from './App';

// const User = React.memo(function User({ user, onRemove, onToggle }) {
const User = React.memo(function User({ user, }) {
  const dispatch = useContext(UserDispatch);
  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user 가 바뀌기 전..');
  //     console.log(user);
  //   };
  // }, [user]);
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, []);
  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        // onClick={() => onToggle(user.id)}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER', id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      {/* <button onClick={() => onRemove(user.id)}>삭제</button> */}
      <button 
        onClick={() => {
          dispatch({ type: 'REMOVE_USER', id: user.id });
        }}
      >삭제</button>
    </div>
  );
});

// function UserList() {
//   const users = [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ];
//   // return (
//   //   <div>
//   //     <div>
//   //       <b>{users[0].username}</b> <span>({users[0].email})</span>
//   //     </div>
//   //     <div>
//   //       <b>{users[1].username}</b> <span>({users[1].email})</span>
//   //     </div>
//   //     <div>
//   //       <b>{users[2].username}</b> <span>({users[1].email})</span>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div>
//       {/* <User user={users[0]} />
//       <User user={users[1]} />
//       <User user={users[2]} /> */}
//       {users.map(user => (
//         <User user={user} key={user.id} />
//       ))}
//       {/* {users.map((user, index) => (
//         <User user={user} key={index} />
//       ))} */}
//     </div>
//   );
// }
// function UserList({ users, onRemove, onToggle }) {
function UserList({ users, }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          // onRemove={onRemove}
          // onToggle={onToggle}
        />
      ))}
    </div>
  );
}
export default React.memo(UserList);
