'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Animal {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  habitat: string;
  diet: string;
}

export default function Home() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await fetch('/api/animals');
      const data = await response.json();
      
      if (data.success) {
        setAnimals(data.data);
      } else {
        setError(data.error || 'Failed to fetch animals');
      }
    } catch (err) {
      setError('Failed to fetch animals');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (animalId: number) => {
    router.push(`/animals/${animalId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading animals...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={fetchAnimals}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🦁 Animal Kingdom
            </h1>
            <p className="text-lg text-gray-600">
              Discover amazing animals from around the world
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {animal.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {animal.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {animal.description}
                </p>

                {/* Animal Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-16">Habitat:</span>
                    <span className="text-gray-700 font-medium">{animal.habitat}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-16">Diet:</span>
                    <span className="text-gray-700 font-medium">{animal.diet}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button 
                  onClick={() => handleViewDetails(animal.id)}
                  className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 inline-block">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Animal Statistics
            </h3>
            <div className="flex space-x-8">
              <div>
                <p className="text-2xl font-bold text-green-500">{animals.length}</p>
                <p className="text-sm text-gray-600">Total Animals</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">
                  {animals.filter(a => a.category === 'Mammal').length}
                </p>
                <p className="text-sm text-gray-600">Mammals</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-500">
                  {animals.filter(a => a.category === 'Bird').length}
                </p>
                <p className="text-sm text-gray-600">Birds</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 Animal Kingdom API. Built with Next.js and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
} 