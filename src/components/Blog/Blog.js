import './Blog.css';
import { useState } from 'react';

function Blog(props) {

  let[글제목, 글제목변경] = useState(['나자 코트 추천', '다남 냉면 맛집', '가딩 공부 맛집']);
  let[따봉, 따봉변경] = useState(Array(글제목.length).fill(0));
  let[bad, bad_sign] = useState(Array(글제목.length).fill(0));
  
  //let[날짜,날짜변경] = useState('2월 16일','2월 17일','2월 18일');

  let[inp,inp_chg] = useState('');

  let[모달,모달제목변경] = useState('')
  let[modal,modal_change] = useState(false)

  function 더하기(){
    따봉변경(따봉+1)
  }
  function 빼기(){
    bad_sign(bad-1)
  }

  return (
    <div className="App">
      
      <div className = 'i_container'>
          {
          글제목.map(function(element,index){
            return(
              <List 글제목={글제목} 글제목변경={글제목변경} 따봉={따봉} 따봉변경={따봉변경} bad={bad} bad_sign={bad_sign} 
              index={index} 더하기={더하기} 빼기={빼기} 모달={모달} 모달제목변경={모달제목변경} modal={modal} modal_change={modal_change} /*날짜={날짜} 날짜변경={날짜변경}*/>
              </List>
            )
            })
          }
      </div>
      
      <div className='f_container'>
        <div>
          {
            <input className='inputbox' onChange={(e) => {inp_chg(e.target.value);}}></input>
          }
        </div>
        <button className="f_container" onClick={() => {
            if (inp != '') {
              const copy글제목 = [...글제목];
              const copy따봉 = [...따봉];
              const copybad = [...bad];
              copy글제목.unshift(inp);
              copy따봉.unshift(0);
              copybad.unshift(0);
              글제목변경(copy글제목);
              따봉변경(copy따봉);
              bad_sign(copybad);
            } else {
              alert("제목을 입력해주세요");
            }
          }}>저장
          </button>
          <div>
          { 
            modal == true ? <Modal 모달={모달}></Modal> : null
          }
        </div>
      </div>
      <div id="foot">
            <div className='tel'>
              tel. 010-9089-0369
            </div>
        </div>
    </div>
  );
}

function List(props){
  return (
    <div className='list'>
        <h4 onClick={() => {
          props.modal_change(!props.modal);
          props.모달제목변경(props.글제목[props.index]);
          }
          }>

          {props.글제목[props.index]}
          &nbsp;
          <span onClick={(e) => {
            const copy따봉 = [...props.따봉]
            copy따봉[props.index] += 1
            props.따봉변경(copy따봉);
            e.stopPropagation();
          } }>👍</span> {props.따봉[props.index]}
          <span onClick={(e) => {
            const copybad = [...props.bad]
            copybad[props.index] += 1
            props.bad_sign(copybad);
            e.stopPropagation();
          } }>👎</span> {props.bad[props.index]}
        </h4>
        &nbsp;
        <button className='delate' onClick={() => {
          const copy글제목 = [...props.글제목]
          const copy따봉 = [...props.따봉]
          const copybad = [...props.bad]
          copy글제목.splice(props.index,1)
          copy따봉.splice(props.index,1)
          copybad.splice(props.index,1)
          props.글제목변경(copy글제목)
          props.따봉변경(copy따봉)
          props.bad_sign(copybad)
        }}>
        &nbsp;
        삭제
        </button>
    </div>
  )
}

function Modal(props){
  return (
    <div className='modal'>
        <h4>제목 : {props.모달}</h4>
        <p>날짜 : </p>
        <p>상세내용 : </p>
      </div>
  )
}


export default Blog;
