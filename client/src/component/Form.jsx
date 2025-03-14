import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import Date from './Date.jsx';
import '../index.css';

function Form() {
  const navigate = useNavigate();

  //songTitle, songArtist, songLink, message, from, recipient
  const [dataForm, setDataForm] = useState({
    songTitle: '',
    songArtist: '',
    songLink: '',
    message: '',
    from: '',
    recipient: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  //HTTP REQUEST POST
  const createPost = async (anyArg) => {
    // console.log('sending data to backend:', anyArg);

    try {
      const response = await fetch('http://localhost:4000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(anyArg),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`); // error instance is created to be passed to catch block
      }
      setIsSubmitted(true);
      setDataForm({
        songTitle: '',
        songArtist: '',
        songLink: '',
        message: '',
        from: '',
        recipient: '',
      });
    } catch (err) {
      console.error(`Error creating post:`, err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default reload behavior of submission form when submitted
    createPost(dataForm);
  };

  const onChange = (e) => {
    setDataForm({
      ...dataForm, // spread operator creates shallow copy of initial object -- in this case, useState
      [e.target.name]: e.target.value,
    });
    console.log(dataForm);
    setIsSubmitted(false);
  };

  return (
    <div className='flex flex-col bg-[#0c0c0c] w-screen  items-center text-[#fff] font-mono font-normal text-xl'>
      <Header />
      <Date />
      <div className='flex flex-col w-3/4 gap-8 items-center'>
        <form
          className='flex flex-col w-1/2 gap-8 m-20 border border-2-white p-10'
          onSubmit={handleSubmit}
        >
          <label className='flex flex-row'>
            <p>Name:</p>&nbsp;
            <input
              className='bg-[#fff] text-black w-full'
              placeholder='name'
              type='text'
              name='from'
              onChange={onChange}
              value={dataForm.from}
            />
          </label>

          <label className='flex flex-row'>
            <p>Recipient:</p>&nbsp;
            <input
              className='bg-[#fff] text-black w-full'
              placeholder='recipient'
              type='text'
              name='recipient'
              onChange={onChange}
              value={dataForm.recipient}
            />
          </label>

          <label>
            Message: <br />
            <textarea
              className='bg-[#fff] text-black w-full'
              placeholder='Type your message'
              type='text'
              name='message'
              onChange={onChange}
              value={dataForm.message}
            />
          </label>

          <label className='flex flex-row'>
            <p>Song Title:</p>&nbsp;
            <input
              className='bg-[#fff] text-black w-full'
              placeholder='Song Title'
              type='text'
              name='songTitle'
              onChange={onChange}
              value={dataForm.songTitle}
            />
          </label>

          <label className='flex flex-row'>
            <p>Song Artist:</p>&nbsp;
            <input
              className='bg-[#fff] text-black w-full'
              placeholder='Song Artist'
              type='text'
              name='songArtist'
              onChange={onChange}
              value={dataForm.songArtist}
            />
          </label>

          <label className='flex flex-row'>
            <p>Song Linkt:</p>&nbsp;
            <input
              className='bg-[#fff] text-black w-full'
              placeholder='Song Link'
              type='text'
              name='songLink'
              onChange={onChange}
              value={dataForm.songLink}
            />
          </label>

          <input
            type='submit'
            value='submit'
            onClick={() => {
              navigate('/');
            }}
          />
        </form>
        {isSubmitted && <p>Dedication successfully sent!</p>}
      </div>
      <p className='read-the-docs'>Placeholder footer</p>
    </div>
  );
}

export default Form;
