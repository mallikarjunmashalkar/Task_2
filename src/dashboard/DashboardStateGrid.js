import React from "react";

const DashboardStateGrid = () => {
  return (
    <div>
      <div className="mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <i class="fa-regular fa-user text-2xl text-white"></i>
            </div>
            <div className="pl-4">
              <span className="text-lg text-gray-500 font-light font-semibold">
                Total Admission
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  54265
                </strong>
                <span className="text-sm text-green-500 pl-2">+343</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <i class="fa-regular fa-user text-2xl text-white"></i>
            </div>
            <div className="pl-4">
              <span className="text-lg text-gray-500 font-light font-semibold">
                Total Pending
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold ">
                  342
                </strong>
                <span className="text-sm text-orange-500 pl-2">-343</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <i class="fa-regular fa-user text-2xl text-white"></i>
            </div>
            <div className="pl-4">
              <span className="text-lg text-gray-500 font-light font-semibold">
                Total Profesor
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  123
                </strong>
                <span className="text-sm text-blue-500 pl-2">-30</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <i class="fa-regular fa-user text-2xl text-white"></i>
            </div>
            <div className="pl-4">
              <span className="text-lg text-gray-500 font-light font-semibold">
                Total Class
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  26
                </strong>
                <span className="text-sm text-red-500 pl-2">-43</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <i class="fa-regular fa-user text-2xl text-white"></i>
            </div>
            <div className="pl-4">
              <span className="text-lg text-gray-500 font-light font-semibold">
                Total Student
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  542
                </strong>
                <span className="text-sm text-green-500 pl-2">+343</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
              <i class="fa-regular fa-user text-2xl text-white"></i>
            </div>
            <div className="pl-4">
              <span className="text-lg text-gray-500 font-light font-semibold">
                Total Student
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  542
                </strong>
                <span className="text-sm text-green-500 pl-2">+343</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStateGrid;
