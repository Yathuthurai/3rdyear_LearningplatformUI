import React from "react";

import SubjectsList from "../components/SubjectsList";
import "./Units.css";

const InformationTech = () => {
  const UNITS = [
    {
      id: "i1",
      name: "Concept of ICT",
      image: "https://cdn.openpr.com/T/5/T509301851_g.jpg",
      modules: 8,
    },
    {
      id: "i2",
      name: "Introduction to Computer",
      image:
        "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__340.jpg",
      modules: 25,
    },
    {
      id: "i3",
      name: "Data Representation",
      image: "https://www.baylor.edu/content/imglib/3/2/4/1/324166_640.png",
      modules: 20,
    },
    {
      id: "i4",
      name: "Fundamental of Digital Circuits",
      image:
        "https://media-exp1.licdn.com/dms/image/C511BAQHWZM4igHQJxA/company-background_10000/0?e=2159024400&v=beta&t=u3yWOw4LKaECXDrlxfanabyIVz-JJszQPleof0LQojg",
      modules: 12,
    },
    {
      id: "i5",
      name: "Computer Operating System",
      image:
        "https://www.howtogeek.com/wp-content/uploads/2014/04/dual-boot-or-triple-boot-operating-systems.jpg",
      modules: 4,
    },
    {
      id: "i6",
      name: "Data Communication and Networking",
      image:
        "https://3.bp.blogspot.com/-sr5nrVMP8gQ/WrPUIcvWWHI/AAAAAAAALIE/apHAJwImTkkE3Ey4-TF4IkO8iItWBfMGQCLcBGAs/s1600/dccn.png",
      modules: 13,
    },
    {
      id: "i7",
      name: "System Analysis and Design",
      image:
        "https://research.phoenix.edu/sites/default/files/blogpost/images/statistical-analysis-hero.jpg",
      modules: 10,
    },
    {
      id: "i8",
      name: "Database Management",
      image:
        "https://blogs.bmc.com/wp-content/uploads/2016/06/database-blue.png",
      modules: 16,
    },
    {
      id: "i9",
      name: "Programming",
      image:
        "https://learnworthy.net/wp-content/uploads/2019/12/Why-programming-is-the-skill-you-have-to-learn-1280x720.jpg",
      modules: 12,
    },
    {
      id: "i10",
      name: "Web Development",
      image:
        "https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg",
      modules: 11,
    },
    {
      id: "i11",
      name: "Internet of Things",
      image:
        "https://velocityglobal.com/wp-content/uploads/2018/08/Blog-Images-How-the-Internet-of-Things-Will-Shape-Global-Business-1.jpg",
      modules: 7,
    },
    {
      id: "i12",
      name: "ICT in Business",
      image: "https://guardian.ng/wp-content/uploads/2020/05/Innovation.jpg",
      modules: 7,
    },
    {
      id: "i13",
      name: "New trends and Future Directions of ICT",
      image:
        "https://2.bp.blogspot.com/-JjF7y49oe3U/WAYnbyA0wjI/AAAAAAAAAAs/bCWgQMT4ZBAzXIGpGxRCZq_8_xr2lB_XACLcB/s1600/foict.jpg",
      modules: 7,
    },
    {
      id: "i14",
      name: "Project",
      image:
        "https://www.iptecltd.com/wp-content/uploads/2017/03/ICT-Project-Management.png",
      modules: 7,
    },
  ];
  return (
    <div className="uni-bg">
      <SubjectsList items={UNITS} />
    </div>
  );
};

export default InformationTech;
