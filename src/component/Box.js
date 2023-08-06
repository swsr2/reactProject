import React from 'react'

//props 속성: 함수의 매개변수와 같은 존재
const Box = (props) => {
console.log(props)
  return (
    <div className='box'>
      Box{props.num}
      <p>{props.name}</p>
    </div>
  )
}

export default Box