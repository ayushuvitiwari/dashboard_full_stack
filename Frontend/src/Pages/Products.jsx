import React, { useState } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Products = () => {

  const handleproducts = () => {
    let product = document.querySelector('.products');
    let productform = document.querySelector('.productform');

    product.classList.remove('block')
    product.classList.add('hidden')

    productform.classList.remove('hidden')
    productform.classList.add('block')

  };

  const [formData, setformData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
  },)

  const handleChange = (e)=>{
    setformData({...formData,[e.target.name]:e.target.value,})
  }

  



  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Mouse",
      category: "Accessories",
      price: "₹999",
      stock: 25,
    },
    {
      id: 2,
      name: "Laptop",
      category: "Laptop",
      price: "₹55,000",
      stock: 10,
    },
    {
      id: 3,
      name: "Keyboard",
      category: "Accessories",
      price: "₹2,499",
      stock: 18,
    },
    {
      id: 4,
      name: "Headphones",
      category: "Accessories",
      price: "₹1,999",
      stock: 32,
    },
    {
      id: 5,
      name: "Smartphone",
      category: "Mobile",
      price: "₹24,999",
      stock: 15,
    },
    {
      id: 6,
      name: "Monitor",
      category: "Electronics",
      price: "₹14,999",
      stock: 8,
    },
    {
      id: 7,
      name: "Webcam",
      category: "Electronics",
      price: "₹3,499",
      stock: 20,
    },
    {
      id: 8,
      name: "USB Cable",
      category: "Accessories",
      price: "₹499",
      stock: 45,
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: "₹2,999",
      stock: 12,
    },
    {
      id: 10,
      name: "Power Bank",
      category: "Mobile",
      price: "₹1,499",
      stock: 27,
    },
  ]);
  return (
    <>
      <DashboardLayout>

        <div className="min-h-[calc(100vh-70px)] bg-gray-100 p-6 block products">

          {/* Heading */}
          <div className="flex items-center justify-between mb-6">

            <h1 className="text-2xl font-bold text-gray-800">
              Products
            </h1>

            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition"
              onClick={handleproducts} >
              <FaPlus className="text-sm" />
              Add Product
            </button>

          </div>


          {/* Search */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-6">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search Product
            </label>

            <input
              type="text"
              placeholder="Search product..."
              className="w-full md:w-96 h-11 px-4 border border-gray-300 rounded-lg outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>


          {/* Products Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                {/* Table Heading */}
                <thead className="bg-gray-50 border-b border-gray-200">

                  <tr>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Image
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Product
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Category
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Price
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Stock
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Action
                    </th>

                  </tr>

                </thead>


                {/* Table Body */}
                <tbody>

                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      {/* Image */}
                      <td className="px-6 py-4">

                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                          🖼️
                        </div>

                      </td>


                      {/* Product */}
                      <td className="px-6 py-4">

                        <p className="font-semibold text-gray-800">
                          {product.name}
                        </p>

                      </td>


                      {/* Category */}
                      <td className="px-6 py-4">

                        <span className="text-gray-600">
                          {product.category}
                        </span>

                      </td>


                      {/* Price */}
                      <td className="px-6 py-4">

                        <span className="font-semibold text-gray-800">
                          {product.price}
                        </span>

                      </td>


                      {/* Stock */}
                      <td className="px-6 py-4">

                        <span
                          className={`font-semibold ${product.stock < 15
                            ? "text-red-500"
                            : "text-green-600"
                            }`}
                        >
                          {product.stock}
                        </span>

                      </td>


                      {/* Action */}
                      <td className="px-6 py-4">

                        <div className="flex items-center gap-3">

                          <button
                            className="text-blue-600 hover:text-blue-800"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>

                          <button
                            className="text-red-500 hover:text-red-700"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>


        {/* product form */}
        <div className="min-h-[calc(100vh-70px)] bg-gray-100 p-6 hidden productform">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Add New Product
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Add a new product to your store
            </p>
          </div>


          {/* Form Card */}
          <div className="max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

            <form className="space-y-5">

              {/* Product Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name
                </label>

                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none bg-gray-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Price + Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price
                  </label>

                  <input
                    type="number"
                    placeholder="Enter price"
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none bg-gray-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>

                  <select
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none bg-gray-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="laptop">Laptop</option>
                    <option value="mobile">Mobile</option>
                    <option value="accessories">Accessories</option>
                    <option value="keyboard">Keyboard</option>
                    <option value="mouse">Mouse</option>
                    <option value="headphones">Headphones</option>
                    <option value="other">Other</option>
                  </select>
                </div>

              </div>


              {/* Stock */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Stock Quantity
                </label>

                <input
                  type="number"
                  placeholder="Enter stock quantity"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 outline-none bg-gray-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>

                <textarea
                  placeholder="Enter product description"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none bg-gray-50 resize-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>


              {/* Product Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-600"
                />
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Add Product
              </button>

            </form>

          </div>

        </div>
      </DashboardLayout>
    </>
  )
}

export default Products