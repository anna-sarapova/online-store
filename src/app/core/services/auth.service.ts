import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    protected baseUrl: string = environment.baseUrl;
    private userData: BehaviorSubject<UserModel> = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

    constructor(private httpClient: HttpClient) {
    }

    public register(argument: object): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'api/Auth/Register', argument);
    }

    public login(argument: object): Observable<UserModel> {
        return this.httpClient.post<UserModel>(this.baseUrl + 'api/Auth/Login', argument);
    }

    get getLocalUserData(): Observable<UserModel> {
        return this.userData.asObservable();
    }

    set setLocalUserData(user: UserModel) {
        this.userData.next(user);
    }

    public IsAuthenticated(): Observable<boolean> {
        return this.getLocalUserData.pipe(map((user) => !!user?.token));
    }
}
