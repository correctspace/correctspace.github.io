import Top from './blocks/Top'

function Data() {
    const data = {
        title:"Home",
        description:"Home Desc",
        link:"/contact"
    }
  return (
    <>
        <Top data={data} />
    </>
  )
}

export default Data