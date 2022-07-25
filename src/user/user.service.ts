import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserResponse } from './dto/check-message.dto';

@Injectable()
export class UserService {
    constructor (@InjectRepository(Users) private userRepo:Repository<Users>){}
    
    

    findAll():Promise<Array<Users>>{
        return this.userRepo.find();
    }

    async createUser(input):Promise<any>{
        console.log(input)
        const findMail = await this.userRepo.findOne(
            {where:{email:input.email}}
        )
        if(!findMail){
            try {
                const user = this.userRepo.insert({
                    nickname:input.nickname,
                    email:input.email,
                    password:input.password,
                })
                return {input:input,code:"200",target:"success"}
    
            } catch (error) {
                return error;
            }
        }
        else{
            return "mail var"
        }
    }

    async login(input):Promise<CreateUserResponse>{
        const loginMail = await this.userRepo.findOne({
            where:{email:input.email}
        })
        try {
            
        if(!loginMail){
            return {code:"500",target:"unsuccess"}
        }
        else{
            if(loginMail.password===input.password){
                return {code:"200",target:"success",payload:{nickname:loginMail.nickname,id:loginMail.id,email:loginMail.email}}
            }
            else{
                return {code:"900",target:"parola dogru değil"}
            }
        }
        } catch (error) {

            return {code:"600",target:error}
            
        }
    }
    

    
   
}
