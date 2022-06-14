import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//function Button({ children, size, color, outline, fullWidth, onClick}) {
function Button({ children, size, color, outline, fullWidth, ...rest}) {
  return (
    <button 
      className={classNames('Button', size, color, { outline, fullWidth })}
      //onClick={onClick}
      
      //필요한 이벤트가 있을 때 마다 매번 이렇게 넣어주는건 귀찮습니다. 
      //이러한 문제를 해결 해줄 수 있는 문법이 있는데요! 
      //바로 spread 와 rest 입니다. 
      //이 문법은 주로 배열과 객체, 함수의 파라미터, 인자를 다룰 때 사용하는데, 
      //컴포넌트에서도 사용 할 수 있답니다.
      {...rest}
    >
      {children}
    </button>
  )
}
// return <button className={['Button', size].join('')}>{children}</button>
// className={`Button ${size}`}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
