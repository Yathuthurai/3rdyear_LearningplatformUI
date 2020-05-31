import React from "react";

import UnitsList from "../components/UnitsList";
import "./Units.css";

const Biologyunits = () => {
  const UNITS = [
    {
      id: "u1",
      name: "Introduction to Biology",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT26E8YkvNYo5cBPkiPCOk57l9X8V0dtPU6pB_aNRmsxLWlz5NZ&usqp=CAU",
      modules: 8,
    },
    {
      id: "u2",
      name: "Chemical and CellularBasic",
      image:
        "https://basicbiology.net/wp-content/uploads/2018/01/animal-cell.jpg",
      modules: 25,
    },
    {
      id: "u3",
      name: "Evolution & Diversity of Orga..",
      image:
        "https://www.learnreligions.com/thmb/xogxLjqdmumsmzwlA3hPWYSzwmg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/whale-83398476-58a0c5805f9b58819c10d10e.jpg",
      modules: 20,
    },
    {
      id: "u4",
      name: "Plant form and function",
      image: "https://www.cropsreview.com/images/green-4155081_1920.jpg",
      modules: 12,
    },
    {
      id: "u5",
      name: "Animal form and function",
      image:
        "https://i.pinimg.com/originals/9c/6d/33/9c6d33a211154b0187abab8dbbef97f5.jpg",
      modules: 4,
    },
    {
      id: "u6",
      name: "Genetics",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/8f/5f6b2026ed11e8b53b5b8e1b56a76c/coursera_genetics_squarelisting.jpg?auto=format%2Ccompress&dpr=1",
      modules: 13,
    },
    {
      id: "u7",
      name: "Molecular Biology & Recombinant DNA..",
      image:
        "https://cdn.the-scientist.com/assets/articleNo/65744/aImg/31560/cancer-cells-article-s.jpg",
      modules: 10,
    },
    {
      id: "u8",
      name: "Environmental Biology",
      image:
        "https://static1.squarespace.com/static/580fd28d20099ec7189b72cf/581e0a34bebafba66b97b84c/59a70b39cd0f685560e1e2ce/1522251866642/Environmental-Science.jpg?format=1500w",
      modules: 16,
    },
    {
      id: "u9",
      name: "Microbiology",
      image:
        "https://media.istockphoto.com/photos/microbiological-examination-picture-id507526558?k=6&m=507526558&s=612x612&w=0&h=-bOueLXWZcJ899cgdkTF6hkYgMnQK0ZExrlw1gIC2SQ=",
      modules: 12,
    },
    {
      id: "u10",
      name: "Applied Biology",
      image:
        "https://www.nikon.com/products/microscope-solutions/bioscience-applications/clinical/img/heading_microbiology.jpg",
      modules: 11,
    },
  ];
  return (
    <div className="phy-bg">
      <UnitsList items={UNITS} />
    </div>
  );
};

export default Biologyunits;
