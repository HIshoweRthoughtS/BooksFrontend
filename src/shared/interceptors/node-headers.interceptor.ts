import { HttpInterceptorFn } from '@angular/common/http';

export const nodeHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request and add the authorization header
  const expressSession = req.clone({
    withCredentials: true
  });

  // Pass the cloned request with the updated header to the next handler
  return next(expressSession);
};
