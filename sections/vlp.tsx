import { ImageWidget } from 'apps/admin/widgets.ts';

interface Vehicle {
  id: string;
  name: string;
  price: string;
  image: string;
  year: string;
  mileage: string;
  transmission: string;
  fuel: string;
}

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  vehicles?: Vehicle[];
  itemsPerPage?: number;
}

export default function VehicleList({
  title = "Our Vehicle Inventory",
  description = "Browse through our wide selection of quality vehicles.",
  vehicles = [],
  itemsPerPage = 9,
}: Props) {
  return (
    <section class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-4">{title}</h1>
      <p class="text-lg text-center mb-8">{description}</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.slice(0, itemsPerPage).map((vehicle) => (
          <div key={vehicle.id} class="card bg-base-100 shadow-xl">
            <figure>
              <img src={vehicle.image} alt={vehicle.name} class="w-full h-48 object-cover" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{vehicle.name}</h2>
              <p class="text-xl font-semibold">{vehicle.price}</p>
              <div class="flex flex-wrap gap-2 mt-2">
                <span class="badge badge-outline">{vehicle.year}</span>
                <span class="badge badge-outline">{vehicle.mileage} km</span>
                <span class="badge badge-outline">{vehicle.transmission}</span>
                <span class="badge badge-outline">{vehicle.fuel}</span>
              </div>
              <div class="card-actions justify-end mt-4">
                <button class="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {vehicles.length > itemsPerPage && (
        <div class="text-center mt-8">
          <button class="btn btn-outline">Load More</button>
        </div>
      )}
    </section>
  );
}