export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags?: string[];
  spice?: 'Mild' | 'Medium' | 'Hot';
};

export type Cuisine = {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  eyebrow: string;
  headline: string;
  description: string;
  story: string;
  accent: string;
  deep: string;
  paper: string;
  sand: string;
  text: string;
  muted: string;
  border: string;
  hero: string;
  detail: string;
  signatureIds: string[];
  categories: string[];
  dishes: Dish[];
};

const south: Dish[] = [
  { id: 'si-01', name: 'Ghee Roast Dosa', description: 'Paper-thin dosa, cultured ghee, coconut chutney and sambar.', price: 320, category: 'Breakfast', image: '/images/south-indian.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'si-02', name: 'Appam & Vegetable Stew', description: 'Lacy rice hoppers with a gentle coconut milk stew.', price: 360, category: 'Breakfast', image: '/images/south-detail.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
  { id: 'si-03', name: 'Malabar Prawn Curry', description: 'Coastal prawns simmered with kokum, curry leaf and roasted spice.', price: 620, category: 'Mains', image: '/images/south-detail.jpeg', tags: ['Seafood'], spice: 'Medium' },
  { id: 'si-04', name: 'Kerala Sadya', description: 'A seasonal plant-led feast with thoran, avial, pachadi and rice.', price: 540, category: 'Mains', image: '/images/south-indian.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Medium' },
  { id: 'si-05', name: 'Mysore Masala Dosa', description: 'Crisp fermented crepe, red chutney, potato and fresh coriander.', price: 340, category: 'Breakfast', image: '/images/south-indian.jpeg', tags: ['Vegetarian'], spice: 'Medium' },
  { id: 'si-06', name: 'Pepper Chicken Sukka', description: 'Dry-roasted chicken with black pepper, coconut and curry leaves.', price: 510, category: 'Mains', image: '/images/south-detail.jpeg', tags: ['Chef favourite'], spice: 'Hot' },
  { id: 'si-07', name: 'Filter Kaapi Crème', description: 'A silky coffee custard with a crisp jaggery tuile.', price: 240, category: 'Desserts', image: '/images/south-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'si-08', name: 'Tender Coconut Payasam', description: 'Chilled tender coconut, cardamom and toasted cashew.', price: 260, category: 'Desserts', image: '/images/south-detail.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
];
const north: Dish[] = [
  { id: 'ni-01', name: 'Dum Murgh Biryani', description: 'Fragrant basmati, saffron, slow-cooked chicken and mint.', price: 520, category: 'Mains', image: '/images/north-indian.jpeg', tags: ['Chef favourite'], spice: 'Medium' },
  { id: 'ni-02', name: 'Dal Bukhara', description: 'Black lentils simmered overnight with tomato and cultured butter.', price: 420, category: 'Mains', image: '/images/north-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'ni-03', name: 'Paneer Tikka', description: 'Tandoor-charred paneer, hung curd, ajwain and mint chutney.', price: 390, category: 'Starters', image: '/images/north-detail.jpeg', tags: ['Vegetarian'], spice: 'Medium' },
  { id: 'ni-04', name: 'Old Delhi Butter Chicken', description: 'Tandoor chicken in a slow-reduced tomato and makhani sauce.', price: 560, category: 'Mains', image: '/images/north-indian.jpeg', tags: ['Signature'], spice: 'Medium' },
  { id: 'ni-05', name: 'Galouti Kebab', description: 'Delicate spiced kebab, saffron milk bread and pickled onion.', price: 460, category: 'Starters', image: '/images/north-detail.jpeg', tags: ['Chef favourite'], spice: 'Mild' },
  { id: 'ni-06', name: 'Roomali Roti Basket', description: 'Hand-stretched roomali, tandoori naan and flaky lachha paratha.', price: 180, category: 'Sides', image: '/images/north-indian.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'ni-07', name: 'Shahi Tukda', description: 'Saffron-soaked bread, reduced milk, pistachio and rose.', price: 260, category: 'Desserts', image: '/images/north-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'ni-08', name: 'Kesar Phirni', description: 'Chilled ground-rice pudding scented with saffron and cardamom.', price: 230, category: 'Desserts', image: '/images/north-detail.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
];
const japanese: Dish[] = [
  { id: 'jp-01', name: 'Chef’s Nigiri Selection', description: 'Six pieces, seasonal fish, warm rice and freshly grated wasabi.', price: 780, category: 'Sushi', image: '/images/japanese.jpeg', tags: ['Seafood'], spice: 'Mild' },
  { id: 'jp-02', name: 'Shoyu Ramen', description: 'Clear soy broth, springy noodles, ajitama egg and scallion oil.', price: 540, category: 'Mains', image: '/images/japanese-detail.jpeg', tags: ['Chef favourite'], spice: 'Mild' },
  { id: 'jp-03', name: 'Crispy Vegetable Gyoza', description: 'Pan-seared dumplings, sesame ponzu and ginger.', price: 340, category: 'Small Plates', image: '/images/japanese-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'jp-04', name: 'Miso Glazed Black Cod', description: 'Silky cod, white miso, pickled cucumber and steamed rice.', price: 980, category: 'Mains', image: '/images/japanese.jpeg', tags: ['Seafood'], spice: 'Mild' },
  { id: 'jp-05', name: 'Crispy Prawn Tempura', description: 'Light rice-flour batter, tentsuyu and grated daikon.', price: 520, category: 'Small Plates', image: '/images/japanese-detail.jpeg', tags: ['Seafood'], spice: 'Mild' },
  { id: 'jp-06', name: 'Mushroom Donburi', description: 'Glazed seasonal mushrooms, rice, nori and toasted sesame.', price: 460, category: 'Mains', image: '/images/japanese-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'jp-07', name: 'Matcha Basque Cheesecake', description: 'A softly set cheesecake with ceremonial matcha and cream.', price: 320, category: 'Desserts', image: '/images/japanese-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'jp-08', name: 'Yuzu Sorbet', description: 'Bright Japanese citrus, served with candied peel.', price: 220, category: 'Desserts', image: '/images/japanese-detail.jpeg', tags: ['Vegan', 'Gluten-free'], spice: 'Mild' },
];
const french: Dish[] = [
  { id: 'fr-01', name: 'Ratatouille à la Provençale', description: 'Slow-roasted summer vegetables, thyme and basil oil.', price: 420, category: 'Entrées', image: '/images/french.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
  { id: 'fr-02', name: 'Wild Mushroom Vol-au-vent', description: 'Flaky pastry, woodland mushrooms and a light cream sauce.', price: 480, category: 'Entrées', image: '/images/french-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'fr-03', name: 'Confit de Canard', description: 'Slow-cooked duck leg, pommes fondantes and orange jus.', price: 890, category: 'Plats', image: '/images/french-detail.jpeg', tags: ['Signature'], spice: 'Mild' },
  { id: 'fr-04', name: 'Boeuf Bourguignon', description: 'Red-wine braised beef, pearl onions and buttered carrots.', price: 820, category: 'Plats', image: '/images/french.jpeg', tags: ['Chef favourite'], spice: 'Mild' },
  { id: 'fr-05', name: 'Soupe à l’Oignon', description: 'Slow-caramelised onion broth, toasted sourdough and gruyère.', price: 360, category: 'Entrées', image: '/images/french-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'fr-06', name: 'Herb Butter Pommes', description: 'Golden potatoes with parsley, garlic and cultured butter.', price: 220, category: 'Sides', image: '/images/french.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
  { id: 'fr-07', name: 'Crème Brûlée', description: 'Vanilla bean custard under a delicate caramelised crust.', price: 280, category: 'Desserts', image: '/images/french-detail.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
  { id: 'fr-08', name: 'Pistachio Macaron Duo', description: 'Two almond shells with pistachio ganache and a hint of rose.', price: 240, category: 'Desserts', image: '/images/french-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
];
const italian: Dish[] = [
  { id: 'it-01', name: 'Tagliatelle al Ragù', description: 'Silky ribbons of pasta, slow-braised ragù and aged parmesan.', price: 560, category: 'Pasta', image: '/images/italian.jpeg', tags: ['Signature'], spice: 'Mild' },
  { id: 'it-02', name: 'Burrata e Pomodori', description: 'Creamy burrata, heirloom tomatoes, basil and olive oil.', price: 480, category: 'Antipasti', image: '/images/italian-detail.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
  { id: 'it-03', name: 'Wild Mushroom Risotto', description: 'Arborio rice, roasted mushrooms, parmesan and thyme.', price: 520, category: 'Pasta & Rice', image: '/images/italian-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'it-04', name: 'Margherita al Forno', description: 'Slow-fermented crust, San Marzano tomato, mozzarella and basil.', price: 460, category: 'Pizza', image: '/images/italian.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'it-05', name: 'Lemon Butter Sea Bass', description: 'Pan-seared sea bass, caper butter and seasonal greens.', price: 820, category: 'Secondi', image: '/images/italian-detail.jpeg', tags: ['Seafood', 'Gluten-free'], spice: 'Mild' },
  { id: 'it-06', name: 'Rosemary Focaccia', description: 'Warm, dimpled focaccia with rosemary and Ligurian olive oil.', price: 180, category: 'Antipasti', image: '/images/italian.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'it-07', name: 'Classic Tiramisu', description: 'Espresso-soaked savoiardi, mascarpone and fine cocoa.', price: 280, category: 'Dolci', image: '/images/italian-detail.jpeg', tags: ['Vegetarian'], spice: 'Mild' },
  { id: 'it-08', name: 'Panna Cotta', description: 'Vanilla cream, seasonal berry compote and almond crumble.', price: 260, category: 'Dolci', image: '/images/italian-detail.jpeg', tags: ['Vegetarian', 'Gluten-free'], spice: 'Mild' },
];

export const cuisines: Cuisine[] = [
  { id: 'south-indian', name: 'South Indian', shortName: 'South', subtitle: 'Malabar heritage', eyebrow: '01 / ROOTED IN TRADITION', headline: 'Rooted in the rhythm of the coast.', description: 'A soulful expression of the south, where coconut, curry leaf and coastal spice tell stories passed between generations.', story: 'From the first crackle of a dosa to the slow warmth of a coastal curry, this is a cuisine shaped by monsoon, memory and the generosity of the table.', accent: '#68775c', deep: '#394737', paper: '#f5f0e5', sand: '#dccdb5', text: '#283127', muted: '#777d6c', border: '#d8d7c8', hero: '/images/south-indian.jpeg', detail: '/images/south-detail.jpeg', signatureIds: ['si-01','si-03','si-07'], categories: ['All','Breakfast','Starters','Mains','Sides','Desserts'], dishes: south },
  { id: 'north-indian', name: 'North Indian', shortName: 'North', subtitle: 'Smoked cardamom', eyebrow: '02 / DEPTH, FIRE & TIME', headline: 'Depth, fire, and time.', description: 'From the tandoor’s quiet heat to gravies left to deepen overnight, every plate honours the art of patience.', story: 'A cuisine of generous aromas and layered spice: smoke, slow heat, fresh herbs and the comfort of bread shared across the table.', accent: '#8b765e', deep: '#403a32', paper: '#f3ebdd', sand: '#b5a18a', text: '#332d27', muted: '#817565', border: '#ddd0bd', hero: '/images/north-indian.jpeg', detail: '/images/north-detail.jpeg', signatureIds: ['ni-01','ni-04','ni-07'], categories: ['All','Starters','Mains','Sides','Desserts'], dishes: north },
  { id: 'japanese', name: 'Japanese', shortName: 'Japan', subtitle: 'Muted matcha', eyebrow: '03 / ART IN EVERY BITE', headline: 'Quiet precision. Remarkable flavour.', description: 'A thoughtful balance of season, texture and restraint, where the smallest details make the deepest impression.', story: 'Our Japanese table follows the seasons: pristine ingredients, careful technique and a belief that simplicity leaves room for flavour to speak.', accent: '#929982', deep: '#42483e', paper: '#f4f2e9', sand: '#d9d6ca', text: '#292b27', muted: '#777d70', border: '#d8d8cd', hero: '/images/japanese.jpeg', detail: '/images/japanese-detail.jpeg', signatureIds: ['jp-01','jp-02','jp-07'], categories: ['All','Small Plates','Sushi','Mains','Desserts'], dishes: japanese },
  { id: 'french', name: 'French', shortName: 'France', subtitle: 'Parisian elegance', eyebrow: '04 / AN ART OF RESTRAINT', headline: 'An art of flavour and restraint.', description: 'Classic technique meets a lighter touch: delicate sauces, seasonal produce and beauty in the details.', story: 'Inspired by the bistro and the grand table alike, French cooking here is measured, seasonal and quietly expressive.', accent: '#7d8791', deep: '#41454a', paper: '#f3f0eb', sand: '#d5d1cb', text: '#303439', muted: '#7a7d82', border: '#d7d5d1', hero: '/images/french.jpeg', detail: '/images/french-detail.jpeg', signatureIds: ['fr-01','fr-03','fr-07'], categories: ['All','Entrées','Plats','Sides','Desserts'], dishes: french },
  { id: 'italian', name: 'Italian', shortName: 'Italy', subtitle: 'Olive & sun-washed stone', eyebrow: '05 / A SLOWER KIND OF INDULGENCE', headline: 'A slower kind of indulgence.', description: 'Honest ingredients, handmade pasta and sun-warmed flavours, made for lingering a little longer.', story: 'Our Italian kitchen celebrates the beauty of doing less, well: excellent olive oil, seasonal produce, patient dough and dishes made to be passed around.', accent: '#777b5c', deep: '#454a36', paper: '#f3ebdd', sand: '#e4d7c4', text: '#303327', muted: '#797b67', border: '#d8d2c2', hero: '/images/italian.jpeg', detail: '/images/italian-detail.jpeg', signatureIds: ['it-01','it-02','it-07'], categories: ['All','Antipasti','Pasta','Pasta & Rice','Pizza','Secondi','Dolci'], dishes: italian },
];

export const getCuisine = (id: string | undefined) => cuisines.find((cuisine) => cuisine.id === id);
export const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
