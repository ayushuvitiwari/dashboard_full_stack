import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'

const Categories = () => {
  const categories = [
    {
      id: "#CAT01",
      name: "Electronics",
      products: 45,
      status: "Active",
    },
    {
      id: "#CAT02",
      name: "Accessories",
      products: 30,
      status: "Active",
    },
    {
      id: "#CAT03",
      name: "Laptops",
      products: 20,
      status: "Active",
    },
    {
      id: "#CAT04",
      name: "Mobiles",
      products: 25,
      status: "Inactive",
    },
  ];
  return (
    <>
      <DashboardLayout>
        <div className="min-h-screen bg-gray-100 p-6">

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Categories
              </h1>

              <p className="text-gray-500 mt-1">
                Manage your product categories
              </p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700">
              + Add Category
            </button>
          </div>


          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">
                Total Categories
              </p>

              <h2 className="text-2xl font-bold mt-2">
                4
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">
                Active Categories
              </p>

              <h2 className="text-2xl font-bold mt-2">
                3
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">
                Total Products
              </p>

              <h2 className="text-2xl font-bold mt-2">
                120
              </h2>
            </div>

          </div>


          {/* Categories Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

            <table className="w-full min-w-[650px]">

              {/* Table Head */}
              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-6 py-4 text-gray-600">
                    ID
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Category Name
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Products
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Status
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Action
                  </th>

                </tr>

              </thead>


              {/* Table Body */}
              <tbody>

                {categories.map((category) => (

                  <tr
                    key={category.id}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 font-medium">
                      {category.id}
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-800">
                      {category.name}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {category.products}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${category.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                          }`}
                      >
                        {category.status}
                      </span>

                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 flex gap-4">

                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>

                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      </DashboardLayout>
    </>
  )
}

export default Categories