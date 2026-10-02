import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'

const Dashboard = () => {

  const stats = [
    {
      title: "Total Revenue",
      value: "₹1,25,500",
      icon: "💰",
      growth: "+12.5%",
    },
    {
      title: "Total Orders",
      value: "256",
      icon: "🛒",
      growth: "+8.2%",
    },
    {
      title: "Total Products",
      value: "85",
      icon: "📦",
      growth: "+5.4%",
    },
    {
      title: "Total Users",
      value: "1,240",
      icon: "👥",
      growth: "+15.8%",
    },
  ];

  const orders = [
    {
      id: "#1001",
      customer: "Rahul",
      product: "Headphone",
      amount: "₹1,999",
      status: "Delivered",
    },
    {
      id: "#1002",
      customer: "Amit",
      product: "Keyboard",
      amount: "₹2,499",
      status: "Pending",
    },
    {
      id: "#1003",
      customer: "Ravi",
      product: "Mouse",
      amount: "₹999",
      status: "Shipped",
    },
  ];

  return (
    <>
      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >

              <div className="flex items-center justify-between">

                {/* Left */}
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    {item.title}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-800 mt-2">
                    {item.value}
                  </h2>

                  <p className="text-green-500 text-sm mt-2">
                    ↗ {item.growth} this month
                  </p>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* chart  */}



        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">

          <h2 className="text-xl font-bold text-gray-800">
            Sales
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Monthly sales overview
          </p>

          {/* Chart */}
          <div className="h-[280px] flex items-end gap-6 border-b border-gray-200 px-5">

            <div className="w-12 bg-blue-500 rounded-t-lg h-[40%]"></div>
            <div className="w-12 bg-blue-500 rounded-t-lg h-[60%]"></div>
            <div className="w-12 bg-blue-500 rounded-t-lg h-[50%]"></div>
            <div className="w-12 bg-blue-500 rounded-t-lg h-[80%]"></div>
            <div className="w-12 bg-blue-500 rounded-t-lg h-[65%]"></div>

          </div>

          {/* Months */}
          <div className="flex justify-around mt-3 text-sm text-gray-500">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
          </div>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">

          {/* Heading */}
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Recent Orders
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Latest customer orders
              </p>
            </div>

            <button className="text-blue-600 text-sm font-medium hover:underline">
              View All
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b border-gray-200 text-sm text-gray-500">
                  <th className="py-3 px-3">Order ID</th>
                  <th className="py-3 px-3">Customer</th>
                  <th className="py-3 px-3">Product</th>
                  <th className="py-3 px-3">Amount</th>
                  <th className="py-3 px-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >

                    <td className="py-4 px-3 font-medium text-gray-800">
                      {order.id}
                    </td>

                    <td className="py-4 px-3 text-gray-600">
                      {order.customer}
                    </td>

                    <td className="py-4 px-3 text-gray-600">
                      {order.product}
                    </td>

                    <td className="py-4 px-3 font-medium text-gray-800">
                      {order.amount}
                    </td>

                    <td className="py-4 px-3">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                      ${order.status === "Delivered"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                          }
                    `}
                      >
                        {order.status}
                      </span>

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

export default Dashboard