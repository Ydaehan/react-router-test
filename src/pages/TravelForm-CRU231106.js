import React, { useState, useEffect } from 'react';
// import "./TravelForm.css";
import styles from './TravelForm.module.css';
import Travels, { exptravels } from './Travels';

export default function TravelForm() {
  const [travels, setTravles] = useState([]);
  const [modifyMode, setModifyMode] = useState(true);
  useEffect(() => { // Hook을 이용한 상태처리
    fetch("http://localhost:3100/travel") // Promise 처리, GET /travels Read하는 엔드포인트
      .then((response) => response.json())
      .then((jsonData) => setTravles([...jsonData]));
  }, []);

  const UpdateForm = () => {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const id = e.target.id.value;       // string
            const name = e.target.name.value;
            const image = e.target.image.value;
            console.log(id, name, image);

            // 배열 데이터의 수정 처리
            // id와 인덱스의 차이
            // id: 1~
            // index : 0~
            // 수정작업할 때 id-1로 해서 수정해야함
            /* 
            [1] 먼저 기존배열데이터(travles)를 복사해서 새 배열 데이터로 작성
            [2] 수정정보를 포함한 객체를 생성(t)
                t = { id: ~~~, name: 'ddd', image: 'https://dccfdg' }
            [3] 새 배열의 map함수 정의
              [3 - 1] 수정정보객체의 t.id와 같은 경우 수정처리
              [3 - 2] setter로 useState의 정보를 수정
            [4] 모드변경: 화면변경 */

            // [1]
            const newTravels = [...travels];
            // console.log(newTravels);

            // [2]
            const updateArticle = {
              id: parseInt(id),
              name: name,
              image: image
            }

            // [3]
            // [3-1]
            newTravels.map(
              t =>
                t.id === parseInt(id)
                  ? (newTravels[t.id - 1] = updateArticle)
                  : (t)
            );

            // json server에 update 처리
            // fetch(url,{method:'PATCH'})
            fetch(`http://localhost:3100/travel/${id}`, { // Option 객체
              // Option 객체
              method: "POST", // PUT, PATCH, DELETE
              headers: {
                "Content-Type": "application/json; charset=utf-8", // HTTP Request Header 설정
              },
              body: // body, params(:data), query(url에서 ? 뒤에 key=value&...)
                JSON.stringify(updateArticle), // 직렬화(Serialization) - 문자열로 변경
            }).then(res => res.json())
              .then(res => {
                console.log(res);
              });

            // [3-2] setter
            setModifyMode(!modifyMode);
          }}
        >
          {/* <p><input type="text" name="id" defaultValue="1" /></p> */}
          <div className='input-group input-group-lg mb-2'>
            {/* lg: large mb: margin-bottom */}
            <span className='input-group-text'>인덱스번호</span>
            <input className='form-control' name="id" type="text" defaultValue='6' required />
          </div>
          <div className='input-group input-group-lg mb-2'>
            {/* lg: large mb: margin-bottom */}
            <span className='input-group-text'>여행지 국가</span>
            <input className='form-control' name="name" type="text" defaultValue='china' required />
          </div>
          <div className='input-group input-group-lg mb-2'>
            {/* lg: large mb: margin-bottom */}
            <span className='input-group-text'>대표이미지</span>
            <input className='form-control' name="image" type="text" defaultValue='https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg' required />
          </div>
          <input type="submit" className='btn btn-dark' value='정보수정' />
          <hr />
        </form>
        <div style={{ border: '0px solid blue', position: 'relative' }}>
          <button className='btn btn-outline-info'
            onClick={() => {
              // window.location.reload(); // 새로고침: 모든 화면 새로 그림, 데이터들의 초기화
              setModifyMode(!modifyMode);
            }}
            style={{ position: 'absolute', top: '-68px', right: '0px' }}>
            뒤돌아가기
          </button>
        </div>
      </>
    )
  };

  const clickHandlerModify = (data, ev) => {
    ev.preventDefault();
    console.log(data, ev)
    // Update 구현, 화면변경 아직 안함
    setModifyMode(!modifyMode);
  };

  return (<div className='container mt-2'>
    {/* container는 내부에 내용을 포함한다는 의미
        mt: margin top */}
    <h3>Travel Form 페이지</h3>
    <hr />
    {/* <form action="">
      <p><input type="text" className={styles.inputBox} name="name" placeholder='여행지 국가이름' autoComplete='off'/></p>
      <p><input type="text" className={styles.inputBox} name="image" placeholder='여행지 대표이미지' autoComplete='off'/></p>
    </form> */}
    {
      modifyMode ? (
        <form className={styles}
          onSubmit={
            (event) => {
              event.preventDefault(); // reload 방지
              const id = event.target.id.value;
              const name = event.target.name.value;
              const image = event.target.image.value;
              console.log(id, name, image);

              const newArticle = {
                id,                 // key명과 value의 변수명이 같으면 생략가능
                name,
                imglink: image,
              }
              // console.log(exptravels);
              // console.log(newArticle);
              // exptravels.push(newArticle);
              // console.log(exptravels);
              // travels = [travels, newArticle]; // 에러: useState는 setter를 이용해야 함

              // setTravles( //useState의  setter 를 이용
              //   // travels,    // 에러 발생하지 않고 배열에 추가되지만, 렌더링 안됨
              //   [
              //     ...travels,
              //     newArticle
              //   ]
              // )


              fetch("http://localhost:3100/travel", {
                // Option 객체
                method: "POST", // PUT, PATCH, DELETE
                headers: {
                  "Content-Type": "application/json; charset=utf-8", // HTTP Request Header 설정
                },
                body: // body, params(:data), query(url에서 ? 뒤에 key=value&...)
                  JSON.stringify(newArticle), // 직렬화(Serialization) - 문자열로 변경
              }).then(res => res.json())
                .then(res => {
                  console.log(res);
                });
              // fetch로 Post /travels (Create하는 엔드포인트) 로 newArticle을 전송하여 서버에 반영
              setTravles([...travels, newArticle]);
              event.target.id.value = '';
              event.target.name.value = '';
              event.target.image.value = '';
            }
          }
        >
          <div className='input-group input-group-lg mb-2'>
            {/* lg: large mb: margin-bottom */}
            <span className='input-group-text'>인덱스번호</span>
            <input className='form-control' name="id" type="text" />
          </div>
          <div className='input-group input-group-lg mb-2'>
            {/* lg: large mb: margin-bottom */}
            <span className='input-group-text'>여행지 국가</span>
            <input className='form-control' name="name" type="text" />
          </div>
          <div className='input-group input-group-lg mb-2'>
            {/* lg: large mb: margin-bottom */}
            <span className='input-group-text'>대표이미지</span>
            <input className='form-control' name="image" type="text" />
          </div>
          <input type="submit" className='btn btn-dark' value='여행정보입력' />
          <hr />
          {/* {console.log(exptravels)} */}
          <ul style={{ listStyle: 'none', paddingLeft: '40px' }}>
            {
              // exptravels.map(
              travels.map(
                (t) => (  // 부모에는 position:'relative'
                  <li key={t.id} style={{ position: 'relative' }}>
                    <span style={{ display: 'inline-block', width: '140px' }}>
                      {t.id}.
                    </span>
                    <span style={{ display: 'inline-block', width: '140px', fontWeight: 'bold', marginBottom: '70px', textTransform: 'capitalize' }}>{t.name}</span>
                    <img height='140px' width='30%' src={t.imglink} alt="" />
                    <div>
                      <button className="btn btn-outline-success"
                        style={{
                          position: 'absolute',  // 자식엘리먼트 absolute 면 부모를 기준으로 한다
                          top: '50px',
                          right: '100px',
                          zIndex: '2',
                        }}
                        onClick={(ev) => {
                          clickHandlerModify(t, ev);
                        }}>수정</button>
                    </div>
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
      ) : (
        <>
          <h1>Update 화면</h1>
          <UpdateForm />
        </>
      )}
  </div>);
}