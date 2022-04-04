import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost, ITheme } from '../shared/interfaces';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]>{ //wzima lista
    return this.http.get<ITheme[]>(`${apiUrl}/themes`)  //ITheme[] wrushta masiv
  }

  loadTheme(id: string): Observable<ITheme<IPost>>{
    return this.http.get<ITheme<IPost>>(`${apiUrl}/themes/${id}`) // Itheme wrushta theme s konkretno id
  }


}
