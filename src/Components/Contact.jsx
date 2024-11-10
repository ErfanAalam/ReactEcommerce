import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [file, setFile] = useState("")


  function handleSubmit(e) {
    e.preventDefault()

    let obj = {
      name: name,
      email: email,
      number: number,
      file: file
    }

    console.log(obj);

  }
  useEffect(()=>{
    console.log(name);
    console.log(email);
  })


  function handleFileChange(e) {
    e.preventDefault()
    setFile(e.target.files)
    console.log("hello");
    console.log(e.target.files[0].name);
  }

  return (
    <>
      <form action="/" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="Name"> Enter your name</label>
          <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="email">
          <label htmlFor="email"> Enter your email</label>
          <input type="email" name="" id="email" value={email} onChange={useMemo((e) => setEmail(e),[email])} />
        </div>

        <div className="number">
          <label htmlFor="number"> Enter your number</label>
          <input type="number" name="" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>

        <div className="file">
          <input type="file" name="" id="file" onChange={handleFileChange} />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>

      <div className="social">
        <a
          href="https://www.instagram.com/clothhub03/"
          className="anchor">
          <h2>Instagram</h2>
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61568254901212&mibextid=LQQJ4d"
          className="anchor">
          <h2>FaceBook</h2>
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="mailto:clothinghub67@gmail.com"
          target="_blank"
          className="anchor">
          <h2>Email</h2>
          <EmailIcon fontSize="large" />
        </a>
      </div>
    </>
  )
}

export default Contact
