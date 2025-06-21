'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

interface Animal {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  habitat: string;
  diet: string;
}

export default function AnimalDetail() {
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
  const animalId = params.id;

  useEffect(() => {
    if (animalId) {
      fetchAnimal();
    }
  }, [animalId]);

  const fetchAnimal = async () => {
    try {
      const response = await fetch(`/api/animals/${animalId}`);
      const data = await response.json();
      
      if (data.success) {
        setAnimal(data.data);
      } else {
        setError(data.error || 'Failed to fetch animal');
      }
    } catch (err) {
      setError('Failed to fetch animal');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading animal details...</p>
        </div>
      </div>
    );
  }

  if (error || !animal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
          <p className="text-gray-600">{error || 'Animal not found'}</p>
          <button 
            onClick={handleBackToHome}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Back to Home
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
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackToHome}
              className="flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Animals
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              Animal Details
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96 w-full">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {animal.name}
                  </h2>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {animal.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About {animal.name}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {animal.description}
              </p>
            </div>

            {/* Animal Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Habitat</h4>
                <p className="text-gray-700">{animal.habitat}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Diet</h4>
                <p className="text-gray-700">{animal.diet}</p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">Quick Facts</h4>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <strong>Category:</strong> {animal.category}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <strong>Habitat:</strong> {animal.habitat}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <strong>Diet:</strong> {animal.diet}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <strong>Animal ID:</strong> #{animal.id}
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBackToHome}
                className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
              >
                Back to All Animals
              </button>
              <button 
                onClick={() => window.open(animal.image, '_blank')}
                className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-semibold"
              >
                View Full Image
              </button>
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