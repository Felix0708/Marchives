import React from 'react';

// function Users({ users, onToggle }) {
//   if (!users) return null;

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id} onClick={() => onToggle(user.id)}>
//           {user.username}
//         </li>
//       ))}
//     </ul>
//   );
// }

// Users.defaultProps = {
//   onToggle: () => {
//     console.warn('onToggle is missing!');
//   }
// };

// function Users({ users }) {
//  if (!users) return null;
//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.username}</li>
//       ))}
//     </ul>
//   );
// }

function User({ user }) {
  // if (!user) {
  //   return null;
  // }

  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username:</b> {user.username}
      </div>
    </div>
  );
}

export default User;