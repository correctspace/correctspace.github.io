import Top from './blocks/Top'

function About() {
    const data = {
        title:"About",
        description:"About Desc",
        link:"/contact"
    }
  return (
    <>
        <Top data={data} />
    </>
    
  )
}

export default About