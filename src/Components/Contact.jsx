import React from 'react'
import "../css/Contact.css"
const Contact = () => {

    const HandleSubmit = () => {
        const InputElement = document.querySelectorAll('input');
        const TextareaElement = document.querySelector('textarea');
        InputElement.innerText = "";
        TextareaElement.innerText = "";
    };

  return (
    <div className='form-wrapper'>
        <form action="https://api.staticforms.xyz/submit" method="post">
            <h2>お問い合わせ</h2>
            <input type="hidden" name="accessKey" value="0fb56b41-7ac6-4a8f-a883-573f472f30ff"></input>
            <div className='form-content'>
                <div>
                    <label>お名前</label>
                </div>
                <div>
                    <input type="text" name='name'required/>
                </div>
            </div>
            <div className='form-content'>
                <div>
                    <label>メールアドレス</label>
                </div>
                <div>
                    <input type="email" name='email' required/>
                </div>
            </div>
            <div className='form-content item-top'>
                <div>
                    <label>お問い合わせ内容</label>
                </div>
                <div>
                    <textarea name="message" required></textarea>
                </div>
            </div>
            <div className='button-area'>
                <button type='submit' onClick={HandleSubmit}>送信</button>
            </div>
        </form>
    </div>
  )
}

export default Contact