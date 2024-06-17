/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
   register(){
    return{ message:"Register an User"}
   }

   login(){
    return ({
        message:"This is login"
    })
   }
}
