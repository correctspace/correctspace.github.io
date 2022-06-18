import Top from './blocks/Top'

function Services() {
    const data = {
        title:"Services",
        description:"Services Desc",
        link:"/contact"
    }
  return (
    <>
        <Top data={data} />
    </>
  )
}

export default Services