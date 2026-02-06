import type { Department } from "./team.types";
import antonio from "../../assets/antonio.png";
import maria from "../../assets/maria.png";
import jdavid from "../../assets/jdavid.png";
import josue from "../../assets/josue.png";
import wilver from "../../assets/wilver.png";
import hector from "../../assets/hector.png";
import sergio from "../../assets/sergio.png";
import sandro from "../../assets/sandro.png";


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
        phone: "+34 93 456 7891",
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
        name: "Hector Orozco Ordaz",
        role: "Responsable de O & M",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 120 1364",
        email: "hector.orozco@grupoemerge.com.mx",
        image: hector,
      },
      {
        id: "7",
        name: "Wilver Rivera Díaz",
        role: "Supervisor Especialista",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 103 7616",
        email: "servicios.renovables@grupoemerge.com.mx",
        image: wilver,
      },
      {
        id: "8",
        name: "Roberto Otaqui",
        role: "Supervisor O&M",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 951 231 3578",
        email: "emerge.groair@gmail.com",
        imageBg: "#e5e7eb",
      },
      {
        id: "9",
        name: "Oscar Alvarado",
        role: "Especialista en Servicio",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 176 5248",
        email: "f.gil@company.com",
        imageBg: "#e5e7eb",
      },
      {
        id: "10",
        name: "Sandro Santiago Cruz",
        role: "Supervisor en AT & MT",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 206 4985",
        email: "sandro.santiago@grupoemerge.com.mx",
        image: sandro,
      },
      {
        id: "11",
        name: "Sergio Moreno de la Torres",
        role: "Supervisor de Montaje",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 145 5641",
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
        name: "Rosendo Rosales López",
        role: "Investigador tecnológico",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 186 0248",
        email: "a.jimenez@company.com",
        imageBg: "#e5e7eb",
      },
      {
        id: "13",
        name: "Angel Zarate",
        role: "Staff",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 933 122 4220",
        email: "consultoria.renovables@grupoemerge.com.mx",
        imageBg: "#ffcece",
      },
      {
        id: "14",
        name: "Jose Alberto Vicente Lopez",
        role: "Staff",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 126 5287",
        email: "f.gil@company.com",
        imageBg: "#e5e7eb",
      },
      {
        id: "15",
        name: "Rafael Azahares",
        role: "Formador experto",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 81 1638 6944",
        email: "r.ortega@company.com",
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
        role: "Responsable de Reparación y Almacén",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 103 1015",
        email: "daniel.ruiz@grupoemerge.com.mx",
        imageBg: "#ffd9d9",
      },
      {
        id: "17",
        name: "Josue A. Toledo Perez",
        role: "Especialista en Electronica",
        location: "Juchitan de Zaragoza Oaxaca",
        phone: "+52 971 159 0926",
        email: "taller.refacciones@grupoemerge.com.mx",
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
