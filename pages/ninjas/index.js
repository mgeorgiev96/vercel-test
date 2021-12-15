import Link from 'next/link'
export const getStaticProps =  async ()=>{
    const res =  await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {ninjas:data}
    }
}

const Test = ({ninjas}) => {
    return (
    <div>
        <h1>Test</h1>
        {ninjas.map(ninja=>(
            <div key={ninja.id}>
                <Link href={`/ninjas/${ninja.id}`}>
                    <a className="single">
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            </div>
        ))}
    </div>);
}
 
export default Test;