import React, { useEffect, useState } from "react";
import io from 'socket.io-client';

export default function HomePage() {
  const [symbolData, setSymbolData] = useState([]); // Updated to store an array of data

  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('connect', () => {
      console.log('Socket.IO connection established');
    });

    // Listen for 'data' event and update state with the received array
    socket.on('data', (data) => {
      console.log('Received data:', data);
      setSymbolData(data);  // Store the entire array received from backend
    });

    socket.on('error', (error) => {
      console.error('Socket.IO error:', error);
    });

    socket.on('disconnect', () => {
      console.log('Socket.IO connection closed');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="relative max-lg:row-start-1 col-span-4">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
              Information
            </p>
            <p className="mt-2 text-sm font-medium tracking-tight text-gray-950 max-lg:text-center">
              You can change this specific Information Just go to the Setting
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              <span className=" font-bold">API KEY : </span>
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              <span className=" font-bold">SECRET KEY : </span>
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              <span className=" font-bold">TRADE TYPE : </span>
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]"></div>
      </div>

      {/* Logs Section */}
      <div className="relative max-lg:row-start-3 col-span-4 lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Logs</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray- max-lg:text-center">
              Logs are the Order Triggered Data
            </p>
          </div>

          {/* Displaying the data array */}
          <div className="flex flex-col mt-8 flex-1 max-w-full max-h-[250px] overflow-scroll max-lg:py-6 lg:pb-2">
            {symbolData.length > 0 ? (
              symbolData.map((item, index) => (
                <div key={index} className="flex justify-between items-center gap-x-6 px-10 py-2">
                 <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-600">
                      <span className="font-medium text-black">{index}</span>
                    </h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-600">
                      Symbol:{" "}
                      <span className="font-medium text-black">{item.symbol || 'Loading...'}</span>
                    </h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-600">
                      Price:{" "}
                      <span className="font-medium text-black">{item.price || 'Loading...'}</span>
                    </h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-600">
                      Type:{" "}
                      <span className="font-medium text-black">{item.type || 'Loading...'}</span>
                    </h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-600">
                      Time:{" "}
                      <span className="font-medium text-black">{item.time || 'Loading...'}</span>
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available...</p>
            )}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-br-[2rem]"></div>
      </div>
    </>
  );
}
