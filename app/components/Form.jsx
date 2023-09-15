const Form = () => {
  return (
    <div>
      {/* form start */}
      <div className="w-[350px] h-fit bg-primary rounded-2xl flex items-center flex-col">
        <p className="text-4xl font-extrabold pt-4">GET A QUOTE</p>
        <p className="text-xl mb-2">FREE AND FASTER</p>
        <form action="" className="flex flex-col">
          <label htmlFor="" className="font-bold">
            Full Name *
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
            placeholder="Full Name"
            required
          />
          <label htmlFor="" className="font-bold">
            Email ID
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
            placeholder="Email"
          />
          <label htmlFor="" className="font-bold">
            Contact Number *
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:ring focus:border-black"
            placeholder="Phone Number"
            required
          />
          <label htmlFor="" className="font-bold">
            Your Message
          </label>
          <textarea
            name=""
            id=""
            className=" resize-none w-[250px] h-[100px] px-2 py-2 rounded-md"
            placeholder="Please type in your message here."
          ></textarea>
        </form>
        <button className="w-fit bg-black text-white font-bold text-xl p-2 rounded-lg my-6 hover:scale-110">
          GET QUOTE
        </button>
      </div>
      {/* form end */}
    </div>
  );
};

export default Form;
