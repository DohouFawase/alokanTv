import React, { useState } from 'react'
import Input from '../../ui/input/input'
import Button from '../../ui/button/button'

export default function Newslatter() {
  const [Loading, setLoading] = useState(false)
  const [data, setData]  = useState({
    newslater : ''
  })
  function handleSubmite(e) {
    e.preventDefault();
    console.log(alert("Submited"))
    
  }
  function handleChange(e) {
    
  }
  return (
    <div>
      <div className="">
        <div className="">
            <h1>Abonnez vous a notre Newsletter</h1>
            <p>Pour ne rien manquer</p>
        </div>
        <div className="">
            <div className="">
                <form onSubmit={handleSubmite} className='flex items-center gap-2'>
                  <Input name={"newslater"}  type='email'   className={'border rounded-md px-2 p-2 border-gray-300 outline-none focus-visible:border-blue-600'}/>
                  <Button type='submit' className={"bg-blue-400 p-2 rounded-md px-4 tracking-wider cursor-pointer text-white font-bol"}>
                    Abonnez-vous
                  </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
