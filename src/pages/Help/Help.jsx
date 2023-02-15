import { Footer } from "react-daisyui";

const Help = () => {
  return (
    <div className="m-20">
        <div className="flex justify-center text-3xl mb-4">
          Карта сайта
        </div>
        <hr />
        <div className="text-green-500 text-2xl flex justify-center mt-4">
        Где мы?
        </div>
        <div className=" text-green-200 mb-4">
      <a className=" flex justify-center link link-hover " href="https://maps.google.com/maps?q=-67.997757,94.568033&ll=-67.997757,94.568033&z=16">Отделение 1</a>
      <a className="flex justify-center link link-hover" href="https://maps.google.com/maps?q=48.555415,39.316354&ll=48.555415,39.316354&z=16">Отделение 2</a>
      <a className="flex justify-center link link-hover" href="https://maps.google.com/maps?q=17.058250,8.713251&ll=17.058250,8.713251&z=16">Отделение 3</a>
      <a className="flex justify-center link link-hover" href="https://maps.google.com/maps?q=31.580954,54.460642&ll=31.580954,54.460642&z=16">Отделение 4</a>
      </div>
      <hr />
      <div className="flex justify-center text-2xl text-yellow-500 mt-4">
        Техподдержка
      </div>
      <div className="flex justify-center text-xl text-yellow-300">
      Если вас обманули, взломали, купили товар от вашего имени НЕ звоните наэтот номер - 0983214578,
      </div>
      <div>

      </div> 
    </div>
  );
};

export default Help;
