import { Outlet } from "react-router-dom";

function Container() {
  const flowerImages = [];
  const flowerIcons = ["flower1", "flower2", "flower3"];

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < flowerIcons.length; j++) {
      flowerImages.push(
        <i
          className={`text-shadow bi bi-${flowerIcons.at(
            j
          )} text-black hover:text-primary transition duration-1000 ease-in-out hover:duration-0 text-5xl md:text-[3.5rem]`}
          key={`${i}-${j}`}
        ></i>
      );
    }
  }

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen mx-auto overflow-hidden bg-base-200">
      <div className="absolute top-0 left-0 flex flex-wrap justify-between w-full gap-3">
        {flowerImages}
      </div>

      <div className="bg-base-100 min-h-[70vh] rounded-xl p-8 flex flex-col z-10">
        <Outlet/>
      </div>
    </div>
  );
}

export default Container;
