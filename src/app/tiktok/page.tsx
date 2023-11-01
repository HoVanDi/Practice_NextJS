'use client'
import { useRouter } from "next/navigation"



const tiktok = ()=>{

    const router = useRouter();

    const handleBtn =()=>{
      router.push('/')
    }
    return(
        <div>
            tiktok
            <div>
                <button onClick={()=> handleBtn()}>back Home</button>
            </div>
        </div>
    )
}
export default tiktok