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
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://backend.primexauto.com/api/getkeys");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }else{
        const result = await response.json();
        setData(result.result);
        console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const socket = io("http://backend.primexauto.com");
    socket.on("connect", () => console.log("Socket.IO connection established"));
    socket.on("data", (data) => {setSymbolData(data.data)});
    socket.on("error", (error) => console.error("Socket.IO error:", error));
    socket.on("disconnect", () => console.log("Socket.IO connection closed"));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col gap-16 p-4 sm:p-8">
      <Card className="w-full bg-white text-black">
        <CardBody>
          <Typography variant="h5" color="" className="mb-2">
            Api key:
          </Typography>
          <Typography className="text-gray-800">
            {data.api_key ? data.api_key : "Your key here"}
          </Typography>

          <Typography variant="h5" color="" className="mb-2">
            Secret key:
          </Typography>
          <Typography className="text-gray-800">
            {data.api_sec ? data.api_sec : "Your secret key here"}
          </Typography>

          <Typography variant="h5" color="" className="mb-2">
            Trade type:
          </Typography>
          <Typography className="text-gray-800">
            {data.type ? data.type : "Your Trade Type Here"}
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

      <Card className="w-full bg-white text-black">
        <CardHeader
          variant="gradient"
          color=""
          className="grid h-14 place-items-center rounded-full bg-gradient-to-r from-[#B4B8BB] via-[white] to-[#B4B8BB]"
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
                    <th className="border border-gray-700 px-4 py-2 text-black font-bold">
                      Index
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-black font-bold">
                      Symbol
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-black font-bold">
                      Signal
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-black font-bold">
                      Price
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-black font-bold">
                      Type
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-black font-bold">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {symbolData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 text-gray-600 hover:text-black"
                    >
                      <td className="border border-gray-700 px-4 py-2 font-medium">
                        {index}
                      </td>
                      <td className="border border-gray-700 px-4 py-2 font-medium">
                        {item.Symbol || "Loading..."}
                      </td>
                      <td className="border border-gray-700 px-4 py-2 font-medium">
                        {item.Signal || "Loading..."}
                      </td>
                      <td className="border border-gray-700 px-4 py-2 font-medium">
                        {item.Price || "Loading..."}
                      </td>
                      <td className="border border-gray-700 px-4 py-2 font-medium">
                        {item.type || "Loading..."}
                      </td>
                      <td className="border border-gray-700 px-4 py-2 font-medium">
                        {item.Time || "Loading..."}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          ) : (
            <Typography className="text-gray-800 text-center">
              No logs data available
            </Typography>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
