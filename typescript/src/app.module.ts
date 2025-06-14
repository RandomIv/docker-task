import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, PrismaModule, UserModule, PostModule],
})
export class AppModule {}
