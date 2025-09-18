import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const AdminUpdateGallery = () => {
  const navigate = useNavigate();
  const params = useParams(); // get id from route
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);

  // Fetch existing data for editing
  useEffect(() => {
    const fetchGalleryItem = async () => {
      try {
        const res = await fetch(`http://168.231.116.183:3000/getgalleryimagebyid/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch gallery item");
        const data = await res.json();
        console.log(data);
        setFormData({ name: data.name, image: "" });
        setPreview(`http://168.231.116.183:3000${data.image}`); // show existing image
      } catch (err) {
        console.log(err);
        toast.error("Error fetching image details");
      }
    };
    if (params.id) fetchGalleryItem();
  }, [params.id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      setPreview(URL.createObjectURL(files[0])); // preview new image
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit update
   const handleSubmit = async (e) => {
     e.preventDefault();
     const payload = new FormData();
     for (const key in formData) {
       if (formData[key]) {
         payload.append(key, formData[key]);
       }
     }
     try {
       const response = await fetch(`http://168.231.116.183:3000/updateGalleryImage/${params.id}`, {
         method: "PUT",
         body: payload,
       });
       const res_data = await response.json();
       if (response.ok) {
         toast.success("Image Updated Successfully.");
         navigate("/admin/gallery");
       } else {
         toast.error(res_data.message || "Failed to Update Image");
       }
     } catch (err) {
       console.log(err);
     }
   };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar title="Green CEO" />
      <div className="p-5 flex flex-col gap-5">
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-gray-700 p-5 rounded-md flex flex-col gap-3"
        >
          <Link to="/admin/gallery" className="ml-auto text-2xl">
            <IoMdCloseCircleOutline />
          </Link>

          <div className="flex flex-col gap-1">
            <label className="text-md lg:text-lg font-sketch font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-md lg:text-lg font-sketch font-medium">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-2 w-40 h-40 object-cover rounded-md"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-yellow duration-700 cursor-pointer p-2 text-md font-sketch text-black rounded-md"
          >
            Update Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdateGallery;
