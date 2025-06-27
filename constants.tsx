import React from 'react';
import type { CaseStudy, Service } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Casos de Éxito', href: '#casos-exito' },
  { name: 'Laboratorio', href: '#laboratorio' },
  { name: 'Contacto', href: '#contacto' },
];

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4 text-cyan-400">{children}</div>
);

export const SERVICES_DATA: Service[] = [
  {
    icon: <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.242.013.487.02.73.02h.018a2.25 2.25 0 011.983 1.186l.57.954a2.25 2.25 0 001.983 1.186h.018a2.25 2.25 0 001.983-1.186l.57-.954a2.25 2.25 0 011.983-1.186h.018a6.75 6.75 0 00-6.188-3.181Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.5L14.25 10l-3.901 4.104a2.25 2.25 0 00-.659 1.591v5.714" /></svg></IconWrapper>,
    title: 'Metaverso para Empresas',
    description: 'Creamos mundos virtuales corporativos que fomentan la colaboración, el engagement y nuevas oportunidades de negocio.',
  },
  {
    icon: <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg></IconWrapper>,
    title: 'Soluciones VR/AR/MR',
    description: 'Desarrollamos experiencias inmersivas a medida, desde visualizaciones de productos hasta simuladores de entrenamiento complejos.',
  },
  {
    icon: <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v7.5a2.25 2.25 0 002.25 2.25z" /></svg></IconWrapper>,
    title: 'Inteligencia Artificial Aplicada',
    description: 'Integramos IA para potenciar experiencias, personalizar contenido y analizar datos de comportamiento en tiempo real.',
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  { id: 1, title: 'Retail AR Showroom', category: 'AR', imageUrl: 'https://picsum.photos/seed/retail/600/400', description: 'Permite a los clientes visualizar muebles en su propio hogar antes de comprar.' },
  { id: 2, title: 'Simulador VR de Cirugía', category: 'VR', imageUrl: 'https://picsum.photos/seed/surgery/600/400', description: 'Entrenamiento de alta fidelidad para cirujanos en un entorno sin riesgos.' },
  { id: 3, title: 'Asistente IA de Ventas', category: 'IA', imageUrl: 'https://picsum.photos/seed/ai/600/400', description: 'Un chatbot inteligente que califica leads y personaliza ofertas.' },
  { id: 4, title: 'Colaboración MR Industrial', category: 'MR', imageUrl: 'https://picsum.photos/seed/industrial/600/400', description: 'Superposición de datos 3D en maquinaria real para mantenimiento.' },
  { id: 5, title: 'Evento Corporativo en VR', category: 'VR', imageUrl: 'https://picsum.photos/seed/event/600/400', description: 'Una conferencia global inmersiva que conectó a 1000+ empleados.' },
  { id: 6, title: 'Campaña de Marketing AR', category: 'AR', imageUrl: 'https://picsum.photos/seed/marketing/600/400', description: 'Filtros y juegos de realidad aumentada que se volvieron virales en redes.' },
];
