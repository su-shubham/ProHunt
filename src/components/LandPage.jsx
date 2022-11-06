export default function LandPage() {
  return (
    <div className="flex items-center flex-wrap mb-20 ">
      <div className="w-full md:w-1/2 text-center ">
        <h4 className="text-6xl text-gray-800 font-bold mb-3">
          Add Your <span className="text-[#f43f5e]">Features</span>
        </h4>
        <p className="text-gray-600 mb-8 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          consequatur minus dolorum voluptates veniam eligendi quo sint. Est,
          voluptatum facere.
        </p>
        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="mb-4">
            <a
              href=""
              className="btn-sm text-white bg-[#f43f5e] hover:bg-rose-500 ml-3 p-3 rounded-md font-[700]"
            >
              List Your Products
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="https://www.fief.dev/illustrations/castle.svg?auto=format&fit=max&w=64"
          alt="Monitoring"
        />
      </div>
    </div>
  );
}
