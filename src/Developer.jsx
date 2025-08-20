import React from 'react'
import Terminal from './Terminal/Terminal'

function Developer() {
  return (
    <>
        <div class="flex h-screen">
        {/* <!-- Left Column --> */}
        <div class="w-1/2 flex flex-col">
            {/* <!-- Developer Section --> */}
            <div class="h-1/4 bg-blue-500 flex items-center justify-center">
            <span class="text-white text-lg font-bold">Developer Section Name</span>
            </div>
            {/* <!-- ID Card Section --> */}
            <div class="h-3/4 bg-green-500 flex items-center justify-center">
            <span class="text-white text-lg font-bold">ID Card</span>
            </div>
        </div>

        {/* <!-- Right Column --> */}
        <div class="w-1/2 bg-gray-800 flex items-center justify-center">
            {/* <span class="text-white text-lg font-bold">Terminal</span> */}
            <Terminal/>
        </div>
        </div>
    </>
  )
}

export default Developer