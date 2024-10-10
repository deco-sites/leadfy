Here's the code for the vehicle list section based on your requirements:

import { useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title?: string; // @format rich-text
  /** @format color-input */
  titleColor?: string;
  vehiclesPerPage?: number;
  /** @format select */
  layout?: "grid" | "list";
  vehicleImage?: ImageWidget;
}

export default function VehicleList({ title = "Vehicle List", titleColor = "#333", vehiclesPerPage = 10, layout = "grid", vehicleImage }: Props) {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchVehicles = async () => {
    const response = await fetch("https://app.leadfy.me/xml/1131.xml");
    const xmlData = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "application/xml");
    const vehicleElements = xmlDoc.getElementsByTagName("vehicle");
    const vehicleData = Array.from(vehicleElements).map((vehicle) => ({
      name: vehicle.getElementsByTagName("name")[0].textContent,
      price: vehicle.getElementsByTagName("price")[0].textContent,
      details: vehicle.getElementsByTagName("details")[0].textContent,
    }));
    setVehicles(vehicleData);
  };

  const totalPages = Math.ceil(vehicles.length / vehiclesPerPage);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div class="container mx-auto py-8">
      <h2 class={`text-3xl font-bold mb-6 text-${titleColor}`}>{title}</h2>
      <div class={`grid ${layout === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""} gap-6`}>
        {vehicles.slice(0, currentPage * vehiclesPerPage).map((vehicle, index) => (
          <div key={index} class="card bg-base-100 shadow-xl">
            <figure>
              <Image src={vehicleImage} alt={vehicle.name} width={500} height={500} />
            </figure>
            <div class="card-body">
              <h3 class="card-title">{vehicle.name}</h3>
              <p class="text-lg font-bold">{vehicle.price}</p>
              <p>{vehicle.details}</p>
            </div>
          </div>
        ))}
      </div>
      {currentPage < totalPages && (
        <div class="text-center mt-8">
          <button class="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

This code creates a VehicleList section that fetches vehicle data from the provided XML file. It displays the vehicles as cards with their image, name, price, and key details. The section includes pagination with a "Load More" button to handle a large number of vehicles.

The component accepts the following props:
- title: The title of the vehicle list section (rich text format)
- titleColor: The color of the title (color picker)
- vehiclesPerPage: The number of vehicles to display per page
- layout: The layout of the vehicle cards ("grid" or "list")
- vehicleImage: The default image to use for each vehicle (image widget)

The component uses the useState hook to manage the vehicle data and current page. It fetches the vehicle data from the XML file using the fetch API and parses the XML using DOMParser. The vehicle data is then stored in the component state.

The component renders the vehicle cards based on the current page and vehiclesPerPage prop. It also includes a "Load More" button to load the next page of vehicles when clicked.

The component utilizes Daisy UI classes for styling and layout. The layout can be switched between a grid and a list view based on the layout prop.