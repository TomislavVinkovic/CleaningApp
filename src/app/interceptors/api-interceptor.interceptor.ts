import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const sanctumRoutes = [
    'login', 
    'logout',
    'sanctum/csrf-cookie'
  ];
  let url = `${environment.API_URL}${req.url}`;

  const apiReq = req.clone({
    url,
    withCredentials: true,
  });

  return next(apiReq);
};
