import { NextResponse } from 'next/server';

// Define the Animal interface
interface Animal {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  habitat: string;
  diet: string;
}

// Sample animal data
const animals: Animal[] = [
  {
    id: 1,
    name: "Lions",
    description: "The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail.",
    image: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&w=800&h=600&fit=crop",
    category: "Mammal",
    habitat: "Savanna",
    diet: "Carnivore"
  },
  {
    id: 2,
    name: "Elephant",
    description: "Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant.",
    image: "https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg?auto=compress&w=800&h=600&fit=crop",
    category: "Mammal",
    habitat: "Savanna, Forest",
    diet: "Herbivore"
  },
  {
    id: 3,
    name: "Giraffe",
    description: "The giraffe is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species.",
    image: "https://images.pexels.com/photos/6672042/pexels-photo-6672042.jpeg?auto=compress&w=800&h=600&fit=crop",
    category: "Mammal",
    habitat: "Savanna",
    diet: "Herbivore"
  },
  {
    id: 4,
    name: "Penguin",
    description: "Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galápagos penguin, found north of the equator.",
    image: "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&w=800&h=600&fit=crop",
    category: "Bird",
    habitat: "Antarctic, Coastal",
    diet: "Carnivore"
  },
  {
    id: 5,
    name: "Dolphin",
    description: "Dolphins are highly intelligent marine mammals known for their playful behavior and complex social structures. They are found in oceans worldwide.",
    image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&w=800&h=600&fit=crop",
    category: "Mammal",
    habitat: "Ocean",
    diet: "Carnivore"
  },
  {
    id: 6,
    name: "Tiger",
    description: "The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside.",
    image: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&w=800&h=600&fit=crop",
    category: "Mammal",
    habitat: "Forest, Grassland",
    diet: "Carnivore"
  },
  {
    id: 7,
    name: "Panda",
    description: "The giant panda, also known as the panda bear, is a bear native to South Central China. It is characterised by its bold black-and-white coat and rotund body.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=800&h=600&fit=crop",
    category: "Mammal",
    habitat: "Bamboo Forest",
    diet: "Herbivore"
  },

];

// GET endpoint to fetch all animals
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: animals,
      count: animals.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch animals' },
      { status: 500 }
    );
  }
}

// POST endpoint to add a new animal
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.description || !body.image) {
      return NextResponse.json(
        { success: false, error: 'Name, description, and image are required' },
        { status: 400 }
      );
    }

    const newAnimal: Animal = {
      id: animals.length + 1,
      name: body.name,
      description: body.description,
      image: body.image,
      category: body.category || 'Unknown',
      habitat: body.habitat || 'Unknown',
      diet: body.diet || 'Unknown'
    };

    animals.push(newAnimal);

    return NextResponse.json({
      success: true,
      data: newAnimal,
      message: 'Animal added successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to add animal' },
      { status: 500 }
    );
  }
} 