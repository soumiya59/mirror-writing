import { useState } from "react"

function App() {
  const [input,setInput] = useState('') 
  const [flip,setFlip] = useState(false) 
  const handleChange = (e:any)=>{
    setInput(e.target.value)
    setFlip(true)
  }
  return (
    <div className="container bg-whitish mx-auto mt-10 md:mt-28 md:py-16 ">

      <h1 className="text-center text-3xl md:text-5xl pt-5 uppercase text-redish font-bold ">mirror writing generator</h1>

      <form className="container mx-auto md:flex lg:justify-evenly text-center py-16" >
        <textarea name="input" value={input} cols={50} rows={9} placeholder='Enter text here' className="text-xl p-2 md:p-4 border-2 focus:outline-none focus:ring-0 focus:border-orange-200 max-w-[90%] md:max-w-[50%]" onChange={handleChange} autoFocus></textarea>
        <br />
        <textarea name="input" value={input} cols={50} rows={9} placeholder='mirrored text will appear here' className={flip?'text-xl fliped border-2 p-2 md:p-4 mt-10 md:mt-0 max-w-[90%] md:max-w-[50%] ': 'text-xl border-2 p-2 md:p-4 mt-10 md:md:mt-0 max-w-[90%] md:max-w-[50%]'} disabled>{input}</textarea>
      </form>

    </div>
  )
}

export default App
