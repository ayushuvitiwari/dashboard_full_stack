import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'

const Coupons = () => {

 const  coupons = [
    {
      code: "SAVE10",
      discount: "10%",
      type: "Percentage",
      used: 25,
      expiry: "30 Sep 2026",
      status: "Active",
    },
    {
      code: "FLAT500",
      discount: "₹500",
      type: "Fixed",
      used: 18,
      expiry: "25 Sep 2026",
      status: "Active",
    },
    {
      code: "NEW20",
      discount: "20%",
      type: "Percentage",
      used: 40,
      expiry: "10 Sep 2026",
      status: "Expired",
    },
    {
      code: "WELCOME100",
      discount: "₹100",
      type: "Fixed",
      used: 32,
      expiry: "15 Oct 2026",
      status: "Active",
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
                Coupons
              </h1>

              <p className="text-gray-500 mt-1">
                Manage your discount coupons
              </p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700">
              + Add Coupon
            </button>

          </div>


          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">
                Total Coupons
              </p>

              <h2 className="text-2xl font-bold mt-2">
                12
              </h2>
            </div>


            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">
                Active Coupons
              </p>

              <h2 className="text-2xl font-bold mt-2">
                8
              </h2>
            </div>


            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">
                Used Coupons
              </p>

              <h2 className="text-2xl font-bold mt-2">
                95
              </h2>
            </div>


            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">
                Expired Coupons
              </p>

              <h2 className="text-2xl font-bold mt-2">
                4
              </h2>
            </div>

          </div>


          {/* Coupons Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

            <table className="w-full min-w-[850px]">

              {/* Table Head */}
              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Coupon Code
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Discount
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Type
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Used
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Expiry Date
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

                {coupons.map((coupon) => (

                  <tr
                    key={coupon.code}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {coupon.code}
                    </td>

                    <td className="px-6 py-4">
                      {coupon.discount}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {coupon.type}
                    </td>

                    <td className="px-6 py-4">
                      {coupon.used}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {coupon.expiry}
                    </td>


                    {/* Status */}
                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${coupon.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                          }`}
                      >
                        {coupon.status}
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

export default Coupons