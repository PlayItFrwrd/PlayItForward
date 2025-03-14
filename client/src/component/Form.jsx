import { useState } from 'react';
import '../index.css';

function Form () {
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

    setIsSubmitted(false);
  };

  return (
    <>
      <div className='text-red-800 text-lg px-50 py-50'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              className='border-2 rounded-sm border-blue-500'
              type='text'
              name='from'
              onChange={onChange}
              value={dataForm.from}
            />
          </label>
          <br />
          <br />
          <label>
            Recipient:
            <input
              type='text'
              name='recipient'
              onChange={onChange}
              value={dataForm.recipient}
            />
          </label>
          <br />
          <br />
          <label>
            Message:
            <textarea
              type='text'
              name='message'
              onChange={onChange}
              value={dataForm.message}
            />
          </label>
          <br />
          <br />
          <label>
            Song Title:
            <input
              type='text'
              name='songTitle'
              onChange={onChange}
              value={dataForm.songTitle}
            />
          </label>
          <br />
          <br />
          <label>
            Song Artist:
            <input
              type='text'
              name='songArtist'
              onChange={onChange}
              value={dataForm.songArtist}
            />
          </label>
          <br />
          <br />
          <label>
            Song Link:
            <input
              type='text'
              name='songLink'
              onChange={onChange}
              value={dataForm.songLink}
            />
          </label>
          <br />
          <br />
          <input type='submit' value='submit' />
        </form>
        {isSubmitted && <p>Dedication successfully sent!</p>}
      </div>
      <p className='read-the-docs'>Placeholder footer</p>
    </>
  );
}

export default Form;
