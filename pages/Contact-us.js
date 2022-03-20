import React, { useState } from "react";
import Head from 'next/head';


const ContactPage = () => {
    const [inputs, setInputs] = useState({
          name: '',
          email: '',
          message: '',
      })
  
      const [form, setForm] = useState('')
  
      const handleChange = (e) => {
          setInputs((prev) => ({
              ...prev,
              [e.target.id]: e.target.value,
          }))
      }
  
      const onSubmitForm = async (e) => {
          e.preventDefault()
  
          if (inputs.name && inputs.email && inputs.message) {
              setForm({ state: 'loading' })
              try {
                  const res = await fetch(`api/Contact`, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(inputs),
                  })
  
                  const { error } = await res.json()
  
                  if (error) {
                      setForm({
                          state: 'error',
                          message: error,
                      })
                      return
                  }
  
                  setForm({
                      state: 'success',
                      message: 'Your message was sent successfully.',
                  })
                  setInputs({
                      name: '',
                      email: '',
                      message: '',
                  })
              } catch (error) {
                  setForm({
                      state: 'error',
                      message: 'Something went wrong',
                  })
              }
          }
      }
    
   return (
   <>
   <Head>

<title>{"Contact us- greedytaker"}</title>
      <meta name="description" content={"You can ask us anything without any hegitation. Greedytaker is always there for you"} />
      <meta property="og:title" content={"Contact us- greedytaker"} />

   </Head>
          <header>
            <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
              {"Contact us- greedytaker"}
            </h1>
           
              <p className="text-xl mb-4 text-center">{"You can ask us anything without any hegitation. Greedytaker is always there for you"}</p>
            
          </header>
          <div className="container">
              <form onSubmit={(e) => onSubmitForm(e)}>
              <div class="row mb-3">
                  <div>    <label htmlFor="name" className="col-sm-2 col-form-label mt-2">Name</label>
</div>
                  <input
                      id='name'
                      type='text'
                      value={inputs.name}
                      onChange={handleChange}
                      
                      placeholder='Name'
                      required
                  /></div>
                  <div className="row mb-3">
                      <div>    <label htmlFor="email" className="mt-2 col-sm-2 col-form-label">Email</label>
</div>
                  <input
                      id='email'
                      type='email'
                      value={inputs.email}
                      onChange={handleChange}
                      
                      placeholder='Email'
                      required
                  /></div>
                  <div className="input-group mt-5">
                  <span class="input-group-text">Message</span>
                  <textarea
                      id='message'
                      type='text'
                      value={inputs.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder='Message'
                      rows='5'
                      required
                  /></div>
                <input class="btn btn-primary mt-5" type="submit" value="Submit"/>

                  {form.state === 'loading' ? (
                      <div>Sending....</div>
                  ) : form.state === 'error' ? (
                      <div>{form.message}</div>
                  ) : (
                      form.state === 'success' && <div>Sent successfully</div>
                  )}
              </form>
          </div>
          </>
      )
      
};
 
export default ContactPage;