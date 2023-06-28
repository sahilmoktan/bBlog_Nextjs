import Link from "next/link";

export default function studentlist() {

const stNames= ["anil", "peter", "hiran"]



  return (
    <>
        <h1>studentlist</h1>

        {stNames.map((item) =>{
            return (
                <>
                <div>
                <li key={item}> Name:{" "}{item}</li>
                </div>
                </>
            )
        })}
    </>
  )
}
