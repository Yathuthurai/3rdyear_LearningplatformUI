import React from "react";

import UnitsList from "../components/UnitsList";
import "./Units.css";

const PureMaths = () => {
  const UNITS = [
    {
      id: "pm1",
      name: "Unit1",
      image: "https://cdn.openpr.com/T/5/T509301851_g.jpg",
      modules: 8,
    },
    {
      id: "pm2",
      name: "Unit2",
      image:
        "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__340.jpg",
      modules: 25,
    },
    {
      id: "pm3",
      name: "Unit3",
      image: "https://www.baylor.edu/content/imglib/3/2/4/1/324166_640.png",
      modules: 20,
    },
    {
      id: "pm4",
      name: "Unit4",
      image:
        "https://media-exp1.licdn.com/dms/image/C511BAQHWZM4igHQJxA/company-background_10000/0?e=2159024400&v=beta&t=u3yWOw4LKaECXDrlxfanabyIVz-JJszQPleof0LQojg",
      modules: 12,
    },
    {
      id: "pm5",
      name: "Unit5",
      image:
        "https://www.howtogeek.com/wp-content/uploads/2014/04/dual-boot-or-triple-boot-operating-systems.jpg",
      modules: 4,
    },
    {
      id: "pm6",
      name: "Unit6",
      image:
        "https://3.bp.blogspot.com/-sr5nrVMP8gQ/WrPUIcvWWHI/AAAAAAAALIE/apHAJwImTkkE3Ey4-TF4IkO8iItWBfMGQCLcBGAs/s1600/dccn.png",
      modules: 13,
    },
    {
      id: "pm7",
      name: "Unit7",
      image:
        "https://research.phoenix.edu/sites/default/files/blogpost/images/statistical-analysis-hero.jpg",
      modules: 10,
    },
    {
      id: "pm8",
      name: "Unit8",
      image:
        "https://blogs.bmc.com/wp-content/uploads/2016/06/database-blue.png",
      modules: 16,
    },
    {
      id: "pm9",
      name: "Unit9",
      image:
        "https://learnworthy.net/wp-content/uploads/2019/12/Why-programming-is-the-skill-you-have-to-learn-1280x720.jpg",
      modules: 12,
    },
    {
      id: "pm10",
      name: "Unit10",
      image:
        "https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg",
      modules: 11,
    },
    {
      id: "pm11",
      name: "Unit11",
      image:
        "https://velocityglobal.com/wp-content/uploads/2018/08/Blog-Images-How-the-Internet-of-Things-Will-Shape-Global-Business-1.jpg",
      modules: 7,
    },
    {
      id: "pm12",
      name: "Unit12",
      image: "https://guardian.ng/wp-content/uploads/2020/05/Innovation.jpg",
      modules: 7,
    },
    {
      id: "pm13",
      name: "Unit13",
      image:
        "https://2.bp.blogspot.com/-JjF7y49oe3U/WAYnbyA0wjI/AAAAAAAAAAs/bCWgQMT4ZBAzXIGpGxRCZq_8_xr2lB_XACLcB/s1600/foict.jpg",
      modules: 7,
    },
    {
      id: "pm14",
      name: "Unit14",
      image:
        "https://www.iptecltd.com/wp-content/uploads/2017/03/ICT-Project-Management.png",
      modules: 7,
    },
  ];
  return (
    <div className="uni-bg">
      <UnitsList items={UNITS} />
    </div>
  );
};

export default PureMaths;
