import PropertyCard from "@/app/Components/sell/PropertyCard";


const properties = [
  {
    id: 1,
    title: 'Appartamento in centro a Bibione',
    description: 'Trilocale luminoso a pochi passi dal mare con terrazza privata.',
    location: 'Via delle Rose, 12 - Bibione',
    price: '€220.000',
    image: 'https://images.unsplash.com/flagged/photo-1556438758-8be0c4afe990?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Condominio moderno vicino alle terme',
    description: 'Bilocale moderno con posto auto e piscina condominiale.',
    location: 'Via delle Terme, 4 - Bibione',
    price: '€185.000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Attico vista mare',
    description: 'Ampio attico con 2 terrazze e vista panoramica sul litorale.',
    location: 'Via del Mare, 99 - Bibione',
    price: '€310.000',
    image: 'https://plus.unsplash.com/premium_photo-1661962346904-8a489ef9b9e7?q=80&w=1658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function SalePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Compravendita Appartamenti</h1>
      <p className="text-gray-600 mb-10">
        Scopri gli appartamenti in vendita a Bibione. Abbiamo selezionato per te le migliori soluzioni abitative.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
