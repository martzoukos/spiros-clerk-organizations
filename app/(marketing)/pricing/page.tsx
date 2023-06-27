import Image from "next/image"

export default function Page() {
  return(
    <div className="p-5 flex justify-center">
      <Image 
        src='/pricing-plans.png'
        alt='Pricing Plans'
        width={1600}
        height={800}
      />
    </div>
  )
}