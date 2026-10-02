import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'

const Analytics = () => {

  const topProducts = [
    {
      name: "Laptop",
      sales: 45,
      revenue: "₹2,25,000",
    },
    {
      name: "Mouse",
      sales: 80,
      revenue: "₹79,920",
    },
    {
      name: "Keyboard",
      sales: 55,
      revenue: "₹82,445",
    },
    {
      name: "Monitor",
      sales: 30,
      revenue: "₹3,60,000",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <div className="min-h-screen bg-gray-100 p-6">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Analytics
            </h1>

            <p className="text-gray-500 mt-1">
              Track your store performance
            </p>
          </div>


          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Total Sales</p>
              <h2 className="text-2xl font-bold mt-2">
                ₹2,50,000
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Total Orders</p>
              <h2 className="text-2xl font-bold mt-2">
                320
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Customers</p>
              <h2 className="text-2xl font-bold mt-2">
                250
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Products</p>
              <h2 className="text-2xl font-bold mt-2">
                120
              </h2>
            </div>

          </div>


          {/* Sales Overview */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">

            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Sales Overview
            </h2>

            {/* Simple Bar Chart */}
            <div className="h-64 flex items-end justify-around gap-4 border-b border-gray-200">

              <div className="w-10 h-24 bg-blue-500 rounded-t-md"></div>

              <div className="w-10 h-36 bg-blue-500 rounded-t-md"></div>

              <div className="w-10 h-28 bg-blue-500 rounded-t-md"></div>

              <div className="w-10 h-48 bg-blue-500 rounded-t-md"></div>

              <div className="w-10 h-40 bg-blue-500 rounded-t-md"></div>

              <div className="w-10 h-56 bg-blue-500 rounded-t-md"></div>

              <div className="w-10 h-44 bg-blue-500 rounded-t-md"></div>

            </div>

            {/* Months */}
            <div className="flex justify-around text-sm text-gray-500 mt-3">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>

          </div>


          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Top Products
              </h2>
            </div>

            <table className="w-full min-w-[600px]">

              <thead className="bg-gray-50">

                <tr>
                  <th className="text-left px-6 py-4 text-gray-600">
                    Product
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Sales
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Revenue
                  </th>
                </tr>

              </thead>


              <tbody>

                {topProducts.map((product) => (

                  <tr
                    key={product.name}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 font-medium text-gray-800">
                      {product.name}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {product.sales}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {product.revenue}
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

export default Analytics