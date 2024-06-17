/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";

@Controller()
export class AuthController{
    //auth service is automatically created when initializing the controller
    constructor(private authService:AuthService){
    }
    // some requests from client
    @Post("register")
    register(){
        return this.authService.register()
    }
    @Post("login")
    login(){
        return this.authService.login()
    }
}