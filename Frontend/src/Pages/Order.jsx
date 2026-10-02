import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'

const Order = () => {

  const orders = [
    {
      id: "#1001",
      customer: "Rahul",
      product: "Laptop",
      price: "₹55,000",
      date: "12 Sep 2026",
      status: "Delivered",
    },
    {
      id: "#1002",
      customer: "Aman",
      product: "Mouse",
      price: "₹999",
      date: "12 Sep 2026",
      status: "Pending",
    },
    {
      id: "#1003",
      customer: "Priya",
      product: "Keyboard",
      price: "₹1,499",
      date: "11 Sep 2026",
      status: "Shipped",
    },
    {
      id: "#1004",
      customer: "Rohit",
      product: "Monitor",
      price: "₹12,000",
      date: "10 Sep 2026",
      status: "Cancelled",
    },
  ];
  return (
    <>
      <DashboardLayout>
        <div className="p-6 bg-gray-100 min-h-screen">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Orders
            </h1>
            <p className="text-gray-500">
              Manage your customer orders
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Total Orders</p>
              <h2 className="text-2xl font-bold mt-2">120</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Pending</p>
              <h2 className="text-2xl font-bold mt-2">15</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Delivered</p>
              <h2 className="text-2xl font-bold mt-2">90</h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-gray-500">Cancelled</p>
              <h2 className="text-2xl font-bold mt-2">15</h2>
            </div>

          </div>

          {/* Search and Filter */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row gap-4">

            <input
              type="text"
              placeholder="Search order..."
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500 w-full"
            />

            <select className="border border-gray-300 rounded-lg px-4 py-2 outline-none w-full sm:w-48">
              <option>All Status</option>
              <option>Pending</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>

          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

            <table className="w-full min-w-[800px]">

              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-gray-600">
                    Order ID
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Customer
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Product
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Price
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Date
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Status
                  </th>

                  <th className="text-left px-6 py-4 text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 font-medium">
                      {order.id}
                    </td>

                    <td className="px-6 py-4">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4">
                      {order.product}
                    </td>

                    <td className="px-6 py-4">
                      {order.price}
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {order.date}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm
                    ${order.status === "Delivered"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-red-100 text-red-600"
                          }`}
                      >
                        {order.status}
                      </span>

                    </td>

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

export default Order