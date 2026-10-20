import type { SiteContent } from "./types";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Famous+Sandwiches+1185+Cassat+Ave+Jacksonville+FL+32205&query_place_id=ChIJq7eUJVe45YgRA2v5qXwyDlo";
const YELP_URL = "https://www.yelp.com/biz/famous-sandwiches-jacksonville";

const PITA_SUB = (pita: number, sub: number) => [
  { label: "Pita or bread", price: pita },
  { label: '8" sub', price: sub },
];

const BURGER_COMBO = (burger: number, combo: number) => [
  { label: "Burger", price: burger },
  { label: "Combo", price: combo },
];

export const site: SiteContent = {
  name: "Famous Sandwiches",
  tagline: "Breakfast, pitas, subs & burgers on Cassat Avenue",
  description:
    "Famous Sandwiches is a Murray Hill breakfast and sandwich shop at 1185 Cassat Ave in Jacksonville, serving breakfast pitas, platters and pancakes until 11 AM, plus pitas, subs, burgers, platters and limeade. Dine in, use the drive-thru or call ahead. Open Monday–Saturday 5 AM–3 PM. Call (904) 384-4429.",
  opened: "1986",

  address: {
    street: "1185 Cassat Ave",
    suite: "",
    neighborhood: "Murray Hill",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32205",
    country: "US",
    full: "1185 Cassat Ave, Jacksonville, FL 32205",
  },
  locationHint: "On Cassat Avenue in Murray Hill, with a parking lot and a drive-thru.",

  geo: {
    latitude: 30.3032667,
    longitude: -81.7302861,
  },
  mapUrl: MAP_URL,

  phone: {
    display: "(904) 384-4429",
    tel: "tel:+19043844429",
    e164: "+19043844429",
  },

  closedNotice: "We're closed right now. We're open Monday–Saturday 5 AM–3 PM, with breakfast until 11 AM. Closed Sundays.",

  hours: {
    timezone: "America/New_York",
    summary: "Mon–Sat 5 AM–3 PM · Closed Sunday",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: "05:00", closeTime: "15:00" },
      tue: { openTime: "05:00", closeTime: "15:00" },
      wed: { openTime: "05:00", closeTime: "15:00" },
      thu: { openTime: "05:00", closeTime: "15:00" },
      fri: { openTime: "05:00", closeTime: "15:00" },
      sat: { openTime: "05:00", closeTime: "15:00" },
      sun: { openTime: null, closeTime: null, closed: true },
    },
  },

  priceRange: "$",
  paymentNote: "",

  orderingLinks: [{ label: "Call to order", href: "tel:+19043844429", kind: "phone" }],

  socials: [],

  rating: {
    value: 4.5,
    count: 1228,
    source: "Google",
    sourceUrl: MAP_URL,
  },

  extraRatings: [{ value: 4.2, count: 43, source: "Yelp", sourceUrl: YELP_URL }],

  testimonials: [
    {
      quote:
        "Staff is so friendly. Always support your small local businesses! Food was fantastic reminds me of when I was a kid.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "…I was not disappointed - delicious sandwich and perfect fries, and very reasonably priced.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "Nothing but good food, service, and a clean environment for a good price!",
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "The po-boy was served in a pita with plenty of perfectly cooked fried shrimp.",
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "Great place. Love the customer service. i've been going to this place for three years now.",
      sourceLabel: "Yelp",
      sourceUrl: YELP_URL,
    },
    {
      quote:
        "Pretty good and fast service. Clean environment as well and staff are friendly and pretty reasonable prices",
      sourceLabel: "Yelp",
      sourceUrl: YELP_URL,
    },
  ],

  faq: [
    {
      question: "What are your hours?",
      answer: "Monday through Saturday, 5 AM to 3 PM. We're closed on Sundays.",
    },
    {
      question: "Until what time do you serve breakfast?",
      answer: "Breakfast is served until 11 AM.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Call us at (904) 384-4429, order at the counter, or pull through the drive-thru. Eat in or take it to go.",
    },
    {
      question: "Do you have a drive-thru?",
      answer: "Yes. Pull through the drive-thru to order, or come inside to the counter.",
    },
    {
      question: "Can I get my sandwich on a pita or a sub?",
      answer:
        "Yes. Most sandwiches come in a pita or on bread, or on an 8-inch sub. Burgers can go in a pita or on a sub for a small extra charge.",
    },
    {
      question: "Where do I park?",
      answer: "There's a parking lot right at the shop at 1185 Cassat Ave.",
    },
  ],

  menuNote: "Prices are from our menu board and can change. Call (904) 384-4429 to confirm current prices.",

  menu: [
    {
      id: "breakfast-sandwiches",
      name: "Breakfast Sandwiches",
      description:
        "Served until 11 AM. Egg sandwiches include 2 XL eggs, in a pita or on bread, or on an 8-inch sub. Make it a combo with a hash brown and regular drink for $4.00.",
      items: [
        { id: "eggs-only-sandwich", name: "Eggs Only", sizes: PITA_SUB(4.89, 5.89) },
        {
          id: "eggs-sausage-bacon-ham-sandwich",
          name: "Eggs with Sausage, Bacon or Ham",
          description: "Choice of patty sausage, bacon or deli ham.",
          sizes: PITA_SUB(6.89, 7.89),
        },
        {
          id: "eggs-steak-ham-chicken-sandwich",
          name: "Eggs with Steak, Country Ham or Chicken",
          description:
            "Choice of country fried steak, country ham, link sausage, grilled chicken, roast beef or Philly chicken.",
          sizes: PITA_SUB(8.49, 9.49),
        },
        {
          id: "eggs-hamburger-turkey-sandwich",
          name: "Eggs with Hamburger or Turkey",
          description: "Choice of hamburger, turkey sausage or smoked turkey.",
          sizes: PITA_SUB(7.99, 8.99),
        },
        {
          id: "famous-philly-steak-breakfast",
          signature: true,
          name: "The Famous Philly Steak",
          description: "Philly steak with 2 XL eggs.",
          sizes: PITA_SUB(8.49, 9.49),
        },
        { id: "corn-beef-hash-sandwich", name: "Corn Beef Hash", sizes: PITA_SUB(8.49, 9.49) },
        { id: "shrimp-egg-sandwich", name: "Shrimp", description: "7 pieces.", sizes: PITA_SUB(8.99, 9.99) },
        { id: "grilled-ham-cheese", name: "Grilled Ham & Cheese", description: "No egg.", price: 5.99 },
        { id: "grilled-cheese", name: "Grilled Cheese", description: "No egg.", price: 3.99 },
        { id: "bagel", name: "Bagel", description: "Plain or with cream cheese.", price: 3.49 },
      ],
    },
    {
      id: "breakfast-platters",
      name: "Breakfast Platters",
      description: "Served until 11 AM. Platters include 2 XL eggs with grits and toast.",
      items: [
        { id: "eggs-no-meat-platter", name: "Eggs, No Meat", price: 6.99 },
        {
          id: "two-eggs-bacon-sausage-platter",
          name: "2 Eggs with Bacon, Sausage, Hamburger or Ham",
          description: "Choice of bacon, patty sausage, hamburger or deli ham.",
          price: 8.99,
        },
        {
          id: "two-eggs-pork-chop-fish-platter",
          name: "2 Eggs with Pork Chop, Fish or Country Ham",
          description:
            "Choice of link sausage, pork chop, corn beef hash, fish fillet, country ham or grilled chicken.",
          price: 9.99,
        },
        { id: "western-omelette-platter", name: "Western Omelette Eggs", price: 9.99 },
        { id: "turkey-sausage-platter", name: "Turkey Sausage Patty", price: 8.99 },
        { id: "philly-steak-roast-beef-platter", name: "Philly Steak or Roast Beef", price: 9.99 },
        {
          id: "country-fried-steak-platter",
          name: "Country Fried Steak",
          description: "Add gravy for $1 extra.",
          price: 9.99,
        },
        { id: "shrimp-breakfast-platter", name: "Shrimp", description: "12 pieces.", price: 11.99 },
      ],
    },
    {
      id: "breakfast-cups",
      name: "Breakfast Cups",
      description: "Served until 11 AM. 16 oz cups include 2 XL eggs with grits and toast.",
      items: [
        { id: "eggs-cup", name: "Eggs", description: "No meat.", price: 6.99 },
        {
          id: "eggs-meat-cup",
          name: "Eggs with Sausage, Bacon or Ham",
          description: "Choice of patty sausage, bacon or deli ham.",
          price: 8.99,
        },
        { id: "side-of-grits", name: "Side of Grits", description: "16 oz cup of grits only, no toast or meat.", price: 3.49 },
      ],
    },
    {
      id: "biscuits-gravy",
      name: "Biscuits & Gravy",
      description: "Served until 11 AM. Add an egg or biscuit for 99¢.",
      items: [
        { id: "egg-biscuit", name: "Egg Biscuit", description: "No meat.", price: 2.99 },
        {
          id: "meat-biscuit",
          name: "Biscuit with Sausage, Bacon or Ham",
          description: "Choice of patty sausage, bacon or deli ham.",
          price: 3.49,
        },
        {
          id: "egg-meat-biscuit",
          name: "Egg Biscuit with Sausage, Bacon or Ham",
          description: "Choice of patty sausage, bacon or deli ham.",
          price: 3.99,
        },
        { id: "biscuit-gravy-grits", name: "Biscuit, Gravy & Grits", price: 6.99 },
        {
          id: "biscuit-gravy-grits-sausage-bacon",
          name: "Biscuit, Gravy & Grits with Sausage or Bacon",
          description: "Choice of patty sausage or bacon.",
          price: 8.99,
        },
        {
          id: "biscuit-gravy-grits-pork-chop-fish",
          name: "Biscuit, Gravy & Grits with Pork Chop, Fish or Ham",
          description: "Choice of link sausage, pork chop, corn beef hash, fish or country ham.",
          price: 9.99,
        },
        {
          id: "biscuit-gravy-country-fried-steak",
          name: "Biscuit, Gravy & Country Fried Steak",
          description: "Add gravy on the steak for $1 extra.",
          price: 9.99,
        },
      ],
    },
    {
      id: "pancakes",
      name: "Pancakes",
      description: "Served until 11 AM. Pancakes include 3 cakes and 2 syrups. Add an egg or grits for 99¢.",
      items: [
        { id: "pancakes-only", name: "Pancakes Only", price: 6.99 },
        {
          id: "pancakes-sausage-bacon",
          name: "Pancakes with Sausage or Bacon",
          description: "Choice of patty sausage or bacon.",
          price: 8.99,
        },
        { id: "pancakes-turkey-sausage", name: "Pancakes with Turkey Sausage", price: 8.99 },
        {
          id: "pancakes-pork-chop-fish",
          name: "Pancakes with Pork Chop, Fish or Ham",
          description: "Choice of link sausage, pork chop, corn beef hash, fish fillet or country ham.",
          price: 9.99,
        },
        { id: "cakes-n-steak", name: "Cakes-N-Steak", description: "Add gravy for $1 extra.", price: 9.99 },
        { id: "pancakes-shrimp", name: "Pancakes & 12 Shrimp", price: 11.99 },
      ],
    },
    {
      id: "pitas-sandwiches-subs",
      name: "Pitas, Sandwiches & Subs",
      description:
        "In a pita or on bread, or on an 8-inch sub. Make it a combo for $4.00 medium, $5.00 large or $6.00 extra large.",
      items: [
        {
          id: "philly-steak",
          signature: true,
          name: "Philly Steak",
          sizes: PITA_SUB(7.99, 9.49),
        },
        { id: "camel-rider", signature: true, name: "Camel Rider", sizes: PITA_SUB(7.99, 8.99) },
        { id: "roast-beef", name: "Roast Beef", sizes: PITA_SUB(7.99, 8.99) },
        { id: "po-boy", name: "Po Boy", description: "10 shrimp.", sizes: PITA_SUB(8.99, 9.99) },
        { id: "philly-chicken", name: "Philly Chicken", sizes: PITA_SUB(7.99, 9.49) },
        { id: "grilled-chicken", name: "Grilled Chicken", sizes: PITA_SUB(7.99, 8.99) },
        { id: "chicken-tender", name: "Chicken Tender", sizes: PITA_SUB(7.99, 8.99) },
        { id: "fish-fillet", name: "Fish Fillet", sizes: PITA_SUB(7.99, 8.99) },
        { id: "tuna", name: "Tuna", sizes: PITA_SUB(7.99, 9.49) },
        { id: "porkchop", name: "Porkchop", description: "Bone-in. Pita or bread only.", price: 7.99 },
        { id: "blt", name: "BLT", description: "4 pieces of bacon on a pita, 6 on a sub.", sizes: PITA_SUB(7.49, 9.49) },
        { id: "turkey", name: "Turkey", description: "Smoked turkey.", sizes: PITA_SUB(7.99, 8.99) },
        { id: "ham", name: "Ham", sizes: PITA_SUB(7.99, 8.99) },
        { id: "ham-turkey-club", name: "Ham or Turkey Club", sizes: PITA_SUB(8.99, 9.99) },
        { id: "veggie", name: "Veggie", sizes: PITA_SUB(5.99, 6.99) },
        { id: "country-fried-steak-sandwich", name: "Country Fried Steak", sizes: PITA_SUB(7.99, 8.99) },
      ],
    },
    {
      id: "burgers-dogs",
      name: "Burgers & Dogs",
      description: "Get it in a pita for 50¢ or on a sub for $1.00. Chili or slaw extra.",
      items: [
        { id: "giant-hamburger", signature: true, name: "Giant Hamburger", sizes: BURGER_COMBO(4.99, 8.99) },
        { id: "double-cheeseburger", signature: true, name: "Double Cheeseburger", sizes: BURGER_COMBO(6.99, 10.99) },
        { id: "triple-cheeseburger", name: "Triple Cheeseburger", sizes: BURGER_COMBO(8.99, 12.99) },
        { id: "bacon-cheeseburger", name: "Bacon Cheeseburger", sizes: BURGER_COMBO(6.99, 10.99) },
        { id: "crispy-chicken", name: "Crispy Chicken", sizes: BURGER_COMBO(4.99, 8.99) },
        { id: "spicy-chicken", name: "Spicy Chicken", sizes: BURGER_COMBO(4.99, 8.99) },
        { id: "fried-corn-dog", name: "Fried Corn Dog", sizes: BURGER_COMBO(3.99, 7.99) },
        { id: "beef-hot-dog", name: "100% Beef Hot Dog", description: "Plain.", sizes: BURGER_COMBO(3.99, 7.99) },
        { id: "sausage-dog", name: '8" Sausage Dog', description: "Nettles sausage.", sizes: BURGER_COMBO(7.99, 11.99) },
        { id: "fish-sandwich", name: "Fish", description: "Cod." },
      ],
    },
    {
      id: "platters-salad",
      name: "Platters & Salad",
      description: "All platters are served with fries and slaw.",
      items: [
        { id: "pork-chop-platter", name: "Pork Chop Platter", description: "1 piece.", price: 9.99 },
        { id: "fish-fillet-platter", name: "Fish Fillet Platter", description: "1 piece.", price: 9.99 },
        { id: "chicken-tenders-platter", name: "Chicken Tenders Platter", description: "3 pieces.", price: 10.49 },
        { id: "shrimp-platter", name: "Shrimp Platter", description: "15 pieces.", price: 11.99 },
        {
          id: "big-famous-salad",
          name: "Big Famous Salad",
          description:
            "Lettuce, tomatoes, banana peppers, pickles, onion, cabbage, carrots and shredded cheese with your choice of 1 meat (excluding shrimp) and 2 dressings: ranch, Italian or honey mustard.",
          price: 9.99,
        },
      ],
    },
    {
      id: "sides",
      name: "Sides",
      items: [
        {
          id: "fries",
          signature: true,
          name: "Fries",
          description: "Seasoned.",
          sizes: [
            { label: "Medium", price: 2.69 },
            { label: "Large", price: 2.99 },
            { label: "XL", price: 3.69 },
          ],
        },
        { id: "famous-hot-fries", name: "Famous Hot Fries", price: 3.99 },
        { id: "famous-cheese-fries", name: "Famous Cheese Fries", price: 4.99 },
        { id: "chili-cheese-fries", name: "Chili Cheese Fries", price: 5.99 },
        { id: "onion-rings", name: "Onion Rings", price: 3.69 },
        { id: "hash-brown", name: "Hash Brown", price: 1.99 },
        { id: "slaw", name: "Slaw", description: "16 oz.", price: 3.99 },
        { id: "toast", name: "Toast", description: "2 pieces.", price: 1.99 },
        { id: "extra-meat", name: "Extra Meat", description: "Excluding shrimp.", price: 4.99 },
        { id: "cheese-slice", name: "Cheese Slice", price: 0.6 },
        { id: "shredded-cheese", name: "Shredded Cheese", description: "2 oz.", price: 0.99 },
        { id: "nacho-cheese", name: "Nacho Cheese", description: "2 oz." },
        { id: "peppers", name: "Peppers", price: 0.6 },
        { id: "mushrooms", name: "Mushrooms", price: 0.99 },
        { id: "salad-dressing", name: "Salad Dressing", description: "2 oz.", price: 0.49 },
      ],
    },
    {
      id: "drinks-dessert",
      name: "Drinks & Dessert",
      items: [
        {
          id: "fountain-tea-limeade",
          signature: true,
          name: "Fountain Drinks, Fresh-Brewed Tea & Limeade",
          description:
            "Sweet or unsweet tea. Limeade flavors: cherry, strawberry, mango, blue raspberry and watermelon.",
          sizes: [
            { label: "Medium", price: 2.39 },
            { label: "Large", price: 2.99 },
            { label: "X-Large", price: 3.59 },
          ],
        },
        { id: "limeade-gallon", name: "Limeade by the Gallon", price: 9.99 },
        {
          id: "coffee-hot-chocolate",
          name: "Coffee or Hot Chocolate",
          sizes: [
            { label: "Small", price: 1.69 },
            { label: "Large", price: 2.49 },
          ],
        },
        { id: "juice", name: "Orange or Apple Juice", price: 1.99 },
        { id: "energy-drink", name: "Energy Drink", price: 3.29 },
        { id: "gatorade", name: "Gatorade", price: 2.39 },
        { id: "yoohoo", name: "Yoo-hoo", price: 2.39 },
        { id: "bottled-water", name: "Bottled Water", price: 1.49 },
        { id: "famous-cakes", name: "Famous Cakes", description: "Lemon, banana nut or marble.", price: 2.99 },
      ],
    },
  ],

  photos: [
    { src: "/images/hero-camel-rider-pita-fries.jpg", alt: "Camel Rider pita stuffed with cold cuts, lettuce and tomato, with seasoned fries", category: "food", credit: "google-maps-ugc", width: 1600, height: 961, hero: true },
    { src: "/images/giant-cheeseburger-fries.jpg", alt: "Giant cheeseburger with lettuce and tomato next to fries on wax paper", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/philly-steak-pita.jpg", alt: "Philly steak with melted cheese in a pita", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/cold-cut-pita-seasoned-fries.jpg", alt: "Cold-cut pita with lettuce, onion, tomato and cheese next to seasoned fries", category: "food", credit: "yelp-ugc", width: 1000, height: 750 },
    { src: "/images/breakfast-eggs-grits-sausage-toast.jpg", alt: "Breakfast platter with fried eggs, cheese grits, a sausage patty and toast", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/breakfast-scrambled-eggs-grits-bacon.jpg", alt: "Scrambled eggs over grits with bacon, a sausage patty and toast with jelly", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/breakfast-fish-grits-gravy.jpg", alt: "Fried fish with grits and biscuits in sausage gravy", category: "food", credit: "google-maps-ugc", width: 1322, height: 1600 },
    { src: "/images/storefront-the-original-since-1986-sign.jpg", alt: "Yellow storefront sign reading The Original Famous Sandwiches, Since 1986", category: "storefront", credit: "google-maps-ugc", width: 1600, height: 900 },
    { src: "/images/storefront-famous-sandwiches-sign-closeup.jpg", alt: "Close-up of the red and yellow Famous Sandwiches sign with its pita logo", category: "storefront", credit: "yelp-ugc", width: 1000, height: 750 },
    { src: "/images/storefront-parking-lot.jpg", alt: "Famous Sandwiches building with its yellow and red sign and the parking lot", category: "storefront", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/storefront-cassat-ave-street-view.jpg", alt: "Famous Sandwiches seen from Cassat Avenue", category: "storefront", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/menu-board.jpg", alt: "Yellow and red menu board listing biscuits, pancakes, beverages and pita sandwiches", category: "menu-board", credit: "google-maps-ugc", width: 1600, height: 1600 },
  ],
  heroImage: "/images/hero-camel-rider-pita-fries.jpg",

  palette: {
    ink: "#23150E",
    brand: "#C8261B",
    brandDeep: "#8F1A12",
    accent: "#1F7A75",
    mustard: "#F5C518",
    cream: "#FBF1D6",
    paper: "#FFFBF0",
  },

  about: {
    heading: "A Cassat Avenue sandwich shop since 1986",
    paragraphs: [
      "Famous Sandwiches has been serving Murray Hill from its yellow-and-red building on Cassat Avenue since 1986. It's a Jacksonville-style pita and sandwich shop, opening at 5 AM for the early crowd.",
      "Breakfast runs until 11 AM: egg pitas and subs, platters with grits and toast, biscuits and gravy, and pancakes. After that it's Camel Riders, Philly steaks, po boys and clubs in a pita or on a sub, giant burgers, platters with fries and slaw, seasoned fries and limeade.",
      "Eat in, call ahead, or pull through the drive-thru.",
    ],
  },

  heroKicker: "Murray Hill · Jacksonville since 1986",

  servesCuisine: ["Breakfast", "Sandwiches", "Burgers"],

  seo: {
    title: "Famous Sandwiches | Breakfast, Pitas, Subs & Burgers on Cassat Ave, Jacksonville",
    description:
      "Breakfast pitas and platters until 11 AM, Camel Riders, Philly steaks, subs, giant burgers and limeade at 1185 Cassat Ave, Jacksonville, FL. Mon–Sat 5 AM–3 PM. Drive-thru. Call (904) 384-4429.",
  },

  footerCredit: "Built by nicklopacki.com",
};
