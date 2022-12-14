import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  


// nameEl.current.value --- nameEl.current
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');  
  

  }, [])
  

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;


    if(!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email'. email);
    }

    submitComment( commentObj )
      .then((res) => {
        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })

  }



  return (
    <div className='bg-[#042c54] shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl text-white mb-8 font-semibold border-b pb-4'>留言</h3>
          <div className="grid grid-cols-1 gap-4 mb-4">
              <textarea 
                  ref={commentEl} 
                  className='p-4  outline-none w-full rounded-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                  placeholder='请留言'
                  name='comment'
              />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
              <input 
                  ref={nameEl}
                  type='text'
                  className='p-2 px-4 outline-none w-full rounded-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                  placeholder='名字'
                  name='name'

              />
              <input
                  ref={emailEl} 
                  type='text'
                  className='p-2 px-4 outline-none w-full rounded-none focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                  placeholder='Email'
                  name='邮箱'
              />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' ></input>
              <label className='text-gray-500 text-white cursor-pointer ml-2' htmlFor='storeData'>保存我的信息以供下次使用.</label>
              
            </div>
          </div>
          {error && <p className='text-xs text-red-500'>请填写每个区域!</p>}
          <div className='mt-8'>
              <button 
                  type='button' 
                  onClick={handleCommentSubmission}
                  className='transition duration-500 ease hover:bg-indigo-900 inline-block  bg-tahiti text-lg rounded-lg text-white px-8 py-3 cursor-pointer'
                  >
              提交留言        
              </button>
              {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>留言已提交等待审核</span>}
          </div>
    </div>
  )
}

export default CommentsForm