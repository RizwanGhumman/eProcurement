import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from 'src/modules/users/entity/user.entity';
import { UserService } from 'src/modules/users/user.service';
import { map} from 'rxjs/operators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,
    private userService:UserService) {}
   async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles=this.reflector.get<string[]>('roles',context.getHandler());
        console.log(roles);
        if(!roles){
            return true;
        }
        const request=context.switchToHttp().getRequest();
        const user=request.user;  
        const userFind:User= await this.userService.showById(user.userId);
        //console.log(userFind);

        if(userFind){
            let hasPermission:boolean=false;
            const hasRole=()=>roles.includes(userFind.type);
            if(hasRole()){
                hasPermission=true;
                //console.log("Has a Role");    
            }
            return user && hasPermission;
        }
          
    }
}