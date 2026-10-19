import { RenderMode, ServerRoute } from '@angular/ssr';

// Pré-rendu (SSG) : chaque route est générée en HTML statique au build (en français et en /en/)
export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender },
];
