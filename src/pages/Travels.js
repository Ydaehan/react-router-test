import React from 'react';
import Travel from '../components/Travel';

const travels = [
  {id:'1', name: '한국', imglink:'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'},
  {id:'2', name: '미국', imglink:'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg'},
  {id:'3', name: '일본', imglink:'https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg'},
];

export default function Travels() {
  // const name = '한국'
  // const img = 'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'
  return (
  <div className='container mt-5'>
    <button className='btn btn-outline-primary'>
      여행지 데이터 불러오기
    </button>
    <hr />
    
    {/* <Travel name={name} img={img}/>
    <Travel name={name} img={img}/>
    <Travel name={name} img={img}/> 
    jsx에서 js코드 실행코드는 {}내에서 작성
    */}
    {
      travels.map((e)=>{
        return <Travel key={e.id} idn={e.id} name={e.name} img={e.imglink} />
      })
    }
  </div>
  );
}