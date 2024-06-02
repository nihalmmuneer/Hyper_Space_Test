import { useRouter } from "next/router";
import { useState } from "react";

const ApplicationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    companyName: "",
    nextjsexperience: "",
    totalExperience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/success");
  };

  const handleClear = () => {
    setFormData({
      fullname: "",
      companyName: "",
      email: "",
      nextjsexperience: "",
      totalExperience: "",
    });
    router.push("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 shadow-lg bg-no-repeat bg-cover lg:p-0 p-10"
      style={{ backgroundImage: "url('/form_bg.jpg')" }}
    >
      <form
        className="bg-white p-8 rounded shadow-md lg:w-1/3 w-full"
        onSubmit={handleSubmit}
      >
        <label className="block mb-2 font-semibold text-sm text-slate-600">
          Full Name
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded"
            required
          />
        </label>
        <label className="block mb-2 font-semibold text-slate-600 text-sm">
          Current Company Name
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded"
            required
          />
        </label>
        <label className="block mb-2 font-semibold text-slate-600 text-sm">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full p-2 mt-1 border rounded"
          />
        </label>
        <label className="block mb-2 font-semibold text-slate-600 text-sm">
          Experience in <span className="text-xs">(Next.js)</span>
          <input
            type="Number"
            name="nextjsexperience"
            value={formData.nextjsexperience}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded"
            required
          />
        </label>
        <label className="block mb-2 font-semibold text-slate-600 text-sm">
          Total Experience <span className="text-xs">(FrontEnd)</span>
          <input
            type="Number"
            name="totalExperience"
            value={formData.totalExperience}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded"
            required
          />
        </label>
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Clear form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
