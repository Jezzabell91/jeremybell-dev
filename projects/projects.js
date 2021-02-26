
// const projects_model = {
//     id : Number,
//     name: String,
//     about: String,
//     URL: String,
//     gitURL: String,
//     image: String,
//     tech: String,
//     purpose: String,
//     features: String,
// }

const hr_trainer = {
    id : 0,
    name: "HR Trainer",
    about: "Progressive Web App for Heart Rate Training",
    url: "https://jovial-galileo-acee1d.netlify.app/",
    repo: "https://github.com/Jezzabell91/heart-rate-training",
    image: "hr_trainer_screenshot",
    tech: ["Vanilla JavaScript","HTML", "TailwindCSS", "Web Bluetooth API"],
    purpose: "HR Trainer is a PWA that I made to help me with my running. Heart rate training focuses on keeping your heart rate within a specific zone. I found that traditional apps were giving to much information and for my purposes I only needed two metrics, current heart rate and time elapsed.",
    features: ["Connects to Heart Rate Monitor via BLE to display heart rate","Timer displays elapsed time","Can be installed on devices and can operate offline"],
}

const cowgo = {
    id : 1,
    name: "CowGo",
    about: "Coder Academy - Ruby on Rails Project",
    url: "https://cowgo.herokuapp.com/",
    repo: "https://github.com/Jezzabell91/cowgo1",
    image: "cowgo_screenshot",
    tech: ["Ruby", "Ruby on Rails", "Postgresql", "TailwindCSS", "Heroku"],
    purpose: "Owners of small farms often do not have the capability to move livestock and have to rely on their own contacts or large commercial operators to provide this service. The CowGo marketplace web app connects livestock owners with farmers who can.",
    features: ["CRUD application with MVC architecture", "User authentication with Devise", "Heroku Pipline with separate development and production builds", "Cloudinary used to host images and do transformations"],
}

const steggyhide = {
    id : 2,
    name: "SteggyHide",
    about: "Coder Academy - Ruby Terminal Application Project",
    url: "https://github.com/Jezzabell91/SteggyHide",
    repo: "https://github.com/Jezzabell91/SteggyHide",
    image: "steggyhide_screenshot",
    tech: ["Ruby","Bash"],
    purpose: "SteggyHide is a terminal app that handles image based steganography. It can hide a user written message inside an png image, it can read a hidden message from a user selected image. SteggyHide also has four conversion tools if users simply want to do conversions between hexadecimal and RGB color values as well between strings and binary.",
    features: ["Encode/Decode secret messages inside PNG image","Conversion tools for hex, RGB, binary and string","Command line arguments","Help documentation"],
}

const cityclimb = {
    id : 3,
    name: "City Climb",
    about: "Coder Academy - MERN Stack Group Project",
    url: "https://city-climb.herokuapp.com/",
    repo: "https://github.com/Jezzabell91/CityClimb_frontend",
    image: "cityclimb_screenshot",
    tech: ["React","MongoDB", "NodeJs", "Express", "JWT"],
    purpose: "The purpose of the website is to help the fictional company City Climb to manage climbs in their gym and provide additonal features for their climbers.",
    features: ["Search climbs based on gym location and colour grade","Display videos of professionals completing each climb","CRUD operations for Staff", "Auth with JWT"],

}

const projects = [hr_trainer, cowgo, steggyhide, cityclimb]

export default projects