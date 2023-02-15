import { Link } from "wouter";
import { Footer as DaisyFooter } from "react-daisyui"
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
        {/* <DaisyFooter.Title>Services</DaisyFooter.Title>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a> */}
      </div>
      <div>
        <DaisyFooter.Title>Связь</DaisyFooter.Title>
        <a href="https://t.me/madou181_krasnodar" className="link link-hover text-blue-600">Telegram</a>
        <a href="https://ru.wikipedia.org/wiki/Viber" className="link link-hover text-purple-600">Viber</a>
        <a href="https://www.instagram.com/reel/Cm_r1X6hKS-/?igshid=MWMzM2Q4ZmE=" className="link link-hover text-pink-600">Instagram</a>
      </div>
      <div>
        <DaisyFooter.Title>Поддержка</DaisyFooter.Title>
        <a href="/help" className="link link-hover">Карта сайта</a>
      </div>
    </DaisyFooter>
  )
};

export default Footer