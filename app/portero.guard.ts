import { CanActivateFn } from '@angular/router';

export const porteroGuard: CanActivateFn = (route, state) => {
  return true;
};
