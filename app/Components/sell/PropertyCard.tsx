import Image from "next/image";


interface Property {
 id: number;
  title: string;
  description: string;
  location: string;
  price: string;
  image: string;
}


export default function PropertyCard( property : Property) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          width={500}
          height={500}
          
          className="  w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <p className="text-gray-500 text-sm mb-2">{property.location}</p>
          <p className="text-gray-700 mb-4">{property.description}</p>
          <p className="font-bold text-blue-600">{property.price}</p>
        </div>
      </div>
    );
  }
  