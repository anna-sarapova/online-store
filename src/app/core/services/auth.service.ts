import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    protected baseUrl: string = environment.baseUrl;

    constructor(private httpClient: HttpClient) {
    }

    public register(argument: object): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'api/auth/Register', argument);
    }
}
