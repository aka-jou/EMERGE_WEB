import type { Department } from "./team.types";
import antonio from "../../assets/antonio.png";
import maria from "../../assets/maria.png";
import jdavid from "../../assets/jdavid.png";
import josue from "../../assets/josue.png";
import wilver from "../../assets/wilver.png";
import hector from "../../assets/hector.png";
import sergio from "../../assets/sergio.png";


export const DEPARTMENTS_DATA: Department[] = [
  {
    title: "Dirección / Managing",
    description: "Liderazgo estratégico y toma de decisiones ejecutivas",
    members: [
      {
        id: "1",
        name: "Antonio Ruiz Matus",
        role: "Director General",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 187 2666",
        email: "antonio.ruiz@grupoemerge.com.mx",
        image: antonio,
      },
    ],
  },
  {
    title: "Gerencia",
    description: "Gestión financiera, contabilidad y control administrativo",
    members: [
      {
        id: "2",
        name: "Maria Isabel Martinez Rasgado",
        role: "Gerente general",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 223 2930",
        email: "maria.rasgado@grupoemerge.com.mx",
        image: maria,
      },
      {
        id: "3",
        name: "Jose Dávid Nolasco Lopez",
        role: "Director Técnico",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 107 7784",
        email: "david.nolasco@grupoemerge.com.mx",
        image: jdavid,
      },
    ],
  },
  {
    title: "Administración",
    description: "Desarrollo de marca, estrategia comercial y crecimiento",
    members: [
      {
        id: "4",
        name: "Josue Moreno de la Torres",
        role: "Contador",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 142 4742",
        email: "josue.moreno@grupoemerge.com.mx",
        image: josue,
      },
      {
        id: "5",
        name: "Jonathan Zertuche Oñate",
        role: "Ejecutivo de Marca",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 187 7881",
        email: "jonathan.zertuche@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
    ],
  },
  {
    title: "O&M / Servicios Técnicos",
    description: "Operación, mantenimiento y soporte de redes especializadas",
    members: [
      {
        id: "6",
        name: "Hector Orozco Añoroz",
        role: "Responsable de O & M",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 101 1354",
        email: "hector.orozco@grupoemerge.com.mx",
        image: hector,
      },
      {
        id: "7",
        name: "Wilver Rivera Díaz",
        role: "Ingeniero de RF",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 101 7839",
        email: "wilser.rivera@grupoemerge.com.mx",
        image: wilver,
      },
      {
        id: "8",
        name: "Roberto Ortegui",
        role: "Ingeniero de RF",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 227 1079",
        email: "roberto.ortegui@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
      {
        id: "9",
        name: "Oscar Altamirano",
        role: "Coordinador de Campo",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 143 9534",
        email: "oscar.altamirano@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
      {
        id: "10",
        name: "Sandre Santiago Cruz",
        role: "Ingeniero de Soporte",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 147 1622",
        email: "sandre.santiago@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
      {
        id: "11",
        name: "Sergio Moreno de la Torm",
        role: "Lider de Proyectos",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 143 1093",
        email: "sergio.moreno@grupoemerge.com.mx",
        image: sergio,
      },
    ],
  },
  {
    title: "Investigación y Staff",
    description: "Innovación, desarrollo de contenido y gestión de operaciones",
    members: [
      {
        id: "12",
        name: "Rolando Rosales Lopez",
        role: "Jefe de Personal",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 999 7929",
        email: "rolando.rosales@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
      {
        id: "13",
        name: "Angel Zarate",
        role: "Investigador",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 142 6233",
        email: "angel.zarate@grupoemerge.com.mx",
        imageBg: "#ffcece",
      },
      {
        id: "14",
        name: "Jose Alberto Victorin Lopez",
        role: "Técnico",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 134 8837",
        email: "alberto.victorin@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
      {
        id: "15",
        name: "Rafael Xachreras",
        role: "Jefe de personal de mantenimiento",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 116 5548",
        email: "rafael.xachreras@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
    ],
  },
  {
    title: "Reparación y almacen",
    description: "Inventario, desarrollo de producto y gestión de operaciones",
    members: [
      {
        id: "16",
        name: "Daniel Ruiz Matus",
        role: "Responsable de Reparación y Armado",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 271 6544",
        email: "daniel.ruiz@grupoemerge.com.mx",
        imageBg: "#ffd9d9",
      },
      {
        id: "17",
        name: "Josue A. Tinado Perez",
        role: "Técnico de Almacenista",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 186 6418",
        email: "josue.tinado@grupoemerge.com.mx",
        imageBg: "#e5e7eb",
      },
    ],
  },
];

export const TABS = [
  "Desarrollo",
  "Administración",
  "Marketing y Ventas",
  "O&M / Reparación",
  "Calidad",
  "Soporte",
  "Todas",
] as const;
