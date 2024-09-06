

const TestPage = (formData) => {

    const handleForm=async(formData)=>{
        'use server'
        console.log(formData);
        
    }
  return (
    <div>
    <form action={handleForm} className="">
    <input type="text" name="username" id="" />
    <button>Send</button>
    </form>
    </div>
  )
}

export default TestPage