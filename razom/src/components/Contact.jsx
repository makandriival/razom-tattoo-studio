import React, {useState} from 'react'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMassage] = useState('');
  return (
    <section id='contact'>
        <form >
        <div className="contactFormInput">
          <label htmlFor="name">Your name:
            <input type="text" id='name' name='name' value={name}  
            onChange={(e) => setName(e.target.value)} />
          </label>
        </div> 
        <div className="contactFormInput">
          <label htmlFor="email"> Your email:
            <input type="text" id='email' name='email' value={email}  
            onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div> 
        <div className="contactFormInput">
          <label htmlFor="massage">Tell us what you got:
            <input type="massage" id='massage' name='massage' value={massage}  
            onChange={(e) => setMassage(e.target.value)} />
          </label>
        </div> 
        <button className='contactBtn'>Submit</button>
        </form>
        
  <span>Send us an email: 
  <a href="mailto:razom@gmail.com">razom@gmail.com</a> 
  </span>

    </section>
  )
}

export default Contact