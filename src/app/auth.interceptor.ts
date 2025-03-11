import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<any> => {
  const isLoggedIn = !!localStorage.getItem('userToken'); // Verifica si hay un token

  if (!isLoggedIn && req.url.includes('fakestoreapi.com')) {
    console.error('Usuario no logeado. Redirigiendo a login.');
    // Aquí podrías manejar el redireccionamiento o agregar lógica adicional
  }

  return next(req); // Continua con la solicitud
};
