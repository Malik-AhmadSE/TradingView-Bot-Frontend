import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from "@material-tailwind/react";

export default function HomePage() {
  const [symbolData, setSymbolData] = useState([]);

  useEffect(() => {
    const socket = io("https://f114-39-62-220-60.ngrok-free.app/");

    socket.on("connect", () => console.log("Socket.IO connection established"));
    socket.on("data", (data) => setSymbolData(data));
    socket.on("error", (error) => console.error("Socket.IO error:", error));
    socket.on("disconnect", () => console.log("Socket.IO connection closed"));

    return () => {
      socket.disconnect();
    };
  }, []);
  // const symbolData = [
  //   { symbol: "AAPL", price: "$150.50", type: "Stock", time: "10:30 AM" },
  //   { symbol: "GOOGL", price: "$2750.00", type: "Stock", time: "10:45 AM" },
  //   { symbol: "BTC", price: "$34,500.75", type: "Crypto", time: "11:00 AM" },
  //   { symbol: "ETH", price: "$2,200.30", type: "Crypto", time: "11:15 AM" },
  //   { symbol: "TSLA", price: "$720.10", type: "Stock", time: "11:30 AM" },
  //   { symbol: "AMZN", price: "$3,340.20", type: "Stock", time: "11:45 AM" },
  //   { symbol: "DOGE", price: "$0.25", type: "Crypto", time: "12:00 PM" },
  // ];

  return (
    <div className="flex flex-col gap-16 p-4 sm:p-8">
      <Card className="w-full bg-gradient-to-b from-[#00344C] via-[black] to-[#00405B] text-white">
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            Api key:
          </Typography>
          <Typography className="text-gray-400">Your key here</Typography>
          <Typography variant="h5" color="white" className="mb-2">
            Secret key:
          </Typography>
          <Typography className="text-gray-400">
            Your secret key here
          </Typography>
          <Typography variant="h5" color="white" className="mb-2">
            Trade type:
          </Typography>
          <Typography className="text-gray-400">
            Your trade type here
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 text-center">
          <Button
            onClick={() => (window.location.href = "/settings")}
            size="md"
            className="rounded-full"
          >
            Change keys
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full bg-gradient-to-b from-[#00344C] via-[black] to-[#00405B] text-white">
        <CardHeader
          variant="gradient"
          color="white"
          className="grid h-14 place-items-center rounded-full"
        >
          <Typography color="black" className="text-lg sm:text-xl font-sans">
            Logs
          </Typography>
        </CardHeader>
        <CardBody>
          {symbolData.length > 0 ? (
            <Card className="overflow-scroll bg-transparent">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-gray-600 font-bold">
                      Index
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-gray-600 font-bold">
                      Symbol
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-gray-600 font-bold">
                      Price
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-gray-600 font-bold">
                      Type
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-gray-600 font-bold">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {symbolData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 text-white hover:text-black"
                    >
                      <td className="border border-gray-200 px-4 py-2 font-medium">
                        {index}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 font-medium">
                        {item.symbol || "Loading..."}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 font-medium">
                        {item.price || "Loading..."}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 font-medium">
                        {item.type || "Loading..."}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 font-medium">
                        {item.time || "Loading..."}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          ) : (
            <Typography className="text-gray-400 text-center">
              No logs data available
            </Typography>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
