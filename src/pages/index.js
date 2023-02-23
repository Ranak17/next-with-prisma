
import { Inter } from '@next/font/google'
import useSWR from 'swr';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const fetcher = async ()=>{
    const resp = await fetch("api/profile")
    const data = await resp.json()
    return data
  }

  const getData = () =>{
    
  }
  const {data,error} = useSWR("dash",fetcher);
  if(error) return "Error aa gaya bhailog"
  if(!data) return <h1>Loading...</h1>
  return (
    <>
      <div>
        <h2>username | password</h2>
        {data.map(ele=>{
          return (<h2 key={ele.id}>{ele.username} | {ele.password}</h2>);
        })}
      </div>
    </>
  )
}
