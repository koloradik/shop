import { Link } from "wouter";
import {Footer as DaisyFooter} from "react-daisyui"

const Footer = () => {
  return (
    // <div>
    //   <h3 className="bg-red-600 font-semibold p-4 text-2xl">
    //     <Link href="/help">
    //       <span className=" text-blue-800" >Техподдержка: </span>
    //     </Link>
    //     <span className="text-black">Если вас обманули, взломали, купили товар от вашего имени НЕ звоните на
    //     этот номер - 0983214578</span>
    //   </h3>
    // </div>

    <DaisyFooter className="p-10 bg-neutral text-neutral-content">
      <div>
        <DaisyFooter.Title>Services</DaisyFooter.Title>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <DaisyFooter.Title>Company</DaisyFooter.Title>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <DaisyFooter.Title>Legal</DaisyFooter.Title>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </DaisyFooter>
  )
};

export default Footer