export interface CreateUserResponse {
    code:string;
    target:string;
    payload?:UserResponse
}

export interface UserResponse {
    nickname:string;
    email:string;
    id:number;
}