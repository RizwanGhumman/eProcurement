import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { VendorModule } from './modules/vendor/vendor.module';
import { DepartmentModule } from './modules/department/department.module';
import { ItemModule } from './modules/item/item.module';
import { BidItemsModule } from './modules/bid-items/bid-items.module';
import { PurchaseRequestItemModule } from './modules/purchase-request-item/purchase-request-item.module';
import { LocationModule } from './modules/location/location.module';
import { BiddingModule } from './modules/bidding/bidding.module';
import { PurchaseRequestModule } from './modules/purchase-request/purchase-request.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    UsersModule,
    AuthModule,
    VendorModule,
    DepartmentModule,
    ItemModule,
    BidItemsModule,
    PurchaseRequestItemModule,
    LocationModule,
    BiddingModule,
    PurchaseRequestModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ValidationPipe,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
