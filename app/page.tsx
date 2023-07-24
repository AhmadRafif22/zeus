import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-black text-white">
        <img src="/image/sliderImage/img-1.jpg" alt="" width="55%" />
        <div className="w-[45%] p-8 space-y-2">
          <p className="text-4xl text-[red]">NEW</p>
          <h1 className="text-5xl tracking-widest">YAMAHA</h1>
          <h2 className="text-5xl tracking-widest">VX 750</h2>
          <p className="text-4xl font-light tracking-wide">BURNING LOVE</p>
          <p className="text-sm pb-8">More Power, More Performance</p>
          <Link href='' className="text-sm px-6 py-2 border rounded-xl">see more</Link>
        </div>
      </div>

      <div className="">

      </div>
    </>

  )
}
