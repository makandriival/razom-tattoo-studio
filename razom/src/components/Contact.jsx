import React, {useState} from 'react'
import ModalContact from './ModalContact';

function Contact() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [massage, setMassage] = useState('');

  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id='contact'>

      <button onClick={()=>{ setIsOpen(true) }} >Contact</button>
      
      <ModalContact open={isOpen}/>
      
    </section>
  )
}

export default Contact



{/* <form >
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
</form> */}