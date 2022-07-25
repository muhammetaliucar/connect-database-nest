import { Body, Controller, Get, Post,Request } from '@nestjs/common';
import { UserService } from './user.service';
import { Req } from '@nestjs/common';
import { UserResponse } from './dto/check-message.dto';

@Controller('user')
export class UserController {

    constructor (private userService:UserService){}

    @Get("findAll")
    findAll(){
        return this.userService.findAll()
    }



    @Get("/findById/:userId")
    findById(@Req() req){
        console.log(req.params);
        return "";
    }

    @Post("login")
    async login(@Body() input){
        console.log(input)
        return this.userService.login(input)
    }

    

    @Post("send")
    async sendMyMessage(@Body() input){
        return this.userService.createUser(input);
    }

    

}
