import React,{useState} from 'react';
import Travel from '../components/Travel';

// const travels = [
//   {id:'1', name: '한국', imglink:'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'},
//   {id:'2', name: '미국', imglink:'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg'},
//   {id:'3', name: '일본', imglink:'https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg'},
// ];

const exptravels = [
  {id:'1', name: 'korea', imglink:'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'},
  {id:'2', name: 'america', imglink:'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg'},
  {id:'3', name: 'japan', imglink:'https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg'},
]


export default function Travels() {
  const [visibility, setVisibility] = useState(false);
  const [travels,setTravels] = useState([]);
  
  async function clickBtn(e){
    const response = await fetch("http://localhost:3100/travel");
    const jsonData = await response.json();
    setVisibility(!visibility);
    setTravels([...jsonData]);
  }

  // const name = '한국'
  // const img = 'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'

  return (
  <div className='container mt-5'>
    <button className='btn btn-outline-primary' onClick={clickBtn}>
      {!visibility?'여행지 데이터 불러오기':'접기'}
    </button>
    <hr />
    
    {/* <Travel name={name} img={img}/>
    <Travel name={name} img={img}/>
    <Travel name={name} img={img}/> 
    jsx에서 js코드 실행코드는 {}내에서 작성
    */}
    <div>
    {
      visibility&&travels.map((e)=>{
        return <Travel key={e.id} idn={e.id} name={e.name} img={e.imglink} />
      })
    }
    </div>
  </div>
  );
}

export { exptravels};