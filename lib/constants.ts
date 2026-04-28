
export const NAV_LINKS = [
  { label: 'INICIO', href: '/' },
  { label: 'PRODUCTOS', href: '/productos' },
  { label: 'DÓNDE ESTAMOS', href: '/#donde-estamos' },
  { label: 'QUIÉNES SOMOS', href: '/quienes-somos' },
  { label: 'CATÁLOGO 2026', href: '/catalogo-2026.pdf' },
  { label: 'CONTACTO', href: '/#contacto' },
];

export const CATEGORIES = [
  {
    id: 'girasol',
    title: 'GIRASOL',
    description: 'Híbridos de alta performance',
    cta: 'LEER MÁS',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    bgColor: 'bg-[#fbb03b]'
  },
  {
    id: 'sorgo',
    title: 'SORGO',
    description: 'Estabilidad y rendimiento',
    cta: 'LEER MÁS',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    bgColor: 'bg-[#d1402a]'
  },
  {
    id: 'maiz',
    title: 'MAÍZ',
    description: 'Potencial indiscutido',
    cta: 'LEER MÁS',
    image: '/imgi_5_zeta-semillas_paquete-maiz-99.png',
    bgColor: 'bg-[#f7941d]'
  },
];

export const PRODUCTS = [
  // GIRASOL
  {
    id: 'zt-74h78-cl',
    category: 'girasol',
    name: 'ZT 74H78 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'NUEVO. Excepcional potencial de rendimiento y estabilidad en la producción de ácido oléico. Ciclo medio.',
    specs: {
      mercado: 'Alto Oleico',
      tecnologia: 'Clearfield®',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Medio (71 días floración)',
      madurez: '124 días',
      densidad: '4,5 - 5 pl/m2',
      enfermedades: 'Downy Mildew (TA), Verticillium (T), Esclerotinia (TM), Phomopsis (T), Vuelco (Excelente)'
    }
  },
  {
    id: 'zt-7677-cl-ao',
    category: 'girasol',
    name: 'ZT 7677 CL AO',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'Excepcional potencial de rendimiento y contenido de materia grasa. Máxima estabilidad en la producción de ácido Oleico. Ciclo largo.',
    specs: {
      mercado: 'Alto Oleico',
      tecnologia: 'Clearfield®',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Largo (80 días floración)',
      madurez: '136 días',
      enfermedades: 'Downy Mildew (TA), Verticillium (TA), Esclerotinia (TM), Phomopsis (TM), Vuelco (Excelente)'
    }
  },
  {
    id: 'zt-74h55-cl',
    category: 'girasol',
    name: 'ZT 74H55 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'Alto potencial de rendimiento con excepcional contenido de materia grasa y estabilidad en la producción de ácido Oleico. Ciclo medio.',
    specs: {
      mercado: 'Alto Oleico',
      tecnologia: 'Clearfield®',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Medio (69 días floración)',
      madurez: '120 días',
      enfermedades: 'Downy Mildew (TA), Verticillium (TA), Esclerotinia (TM), Phomopsis (T), Vuelco (Excelente)'
    }
  },
  {
    id: 'zt-7500-cl',
    category: 'girasol',
    name: 'ZT 7500 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'NUEVO. Alto potencial de rendimiento y elevado contenido de materia grasa. Diseñado para ambientes de alto potencial. Ciclo largo.',
    specs: {
      mercado: 'Linoleico',
      tecnologia: 'Clearfield®',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Largo (75 días floración)',
      madurez: '130 días',
      enfermedades: 'Downy Mildew (S), Verticillium (T), Esclerotinia (TM), Phomopsis (TM), Vuelco (Excelente)'
    }
  },
  {
    id: 'zt-74l74-cl',
    category: 'girasol',
    name: 'ZT 74L74 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'Alto potencial de rendimiento y contenido de materia grasa. Buen comportamiento a Phomopsis de tallo y capítulo. Ciclo medio.',
    specs: {
      mercado: 'Linoleico',
      tecnologia: 'Clearfield®',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Medio (73 días floración)',
      madurez: '126 días',
      enfermedades: 'Downy Mildew (TA), Verticillium (TA), Esclerotinia (TM), Phomopsis (TA), Vuelco (Excelente)'
    }
  },
  {
    id: 'zt-7699-cl',
    category: 'girasol',
    name: 'ZT 7699 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'Excepcional potencial de rendimiento y contenido de materia grasa. Máxima productividad en ambientes de alto potencial. Ciclo largo.',
    specs: {
      mercado: 'Linoleico',
      tecnologia: 'Clearfield®',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Largo (81 días floración)',
      madurez: '138 días',
      enfermedades: 'Downy Mildew (S), Verticillium (T), Esclerotinia (TM), Phomopsis (TM), Vuelco (Excelente)'
    }
  },
  // SORGO
  {
    id: 'zt-709-dp',
    category: 'sorgo',
    name: 'ZT 709 DP',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'NUEVO. Ciclo intermedio-largo. Tolerante a pulgón amarillo. Máxima producción de grano. Aptitud silera y planteos diferidos.',
    specs: {
      uso: 'DP / Pulgón Amarillo',
      ciclo: '77 días floración',
      tallo: 'Dulce',
      panoja: 'Semi Compacta',
      grano: 'Marrón (Taninos Alto)',
      altura: '195 - 200 cm',
      enfermedades: 'Roya (TM), Fusarium (TM), Downy Mildew (TM), Virus (TA), Pulgón Verde (TA)'
    }
  },
  {
    id: 'zt-718-dp',
    category: 'sorgo',
    name: 'ZT 718 DP',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'Ciclo intermedio-largo. Destacado comportamiento en zonas marginales. Aptitud silera y planteos diferidos.',
    specs: {
      uso: 'Silero / Granífero / Diferido',
      ciclo: '78 días floración',
      tallo: 'Dulce',
      panoja: 'Semi Compacta',
      grano: 'Marrón (Taninos Alto)',
      altura: '180 cm'
    }
  },
  {
    id: 'zt-707',
    category: 'sorgo',
    name: 'ZT 707',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'Ciclo corto. Ultra precoz, 100 días a cosecha. Excelente excerción de panoja y muy alto rinde. Tolerante a pájaros.',
    specs: {
      uso: 'Granífero',
      ciclo: '57 días floración',
      tallo: 'Normal',
      panoja: 'Semi Laxa',
      grano: 'Marrón (Taninos Alto)',
      altura: '130 cm'
    }
  },
  {
    id: 'zt-1000',
    category: 'sorgo',
    name: 'ZT 1000',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'Multicorte. Estabilidad productiva en todo tipo de ambientes. Apto para pastoreo directo.',
    specs: {
      uso: 'Forrajero Multicorte',
      ciclo: '72 días floración',
      tallo: 'Dulce',
      altura: '250 cm'
    }
  },
  {
    id: 'zt-55t20-az',
    category: 'sorgo',
    name: 'ZT 55T20 AZ',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'Ciclo largo. Silero azucarado. Estabilidad productiva con alto potencial en grano y abundante foliosidad.',
    specs: {
      uso: 'Silero / Diferido / Azucarado',
      ciclo: '85 días floración',
      panoja: 'Compacta',
      grano: 'Marrón (Taninos Alto)',
      altura: '250 - 280 cm'
    }
  },
  // MAIZ
  {
    id: 'zt-1105',
    category: 'maiz',
    name: 'ZT 1105',
    image: '/imgi_5_zeta-semillas_paquete-maiz-99.png',
    description: 'Híbrido Semidentado Duro. Doble Propósito. Excelente stay green y rápida velocidad de secado. Altísimo potencial.',
    specs: {
      tecnologia: 'RR (GTS) / Diatraea',
      tipo: 'Simple modificado',
      estabilidad: 'Alta',
      ciclo: 'Intermedio (72-75 días floración)',
      madurez: '120 días',
      densidad: '45-75.000 sem/ha',
      grano: 'Semidentado Amarillo'
    }
  }
];

export const TEAM = [
  {
    name: 'SANTIAGO ZAPIOLA',
    role: 'GERENTE GENERAL',
    email: 'zapiolasantiago@zetasemillas.com',
    phone: '+54 9 11 5007-5162',
    img: '/imgi_2_SANTIAGO-ZAPIOLA.jpg',
    linkedin: 'https://www.linkedin.com/in/santiago-zapiola-9a5bb919a/'
  },
  {
    name: 'LUCAS ZAPIOLA',
    role: 'GERENTE DE OPERACIONES',
    email: 'lz@zetasemillas.com',
    phone: '+54 9 11 2000-7960',
    img: '/imgi_3_LUCAS-ZAPIOLA.jpg',
    linkedin: 'https://www.linkedin.com/in/lucas-zapiola-62a00b18a/'
  },
  {
    name: 'SANTIAGO ZAPIOLA (h)',
    role: 'GERENTE COMERCIAL',
    email: 'sz@zetasemillas.com',
    phone: '+54 9 11 3104-0042',
    img: '/imgi_4_SANTIAGO-ZAPIOLA-h.jpg',
    linkedin: 'https://www.linkedin.com/in/santiago-zapiola-073535128/'
  }
];
