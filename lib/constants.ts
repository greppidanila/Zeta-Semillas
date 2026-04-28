
export const NAV_LINKS = [
  { label: 'INICIO', href: '/' },
  { label: 'PRODUCTOS', href: '/productos' },
  { label: 'DÓNDE ESTAMOS', href: '/#donde-estamos' },
  { label: 'CLIENTES', href: '/clientes' },
  { label: 'QUIÉNES SOMOS', href: '/quienes-somos' },
  { label: 'CATÁLOGO', href: '/catalogo' },
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
    description: 'NUEVO. Mercado: Alto Oleico | Tecnología: Clearfield | Materia grasa: Muy Alta. Híbrido equilibrado con excelente comportamiento sanitario.',
    specs: {
      mercado: 'Alto Oleico',
      tecnologia: 'Clearfield',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Floración 71 días | Madurez 124 días',
      densidad: '4.5 – 5 (óptima) / 3.5 – 4 (no óptima)',
      altura: 'Intermedia',
      capitulo: 'Descendente',
      enfermedades: 'Downy Mildew (Alta), Verticillium (Tolerante), Esclerotinia (Media), Phomopsis (Tolerante), Vuelco (Excelente)',
      presentacion: '180.000 semillas'
    }
  },
  {
    id: 'zt-74h55-cl',
    category: 'girasol',
    name: 'ZT 74H55 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'Mercado: Alto Oleico | Tecnología: Clearfield | Materia grasa: Muy Alta. Destacada emergencia y vigor inicial.',
    specs: {
      mercado: 'Alto Oleico',
      tecnologia: 'Clearfield',
      materiaGrasa: 'Muy Alta',
      ciclo: 'Floración 69 días | Madurez 120 días',
      altura: 'Intermedia',
      enfermedades: 'Downy Mildew (Alta), Verticillium (Alta), Esclerotinia (Media), Phomopsis (Tolerante), Vuelco (Excelente)',
      presentacion: '180.000 semillas'
    }
  },
  {
    id: 'zt-74l74-cl',
    category: 'girasol',
    name: 'ZT 74L74 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'NUEVO. Tecnología: Clearfield. Incorporación reciente al pipeline de alto rendimiento.',
    specs: {
      tecnologia: 'Clearfield',
      presentacion: '180.000 semillas'
    }
  },
  {
    id: 'zt-7500-cl',
    category: 'girasol',
    name: 'ZT 7500 CL',
    image: '/imgi_3_zeta-semillas_paquete-girasol-99.png',
    description: 'Tecnología: Clearfield. (También ZT 75L50). Híbrido versátil con excelente adaptación regional.',
    specs: {
      tecnologia: 'Clearfield',
      presentacion: '180.000 semillas'
    }
  },
  // SORGO
  {
    id: 'zt-709-dp',
    category: 'sorgo',
    name: 'ZT 709 DP',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'NUEVO. Sorgo Doble Propósito tolerante a Pulgón Amarillo. Excelente estabilidad y sanidad foliar.',
    specs: {
      uso: 'Doble Propósito / Tolerante a Pulgón Amarillo',
      ciclo: 'Floración 77 días',
      densidad: '150.000 – 180.000 pl/ha',
      altura: '195 – 200 cm',
      tallo: 'Dulce',
      panoja: 'Semi compacta',
      grano: 'Marrón / Taninos Alto',
      enfermedades: 'MDMV (Alta), Pulgón Verde (Alta), Roya (Media), Fusarium (Media), Hongos de Panoja (Tolerante)',
      presentacion: '600.000 sem/bolsa'
    }
  },
  {
    id: 'zt-718-dp',
    category: 'sorgo',
    name: 'ZT 718 DP',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'Uso: DP (Doble Propósito). Híbrido rústico con gran capacidad de producción de biomasa.',
    specs: {
      uso: 'Doble Propósito',
      presentacion: '600.000 sem/bolsa'
    }
  },
  {
    id: 'zt-55t20-az',
    category: 'sorgo',
    name: 'ZT 55T20 AZ',
    image: '/imgi_4_zeta-semillas_paquete-sorgo-99.png',
    description: 'Uso: AZ (Alta Zafra). Ciclo optimizado para siembras tardías o de segunda.',
    specs: {
      uso: 'Alta Zafra',
      presentacion: '600.000 sem/bolsa'
    }
  },
  // MAIZ
  {
    id: 'zt-1105',
    category: 'maiz',
    name: 'ZT 1105',
    image: '/imgi_5_zeta-semillas_paquete-maiz-99.png',
    description: 'Excelente rinde y estabilidad en ambientes templados. Tecnología BTRG para control de malezas y orugas.',
    specs: {
      tecnologia: 'BTRG',
      mercado: 'Grano',
      ciclo: 'Intermedio',
      resistencia: 'Vuelco y Quebrado'
    }
  },
  {
    id: 'zt-2200-vip3',
    category: 'maiz',
    name: 'ZT 2200 VIP3',
    image: '/imgi_5_zeta-semillas_paquete-maiz-99.png',
    description: 'Híbrido tropical de alto potencial. Máxima protección con tecnología Agrisure Viptera 3.',
    specs: {
      tecnologia: 'VIP 3',
      mercado: 'Grano/Silo',
      ciclo: 'Largo',
      resistencia: 'Enfermedades foliares'
    }
  },
  {
    id: 'zt-1088-pw',
    category: 'maiz',
    name: 'ZT 1088 PW',
    image: '/imgi_5_zeta-semillas_paquete-maiz-99.png',
    description: 'Estabilidad extrema en diferentes ambientes. Ideal para planteos de media-alta tecnología.',
    specs: {
      tecnologia: 'PowerCore®',
      mercado: 'Grano',
      ciclo: 'Intermedio-Corto',
      resistencia: 'Vuelco (Excelente)'
    }
  }
];

export const TEAM = [
  {
    name: 'SANTIAGO ZAPIOLA',
    role: 'GERENTE GENERAL',
    email: 'zapiolasantiago@zetasemillas.com',
    phone: '+54 9 11 5007-5162',
    img: '/imgi_2_SANTIAGO-ZAPIOLA.jpg'
  },
  {
    name: 'LUCAS ZAPIOLA',
    role: 'GERENTE DE OPERACIONES',
    email: 'lz@zetasemillas.com',
    phone: '+54 9 11 2000-7960',
    img: '/imgi_3_LUCAS-ZAPIOLA.jpg'
  },
  {
    name: 'SANTIAGO ZAPIOLA (h)',
    role: 'GERENTE COMERCIAL',
    email: 'sz@zetasemillas.com',
    phone: '+54 9 11 3104-0042',
    img: '/imgi_4_SANTIAGO-ZAPIOLA-h.jpg'
  }
];
