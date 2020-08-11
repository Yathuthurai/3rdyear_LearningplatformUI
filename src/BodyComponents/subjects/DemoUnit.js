import React from "react";

import SubjectsList from "../components/SubjectsList";
import "./Units.css";

const DemoUnit = () => {
  const UNITS = [
    {
      id: "c1",
      name: "Atomic structure",
      image:
        "https://myigcserevision.files.wordpress.com/2016/05/img_2515.jpg?w=1024&h=737&crop=1",
      modules: 8,
    },
    {
      id: "c2",
      name: "Structure and bonding",
      image:
        "https://i0.wp.com/csengineermag.com/wp-content/uploads/2019/06/AdobeStock_191306165.jpeg?resize=1068%2C712&ssl=1",
      modules: 25,
    },
    {
      id: "c3",
      name: "Chemical calculations",
      image:
        "https://www.ase.org.uk/sites/default/files/chemical%20equations.jpg",
      modules: 20,
    },
    {
      id: "c4",
      name: "Gaseous state of matter",
      image:
        "https://www.thoughtco.com/thmb/8FxupUDgNixjUzJJRxS7IKs-mAo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/175706893-56a12fb93df78cf772683dad.jpg",
      modules: 12,
    },
    {
      id: "c5",
      name: "Energetics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT07269FXKxiHv8RJyb2yluFCIAKOCJXJv_tg&usqp=CAU",
      modules: 4,
    },
    {
      id: "c6",
      name: "Chemistry of s,p,d block elements",
      image:
        "https://news.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2017/MIT-Predicting-Reactions-1_0.jpg?itok=NjgiWu5v",
      modules: 13,
    },
    {
      id: "c7",
      name: "Basic concepts of organic chemistry",
      image:
        "https://www.thegreatcoursesplus.com/media/catalog/product/1/1/1185.jpg",
      modules: 10,
    },
    {
      id: "c8",
      name: "Hydrocarbons and halohydrocarbon",
      image:
        "https://stratasadvisors.com/-/media/Marketing-Images/Service-Overview-Images/Subscription_GlobalHydrocarbonSupply-promotional-only.png?w=800&h=300&useCustomFunctions=1&centerCrop=1",
      modules: 16,
    },
    {
      id: "c9",
      name: "Oxygen containing organic compounds",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ99Pyj_K-vdw8t8iHURvJIn7Jvhas2SiXSnw&usqp=CAU",
      modules: 12,
    },
    {
      id: "c10",
      name: "Nitrogen containing organic compounds",
      image:
        "https://www.thoughtco.com/thmb/KsPsrbKLFkOKXzrYvIADtiAFXYs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/cold-sample-storage-container-in-a-test-tube-laboratory-168623063-57c996485f9b5829f4dcfc8f.jpg",
      modules: 11,
    },
    {
      id: "c11",
      name: "Chemical kinetics",
      image:
        "https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2016/04/23141650/Chemistry-04.png",
      modules: 7,
    },
    {
      id: "c12",
      name: "Equilibrium",
      image:
        "https://grdp.co/cdn-cgi/image/width=700,quality=80/https://gs-post-images.grdp.co/2016/11/img1479449831225-32-rs-high-webp.jpg",
      modules: 7,
    },
    {
      id: "c13",
      name: "Electro chemistry",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/39/ElectrochemCell.png",
      modules: 7,
    },
    {
      id: "c14",
      name: "Industrial chemistry and Environmental pollution",
      image:
        "https://i.pinimg.com/originals/0a/84/d4/0a84d40aa3fc94610715fdfc47492b10.jpg",
      modules: 7,
    },
  ];
  return (
    <div className="uni-bg">
      <SubjectsList items={UNITS} />
    </div>
  );
};

export default DemoUnit;
