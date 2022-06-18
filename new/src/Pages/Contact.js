import Top from './blocks/Top'

function Contact() {
    const data = {
        title:"Contact",
        description:"Contact Desc",
        link:"/contact"
    }
  return (
    <>
        <Top data={data} /> 
    </>
  )
}

export default Contact