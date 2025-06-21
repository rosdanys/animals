# Animal Kingdom API

A beautiful Next.js application that showcases animals with images, names, descriptions, and detailed information. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🦁 **Animal Gallery**: Beautiful grid layout displaying animal cards
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean and modern design with smooth animations
- 🔍 **Animal Details**: Complete information including habitat, diet, and category
- 📊 **Statistics**: Real-time animal statistics
- 🚀 **Fast API**: Built with Next.js App Router for optimal performance

## API Endpoints

### Get All Animals
```
GET /api/animals
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Lion",
      "description": "The lion is a large cat of the genus Panthera...",
      "image": "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
      "category": "Mammal",
      "habitat": "Savanna",
      "diet": "Carnivore"
    }
  ],
  "count": 8
}
```

### Get Animal by ID
```
GET /api/animals/[id]
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Lion",
    "description": "The lion is a large cat of the genus Panthera...",
    "image": "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
    "category": "Mammal",
    "habitat": "Savanna",
    "diet": "Carnivore"
  }
}
```

### Add New Animal
```
POST /api/animals
```

**Request Body:**
```json
{
  "name": "Tiger",
  "description": "The tiger is the largest living cat species...",
  "image": "https://example.com/tiger.jpg",
  "category": "Mammal",
  "habitat": "Forest",
  "diet": "Carnivore"
}
```

### Update Animal
```
PUT /api/animals/[id]
```

### Delete Animal
```
DELETE /api/animals/[id]
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd animal-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
animal-api/
├── app/
│   ├── api/
│   │   └── animals/
│   │       ├── route.ts          # Main animals API
│   │       └── [id]/
│   │           └── route.ts      # Individual animal API
│   │       ├── globals.css               # Global styles
│   │       ├── layout.tsx                # Root layout
│   │       └── page.tsx                  # Home page
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── next.config.js
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Unsplash Images** - High-quality animal photos

## Available Animals

The API includes 8 sample animals:
- 🦁 Lion
- 🐘 Elephant  
- 🦒 Giraffe
- 🐧 Penguin
- 🐬 Dolphin
- 🐯 Tiger
- 🐼 Panda
- 🦅 Eagle

## Customization

### Adding New Animals

You can add new animals by:

1. **Using the API**: Send a POST request to `/api/animals`
2. **Editing the code**: Add animals to the `animals` array in the API route files

### Styling

The application uses Tailwind CSS. You can customize the design by:
- Modifying `tailwind.config.js`
- Updating classes in the React components
- Adding custom CSS in `globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS 