const sustainabilityData = [
  {
    categoryId: 1,
    name: "Energy Usage",
    subCategories: [
      { subCategoryId: 1, name: "Conserved water or energy", checked: false },
      {
        subCategoryId: 2,
        name: "Chose sustainable transportation",
        checked: false,
      },
    ],
  },
  {
    categoryId: 2,
    name: "Consumption Habits",
    subCategories: [
      { subCategoryId: 1, name: "Avoided single-use plastic", checked: false },
      { subCategoryId: 2, name: "Avoided food waste", checked: false },
      {
        subCategoryId: 3,
        name: "Made a sustainable choice when shopping (second-hand, better quality, etc)",
        checked: false, // Added missing checked property
      },
      { subCategoryId: 4, name: "Used reusable containers", checked: false }, // Added missing checked property
    ],
  },
  {
    categoryId: 3,
    name: "Sustainable Actions",
    subCategories: [
      { subCategoryId: 1, name: "Recycled", checked: false },
      { subCategoryId: 2, name: "Composted", checked: false },
      {
        subCategoryId: 3,
        name: "Bought an environmentally conscious item",
        checked: false,
      },
    ],
  },
  {
    categoryId: 4,
    name: "Sustainable Bonus",
    subCategories: [
      { subCategoryId: 1, name: "Grew your own food", checked: false },
      { subCategoryId: 2, name: "Supported a local business", checked: false },
      {
        subCategoryId: 3,
        name: "Ate organic or minimally processed foods",
        checked: false,
      },
    ],
  },
];

export default sustainabilityData;
