export interface WorkItem {
  id: number;
  title: string;
  year: string;
  medium: string;
  image: string; // used for grid thumbnail; cropped to square via CSS
  dimensions: string;
}

// Seeded with placeholder metadata. Edit titles/years/mediums as you like.
export const works: WorkItem[] = [
  {
    id: 1,
    title: "Rain",
    year: "2024",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/Shay_Strong_Rain.png",
    dimensions: "110 cm x 116 cm",
  },
  {
    id: 2,
    title: "Ocean",
    year: "2023",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/costa_rica.png",
    dimensions: "91 cm x 91 cm",
  },
  {
    id: 3,
    title: "Peep-sicle",
    year: "2010",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/peep.png",
    dimensions: "91 cm x 91 cm",
  },
  {
    id: 4,
    title: "Tardigrade with Lasers",
    year: "2023",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/Shay_Strong_Tardigrade.png",
    dimensions: "116 cm x 100 cm",
  },
  {
    id: 5,
    title: "Stella in a Vortex",
    year: "2024",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/Shay_Strong_Stella.png",
    dimensions: "100 cm x 116 cm",
  },
  {
    id: 6,
    title: "Cloud",
    year: "2020",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/cloud.png",
    dimensions: "76 cm x 122 cm",
  },
  {
    id: 7,
    title: "Bust of a Lady in the Louvre",
    year: "2022",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/statue.png",
    dimensions: "61 cm x 51 cm",
  },
  {
    id: 8,
    title: "Graffiti: Olivia Was Here",
    year: "2025",
    medium: "Oil on Thrifted Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/grafitti.png",
    dimensions: "59 cm x 80 cm",
  },
  {
    id: 9,
    title: "Zelda Sunshine",
    year: "2022",
    medium: "Oil on Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/zelda.png",
    dimensions: "44 cm x 44 cm",
  },
  {
    id: 10,
    title: "A Finnish Farm",
    year: "2024",
    medium: "Oil on Thrifted Canvas",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/farm.png",
    dimensions: "27 cm x 54 cm",
  },
  {
    id: 11,
    title: "Faceless Worm",
    year: "2022",
    medium: "Pastel on Paper",
    image: "https://u0fouo6c7ertwzvx.public.blob.vercel-storage.com/Shay_Strong_Worm.png",
    dimensions: "62 cm x 62 cm",
  },

];


