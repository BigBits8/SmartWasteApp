import { images, icons } from "../constants";

//Mock data
export const categoryData = [
  {
    key: 1,
    name: "Kött",
    icon: icons.beef,
    backgroundColor: "#A6D7FD",
  },
  {
    key: 2,
    name: "Kyckling",
    icon: icons.chicken,
    backgroundColor: "#A6D7FD",
  },
  {
    key: 3,
    name: "Vegetarisk",
    icon: icons.veg,
    backgroundColor: "#6CFD76",
  },
  {
    key: 4,
    name: "Fisk/Skaldjur",
    icon: icons.fish,
    backgroundColor: "#FFF294",
  },
  {
    key: 5,
    name: "Under 5 min",
    icon: icons.time,
    backgroundColor: "#FF99CC",
  },
];

// export const annonsData = [
//   {
//     id: 1,
//     name: "Lökburgare",
//     portion: "4",
//     photo: images.burger,
//     categories: [1],
//     price: "166",
//     location: "Västerhaninge",
//     description: "Med färsk potatis och vit karl-johan sås",
//     courier: {
//       profilePicture: images.profilePic,
//       name: "John",
//     },
//     info: "Information om maten",
//     ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
//     aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
//   },
//   {
//     id: 2,
//     name: "Fisksoppa",
//     portion: "4",
//     photo: images.fishsoup,
//     categories: [4],
//     price: "166",
//     description: "",
//     location: "Västerhaninge",
//     description: "Med färsk potatis och vit karl-johan sås",
//     courier: {
//       profilePicture: images.profilePic,
//       name: "John",
//     },
//     info: "Information om maten",
//     ingredients: ["Morötter", "Lök", "Torsk", "Potatis"],
//     aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
//   },
//   {
//     id: 3,
//     name: "Laxstroganoff",
//     portion: "3",
//     photo: images.laxstroganoff,
//     price: "43",
//     categories: [4],
//     description: "",
//     location: "Västerhaninge",
//     description: "Med färsk potatis och vit karl-johan sås",
//     courier: {
//       profilePicture: images.profilePic,
//       name: "John",
//     },
//     info: "Information om maten",
//     ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
//     aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
//   },

//   {
//     id: 4,
//     name: "Tacopaj",
//     portion: "2",
//     photo: images.tacopaj,
//     categories: [5],
//     price: "151",
//     location: "Västerhaninge",
//     description: "Med färsk potatis och vit karl-johan sås",
//     courier: {
//       profilePicture: images.profilePic,
//       name: "John",
//     },
//     info: "Information om maten",
//     ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
//     aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
//   },
//   {
//     id: 5,
//     name: "Veg lasagne",
//     portion: "5",
//     photo: images.veglasagne,
//     categories: [3],
//     price: "151",
//     location: "Västerhaninge",
//     description: "Med färsk potatis och vit karl-johan sås",
//     courier: {
//       profilePicture: images.profilePic,
//       name: "John",
//     },
//     info: "Information om maten",
//     ingredients: ["Tomat", "Lök", "Ost", "Högrevsfärs", "Sallad", "Potatis"],
//     aller: ["Gluten", "Soja", "Sesam", "Jordnötter", "Nötter"],
//   },
// ];

const db = { categoryData};
export default db;
