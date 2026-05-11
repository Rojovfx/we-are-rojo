export const isMobile = () => {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 1000px)').matches;
};

export const ubicacion = () =>{
  return window.location.pathname;
}