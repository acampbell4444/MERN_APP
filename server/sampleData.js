// Recipes
const recipes = [
  {
    id: '1',
    userId: '1',
    name: "Tony's Chocolate Cake",
    ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Milk'],
    steps: ['Preheat oven to 350 degrees', 'Mix ingredients in a bowl', 'Bake for 30 minutes'],
    notes: ["Don't forget to preheat the oven!, Don't overmix!"]
  },
  {
    id: '2',
    userId: '2',
    name: "Natasha's Chocolate Cake",
    ingredients: ["Natasha's Flour", "Natasha's Sugar", "Natasha's Eggs", "Natasha's Butter", "Natasha's Milk"],
    steps: ['Preheat oven to 350 degrees', 'Mix ingredients in a bowl', 'Bake for 30 minutes'],
    notes: ["Don't forget to preheat the oven!, Don't overmix!"]
  },
  {
    id: '3',
    userId: '3',
    name: "Thor's Chocolate Cake",
    ingredients: ["Thor's Flour", "Thor's Sugar", "Thor's Eggs", "Thor's Butter", "Thor's Milk"],
    steps: ['Preheat oven to 350 degrees', 'Mix ingredients in a bowl', 'Bake for 30 minutes'],
    notes: ["This was good, Don't overmix!"]
  },
  {
    id: '4',
    userId: '4',
    name: "Tammie's Chocolate Cake",
    ingredients: ["Thor's Flour", "Thor's Sugar", "Thor's Eggs", "Thor's Butter", "Thor's Milk"],
    steps: ['Preheat oven to 350 degrees', 'Mix ingredients in a bowl', 'Bake for 30 minutes'],
    notes: ["This was good, Don't overmix!"]
  },
  {
    id: '5',
    userId: '5',
    name: "Tito's Chocolate Cake",
    ingredients: ["Thor's Flour", "Thor's Sugar", "Thor's Eggs", "Thor's Butter", "Thor's Milk"],
    steps: ['Preheat oven to 350 degrees', 'Mix ingredients in a bowl', 'Bake for 30 minutes'],
    notes: ["This was good, Don't overmix!"]
  },
];

// users
const users = [
  {
    id: '1',
    name: 'Tony Stark',
    email: 'ironman@gmail.com'
  },
  {
    id: '2',
    name: 'Natasha Romanova',
    email: 'blackwidow@gmail.com'
  },
  {
    id: '3',
    name: 'Thor Odinson',
    email: 'thor@gmail.com'
  },
  {
    id: '4',
    name: 'Steve Rogers',
    email: 'steve@gmail.com'
  },
  {
    id: '5',
    name: 'Bruce Banner',
    email: 'bruce@gmail.com'
  },
];

module.exports = { recipes, users };