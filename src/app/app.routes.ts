import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'Mon adresse IP - Tyrolium / SolidServ', en: 'My IP Address - Tyrolium / SolidServ' },
  description: { fr: "Découvrez votre adresse IP publique instantanément, telle que vue par l'infrastructure Tyrolium / SolidServ. Outil gratuit, rapide et sans inscription.", en: 'Find your public IP address instantly, as seen by the Tyrolium / SolidServ infrastructure. Free, fast and no sign-up required.' },
};

export const routes: Routes = tyroUiLocalizedRoutes([
  { path: '',    component: Home, data: { seo: SEO_HOME } },
  ...tyroUiErrorRoutes(),
]);
