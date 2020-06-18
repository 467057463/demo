import React from 'react';
import img from '../images/back.jpg';
function ObjectFit(){
  return(
    <div className="object-fit">
      <div className="box">
        <img src={img} />
      </div>
      <div className="box2">
        在展开技术属性值anywhere的作用之前，先给大家科普一个概念，关于“硬换行”和“软换行”。
      </div>
    </div>
  )
}

export default ObjectFit;