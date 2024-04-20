import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = 'MRfxpLx8j1z4FT3tT93EeAYP5R0dezJP1zTcHj09hWzBVqaamfPo9zuQ34IRbbhs';

  let jwtToken = req.clone({
    setHeaders: {
      Authorization: "bearer " + _token,
    },
  });
  return next(jwtToken);
};
