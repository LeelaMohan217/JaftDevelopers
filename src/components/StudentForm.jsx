const StudentForm = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 mx-auto my-10 overflow-hidden shadow-md">
      <div className="col-span-1">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <p className="font-thin">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <div className="col-span-2">
        <h1 className="text-xl font-semibold mb-4 text-white">Contact Form</h1>
        <form action="#" method="POST">
          <div className=" grid md:grid-cols-2 gap-4 mb-4">
            <div className="">
              <label
                htmlFor="first_name"
                className="block text-white font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="John   "
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="last_name"
                className="block text-white font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className=" grid md:grid-cols-2 gap-4 mb-4">
            <div className="">
              <label
                htmlFor="education"
                className="block text-white font-medium mb-2"
              >
                Education
              </label>
              <input
                type="text"
                id="education"
                name="education"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="BTech"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="year"
                className="block text-white font-medium mb-2"
              >
                Year of Completion
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="2024"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="">
              <label
                htmlFor="technologies"
                className="block text-white font-medium mb-2"
              >
                Technologies ready to work with
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Frontend / Backend"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="mobile"
                className="block text-white font-medium mb-2"
              >
                Mobile
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="9876543210"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-white font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="123, Main St, Fifth Evenue"
              required
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="city"
                className="block text-white font-medium mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="New York"
                required
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-white font-medium mb-2"
              >
                State / Province
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="New York"
                required
              />
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block text-white font-medium mb-2"
              >
                Zip / Postal Code
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="123456"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="pdf-file"
              className="block text-white font-medium mb-2"
            >
              Upload PDF
            </label>
            <input
              type="file"
              id="pdf-file"
              name="pdf-file"
              accept=".pdf"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
            <small className="text-gray-500">Please upload a PDF file.</small>
          </div>
          <div>
            <button
              type="submit"
              className="w-full md:w-40 bg-red-700 py-3 px-4 rounded-md  text-center hover:bg-red-800 focus:outline-none focus:bg-red-800 float-end  text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
