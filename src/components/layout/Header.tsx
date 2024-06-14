import Link from "next/link"
import logo from "/public/logo.png"
import Image from "next/image"
import Wrapper from "../shared/Wrapper"

const Header = () => {
  return (
    <div className="sticky top-0 z-10  bg-gray-100">
      <Wrapper>
    <header className='flex justify-between py-4   items-center'>
        <div>
        {/* <h2  className='text-xl font-bold'>Panaverse Dao</h2> */}
        <Image src={logo} alt="panaverse dao logo" width={120} height={30} />
        </div>
        <ul className='flex space-x-8 font-medium'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/courses"}>Courses</Link></li>
        </ul>
    </header>
    </Wrapper>
    </div>
  )
}

export default Header
