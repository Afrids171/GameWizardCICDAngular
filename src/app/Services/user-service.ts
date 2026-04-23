import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }
  POSTURL = "https://gamewizardapiazure20260421205624-bdg0chgbexftctce.centralindia-01.azurewebsites.net/api/Home/SignUp"
  loginURL = "https://gamewizardapiazure20260421205624-bdg0chgbexftctce.centralindia-01.azurewebsites.net/api/Home/login"
  CustomerDetails = "https://localhost:7257/api/Home"
  customerbyid = "https://localhost:7257/api/Home/id?id="
  AllGamesProduct = "https://localhost:7257/api/Home/GamesAllProduct"
  CreateOrderURL = "https://gamewizardapiazure20260421205624-bdg0chgbexftctce.centralindia-01.azurewebsites.net/api/Home/CreateOrder?CustId="



  isProfile = false;
  IsLogin = false;
  CreateUser(obj: any) {
    return this.http.post<any>(this.POSTURL, obj)
  }


  loginUser(obj: any) {
    return this.http.post<any>(this.loginURL, obj)
  }

  getallproducts() {
    return this.http.get<any>("https://gamewizardapiazure20260421205624-bdg0chgbexftctce.centralindia-01.azurewebsites.net/api/Home/AllProducts")
  }

  getCustomerDetails() {
    return this.http.get<any>(this.CustomerDetails);

  }

  getCustomerById(id: number) {
    return this.http.get<any>(`${this.customerbyid}${id}`);
  }

  getAllGames()
  {
    return this.http.get<any>("https://gamewizardapiazure20260421205624-bdg0chgbexftctce.centralindia-01.azurewebsites.net/api/Home/GamesAllProduct")
  }
  

  CreateOrder(Id:any,obj: any) 
  {
      return this.http.post<any>(`${this.CreateOrderURL}${Id}`, obj);
  }
}
