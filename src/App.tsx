import { useState } from "react"
import tw from "twin.macro"

const TEXTAREA = tw.textarea`
text-xl md:text-3xl p-2 md:p-4 border-2 focus:outline-none focus:ring-0 focus:border-orange-200 md:max-w-[46%] max-w-sm 
` 

function App() {
  const [input,setInput] = useState('') 
  const [flip,setFlip] = useState(false) 
  const handleChange = (e:any)=>{
    setInput(e.target.value)
    setFlip(true)
  }
  return (
    <section className="container bg-whitish mx-auto md:py-16">

      <h1 className="text-center text-2xl md:text-5xl pt-5 uppercase text-redish font-bold mx-1 ">mirror writing generator</h1>
      <form className="container mx-auto md:flex justify-center lg:justify-evenly text-center py-16" >
        <TEXTAREA name="input" value={input} cols={50} rows={9} placeholder='Enter text here' onChange={handleChange} autoFocus className="mb-5 md:mb-0"></TEXTAREA>
        <br />
        <TEXTAREA name="input" value={input} cols={50} rows={9} placeholder='mirrored text will appear here' className={flip ? 'fliped' : ''} >{input}</TEXTAREA>
      </form>

    </section>
  )
}

export default App
