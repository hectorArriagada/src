import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const porteroGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isConected()) {
    return true;
  } else {
    console.log("Saaale qlo")
    router.navigate(['/login']);
    return false;
  }

};
