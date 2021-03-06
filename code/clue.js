//OBJECTS FOR ALL THE SUSPECTS
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "olivedrab",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.jpg",
  occupation: "Entrepreneur",
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "darkorchid",
  description: "He is quick-witted and intellectual",
  age: 36,
  image: "assets/plum.jpg",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "crimson",
  description: "She is weird but beautiful",
  age: 28,
  image: "assets/scarlet.jpg",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "cornflowerblue",
  description: "She always maintains her dignity",
  age: 65,
  image: "assets/peacock.jpg",
  occupation: "Senior Citizen"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "gold",
  description: "He is dignified, dapper and dangerous",
  age: 50,
  image: "assets/mustard.jpg",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Eulalia",
  lastName: "White",
  color: "white",
  description: "She is a kind, grandmotherly servant",
  age: 70,
  image: "assets/white.jpg",
  occupation: "Housekeeper"
}

//OBJECTS FOR ALL THE WEAPONS
const rope = {
  name: "a rope",
  weight: 100,
  color: "sienna",
  image: "assets/rope.png"
}

const knife = {
  name: "a knife",
  weight: 50,
  color: "grey",
  image: "assets/knife.png"
}

const candlestick = {
  name: "a candlestick",
  weight: 500,
  color: "silver",
  image: "assets/candlestick.png"
}

const dumbbell = {
  name: "a dumbbell",
  weight: 1000,
  color: "blue",
  image: "assets/dumbbell.png"
}

const poison = {
  name: "poison",
  weight: 10,
  color: "yellowgreen",
  image: "assets/poison.png"
}

const axe = {
  name: "an axe",
  weight: 800,
  color: "tan",
  image: "assets/axe.png"
}

const bat = {
  name: "a bat",
  weight: 300,
  color: "burlywood",
  image: "assets/bat.png"
}

const trophy = {
  name: "a trophy",
  weight: 500,
  color: "gold",
  image: "assets/trophy.png"
}

const pistol = {
  name: "a pistol",
  weight: 200,
  color: "silver",
  image: "assets/pistol.png"
}

//OBJECT FOR ALL THE ROOMS
const diningRoom = {
  name: "dining room",
  image: "assets/rooms/diningroom.png"
}

const conservatory = {
  name: "conservatory",
  image: "assets/rooms/conservatory.png"
}

const kitchen = {
  name: "kitchen",
  image: "assets/rooms/kitchen.png"
}

const study = {
  name: "study",
  image: "assets/rooms/study.png"
}

const library = {
  name: "library",
  image: "assets/rooms/library.png"
}

const billiardRoom = {
  name: "billiard room",
  image: "assets/rooms/billiard.png"
}

const lounge = {
  name: "lounge",
  image: "assets/rooms/lounge.png"
}

const ballroom = {
  name: "ballroom",
  image: "assets/rooms/ballroom.png"
}

const hall = {
  name: "hall",
  image: "assets/rooms/hall.png"
}

const spa = {
  name: "spa",
  image: "assets/rooms/spa.png"
}

const livingRoom = {
  name: "living room",
  image: "assets/rooms/livingroom.png"
}

const observatory = {
  name: "observatory",
  image: "assets/rooms/observatory.png"
}

const theater = {
  name: "theater",
  image: "assets/rooms/theater.png"
}

const guestHouse = {
  name: "guest house",
  image: "assets/rooms/guesthouse.png"
}

const patio = {
  name: "patio",
  image: "assets/rooms/patio.png"
}

//ARRAYS FOR SUSPECTS, WEAPONS, ROOMS AND TIMES

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
]

const times = [
  "in the morning",
  "at noon",
  "in the afternoon",
  "in the evening",
  "during the night"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

//OBJECT THAT KEEPS THE MYSTERY
const mystery = {
  killer: "",
  weapon: "",
  room: "",
  time: "",
}

// FUNCTION TO RANDOMLY SELECT KILLER AND ADD IT TO THE MYSTERY OBJECT
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = `Age: ${mystery.killer.age} years`
  theKillerOccupation.innerHTML = `Occupation: ${mystery.killer.occupation}`
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
}

// FUNCTION TO RANDOMLY SELECT WEAPON AND ADD IT TO THE MYSTERY OBJECT
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponColor = document.getElementById("weaponColor")
  const theWeaponImage = document.getElementById("weaponImage")
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = `Weight: ${mystery.weapon.weight} gram`
  theWeaponColor.innerHTML = "COLOR OF WEAPON"
  theWeaponColor.style.background = mystery.weapon.color
  theWeaponImage.src = mystery.weapon.image
}

// FUNCTION TO RANDOMLY SELECT ROOM AND ADD IT TO THE MYSTERY OBJECT
const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoomName = document.getElementById("roomName")
  const theRoomImage = document.getElementById("roomImage")
  theRoomName.innerHTML = mystery.room.name
  theRoomImage.src = mystery.room.image
}

// FUNCTION TO RANDOMLY SELECT TIME AND ADD IT TO THE MYSTERY OBJECT
const pickTime = () => {
  mystery.time = randomSelector(times)

  const theTimeOfDay = document.getElementById("timeOfDay")
  theTimeOfDay.innerHTML = mystery.time
}

//FUNCTION TO REVEAL MYSTERY OR ASK THE USER TO FLIP MORE CARDS
const revealMystery = () => {
  const mysteryAnswer = document.getElementById("mystery")
  if (!mystery.killer || !mystery.room || !mystery.weapon || !mystery.time) {
    mysteryAnswer.innerHTML = "No mystery is yet to be revealed. <br> Please pick a card from every deck."
  }
  else {
    mysteryAnswer.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name}, ${mystery.time} with ${mystery.weapon.name}.`
    document.getElementById("reload").style.display = "block"
  }

}

//FUNCTION TO REFRESH THE PAGE
const refresh = () => {
  const playAgain = document.getElementById("playAgain")
  playAgain = location = location
}