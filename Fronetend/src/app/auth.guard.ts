import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';


export function AuthGuard(): CanActivateFn {

  return () => {
    console.log("Coming here ");

    const oauthService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if (!oauthService.isAuthenticatedUser()) {
      router.navigateByUrl('/loginuser');

      return false;

    }


    return true;

  }
}
