import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  /**
   The API base url + key.
   *
   @param key - the private API key
   @param link - base URL for the OpenWeatherMap site
   */
  private API_DETAILS = {
    key: '99dc087fdd40b57b0faaac1ae6bc3cce',
    link: 'api.openweathermap.org/data/2.5/'
  };

  constructor(private http: HttpClient) {}

  /**
    This function is expecting a string and returns an observable for the service.
   *
    Subscribe to it so you can use the API.
    @param city - The city to look the weather for.
   */
  public getWeather(city: string): Observable<any> {
    return this.http.get(`${this.API_DETAILS.link}weather?q=${city}&appid=${this.API_DETAILS.key}`);
  }
}
