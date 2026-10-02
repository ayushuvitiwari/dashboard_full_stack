import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'

const Customers = () => {

  const customers = [
    {
      id: "#C001",
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876543210",
      orders: 5,
      spent: "₹65,000",
      status: "Active",
    },
    {
      id: "#C002",
      name: "Aman",
      email: "aman@gmail.com",
      phone: "9876543211",
      orders: 3,
      spent: "₹12,500",
      status: "Active",
    },
    {
      id: "#C003",
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876543212",
      orders: 8,
      spent: "₹45,000",
      status: "Active",
    },
    {
      id: "#C004",
      name: "Rohit",
      email: "rohit@gmail.com",
      phone: "9876543213",
      orders: 1,
      spent: "₹2,000",
      status: "Inactive",
    },
    {
      id: "#C005",
      name: "Neha",
      email: "neha@gmail.com",
      phone: "9876543214",
      orders: 6,
      spent: "₹28,500",
      status: "Active",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <div className="min-h-screen bg-gray-100 p-6">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Customers
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your customers
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Total Customers</p>
              <h2 className="text-2xl font-bold mt-2">
                250
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">New Customers</p>
              <h2 className="text-2xl font-bold mt-2">
                35
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Active Customers</p>
              <h2 className="text-2xl font-bold mt-2">
                210
              </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Inactive Customers</p>
              <h2 className="text-2xl font-bold mt-2">
                40
              </h2>
            </div>

          </div>

          {/* Search and Filter */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4">

            <input
              type="text"
              placeholder="Search customer..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            />

            <select
              className="w-full sm:w-48 border border-gray-300 rounded-lg px-4 py-2 outline-none"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

          {/* Customer Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

            <table className="w-full min-w-[900px]">

              {/* Table Head */}
              <thead className="bg-gray-50">

                <tr>

                  <th className="text-left px-6 py-4 text-gray-600">
                    ID
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Customer
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Email
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Phone
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Orders
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Total Spent
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

                {customers.map((customer) => (

                  <tr
                    key={customer.id}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 font-medium">
                      {customer.id}
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-800">
                      {customer.name}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {customer.email}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {customer.phone}
                    </td>

                    <td className="px-6 py-4">
                      {customer.orders}
                    </td>

                    <td className="px-6 py-4">
                      {customer.spent}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${customer.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                          }`}
                      >
                        {customer.status}
                      </span>

                    </td>

                    {/* Action */}
                    <td className="px-6 py-4">

                      <button className="text-blue-600 hover:underline">
                        View
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

export default Customers