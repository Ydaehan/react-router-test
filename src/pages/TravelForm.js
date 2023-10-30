import React, {useState, useEffect} from 'react';
// import "./TravelForm.css";
import styles from './TravelForm.module.css';
import Travels, { exptravels } from './Travels';

export default function TravelForm() {
  return (<div className='container mt-2'>
    {/* container는 내부에 내용을 포함한다는 의미
        mt: margin top */}
    <h3>Travel Form 페이지</h3>
    <hr />
    {/* <form action="">
      <p><input type="text" className={styles.inputBox} name="name" placeholder='여행지 국가이름' autoComplete='off'/></p>
      <p><input type="text" className={styles.inputBox} name="image" placeholder='여행지 대표이미지' autoComplete='off'/></p>
    </form> */}
    <form>
      <div className='input-group input-group-lg mb-2'>
        {/* lg: large mb: margin-bottom */}
        <span className='input-group-text'>인덱스번호</span>
        <input className='form-control' type="text" />
      </div>
      <div className='input-group input-group-lg mb-2'>
        {/* lg: large mb: margin-bottom */}
        <span className='input-group-text'>여행지 국가</span>
        <input className='form-control' type="text" />
      </div>
      <div className='input-group input-group-lg mb-2'>
        {/* lg: large mb: margin-bottom */}
        <span className='input-group-text'>대표이미지</span>
        <input className='form-control' type="text" />
      </div>
      <input type="submit" className='btn btn-dark' value='여행정보입력' />
      <hr />
      {console.log(exptravels)}
      <ul style={{listStyle:'none', paddingLeft: '40px'}}>
        {
          exptravels.map(
            (t)=>(
              <li key={t.id}>
                <span style={{display:'inline-block', width:'140px'}}>
                  {t.id}.
                </span>
                <span style={{display:'inline-block', width:'140px', fontWeight: 'bold', marginBottom: '70px', textTransform: 'capitalize'}}>{t.name}</span>
                <img height='140px' width='30%' src={t.imglink} alt="" />
              </li>
            )
          )
        }
      </ul>
      {/* <ul style={{listStyle:'none'}}>
        <li>
          <span style={{display:'inline-block', width:'140px'}}>
            1.&nbsp;
          </span>
          <span style={{display:'inline-block', width:'140px', fontWeight: 'bold'}}>
            korea

          </span>
          <img width='30%' src="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg" alt="" />
        </li>
        <li>
          <span style={{display:'inline-block', width:'140px'}}>
            2.&nbsp;
          </span>
          <span style={{display:'inline-block', width:'140px', fontWeight: 'bold'}}>
            America

          </span>
          <img width='30%' src="https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg" alt="" />
        </li>
      </ul> */}
    </form>
  </div>);
}