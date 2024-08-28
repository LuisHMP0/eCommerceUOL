import { Module } from '@nestjs/common';
import { ZipCodeService } from './zipcode.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [ZipCodeService],
    exports: [ZipCodeService],
})
export class ZipCodeModule {}
