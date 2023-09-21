import './Meme.css'

function Meme() {

  return (
    <>
      <div className="form">
        <div className="inputs">
          <input type="text" className="input1" placeholder='Shut up'/>
          <input type="text" className="input2" placeholder='and take my money'/>
        </div>
        <submit className="submit-btn"><span className='btn-txt'>Get a new meme image</span> 🖼</submit>
      </div>
    </>
  )
}

export default Meme
