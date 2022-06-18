import Top from './blocks/Top'

function Pricing() {
    const data = {
        title:"Pricing",
        description:"Pricing Desc",
        link:"/contact"
    }
  return (
    <>
        <Top data={data} />  
    </>
  )
}

export default Pricing