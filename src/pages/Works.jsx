import React, { useEffect } from "react"

import angular from "../assets/techs/angular.png"
import aws from "../assets/techs/aws.png"
import redux from "../assets/techs/redux.png"
import js from "../assets/techs/js.png"
import html from "../assets/techs/html.png"
import mysql from "../assets/techs/mysql.png"
import react from "../assets/techs/react.png"
import ruby from "../assets/techs/ruby.png"
import vue from "../assets/techs/vue.png"
import postgress from "../assets/techs/postgress.png"
import nodejs from "../assets/techs/nodejs.png"
import git from "../assets/techs/git.png"

const dataWorks = [
  {
    name: "Banco BBVA | Neoris",
    time: "February 2017 - March 2018",
    title: "Software Developer",
    items: [
      "Creation of food forum with react",
      "Maintain and develop Calendar App",
      "Consume the DBZ Movie api for Angular movie recommendation",
      "Make any endpoint in nodeJs with validation params",
      "Web layout",
      "Implementing react thunk to async redux",
    ],
    techs: [
      {
        name: "Angular",
        img: angular,
      },
      {
        name: "AWS",
        img: aws,
      },
      {
        name: "Redux",
        img: redux,
      },
    ],
  },
  {
    name: "LookApp Miles de Ojos",
    time: "February 2017 - March 2018",
    title: "Software Developer",
    items: [
      "Creation of food forum with react",
      "Maintain and develop Calendar App",
      "Consume the DBZ Movie api for Angular movie recommendation",
      "Make any endpoint in nodeJs with validation params",
      "Web layout",
      "Implementing react thunk to async redux",
    ],
    techs: [
      {
        name: "Angular",
        img: angular,
      },
      {
        name: "AWS",
        img: aws,
      },
      {
        name: "Redux",
        img: redux,
      },
    ],
  },
  {
    name: "eLearning Solution",
    time: "February 2017 - March 2018",
    title: "Software Developer",
    items: [
      "Creation of food forum with react",
      "Maintain and develop Calendar App",
      "Consume the DBZ Movie api for Angular movie recommendation",
      "Make any endpoint in nodeJs with validation params",
      "Web layout",
      "Implementing react thunk to async redux",
    ],
    techs: [
      {
        name: "Angular",
        img: angular,
      },
      {
        name: "AWS",
        img: aws,
      },
      {
        name: "Redux",
        img: redux,
      },
    ],
  },
  {
    name: "Publicty Ventures",
    time: "February 2017 - March 2018",
    title: "Software Developer",
    items: [
      "Creation of food forum with react",
      "Maintain and develop Calendar App",
      "Consume the DBZ Movie api for Angular movie recommendation",
      "Make any endpoint in nodeJs with validation params",
      "Web layout",
      "Implementing react thunk to async redux",
    ],
    techs: [
      {
        name: "Angular",
        img: angular,
      },
      {
        name: "AWS",
        img: aws,
      },
      {
        name: "Redux",
        img: redux,
      },
    ],
  },
  {
    name: "Freelance",
    title: "Software Developer",
    items: [
      "Inventory Management System",
      "Firebase Storage/ Realtime Database",
      "Web layout",
      "Login Social Media Firebase",
      "SQL views with mysql",
      "Boostrap custom theme",
    ],
    time: "February 2017 - March 2018",
    techs: [
      {
        name: "Angular",
        img: angular,
      },
      {
        name: "React",
        img: angular,
      },
      {
        name: "Git",
        img: git,
      },
    ],
  },
]
export const Works = () => {
  useEffect(() => {
    document.title = "Portafolio | Experience"
  }, [])

  return (
    <div className="w3-black">
      <div className="titleContent">
        <h1>Experience</h1>
      </div>
      {dataWorks.map(({ name, items, time, techs }) => (
        <div key={name} className="w3-panel ">
          <h4>{name}</h4>
          <span>{time}</span> <br />
          {techs.map(({ img, name }) => (
            <img
              src={img}
              width="32px"
              style={{ margin: 8 }}
              alt={name}
              title={name}
            />
          ))}
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
