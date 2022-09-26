import React, { useState } from 'react'

function Contact() {
  const [data, setData] = useState(
    {
      Fullname: "",
      Phone: "",
      Email: "",
      Message: "",
    }
  );
  const Inputevent = (event) => {
    console.log(event);
    const { name, value } = event.target
    setData((preval) => {
      console.log(preval);
      return {
        ...preval,
        [name]: value
      }
    })
  }
  const Formsubmit = (e) => {
    e.preventDefault();//reload thi bachavashe
    alert(`FullName=${data.Fullname},Phone No.=${data.Phone},Email Id=${data.Email},any Message=${data.Message}`)
  }
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={Formsubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                  name='Fullname'
                  value={data.Fullname}
                  onChange={Inputevent}
                  autoComplete="off"
                  placeholder="Enter your Full Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                <input type="number" className="form-control" id="exampleFormControlInput1"
                  name='Phone'
                  value={data.Phone}
                  onChange={Inputevent}
                  autoComplete="off"
                  placeholder="Mobile No." />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                  name='Email'
                  value={data.Email}
                  onChange={Inputevent}
                  autoComplete="off"
                  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                  rows="3"
                  name='Message'
                  value={data.Message}
                  onChange={Inputevent}
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
