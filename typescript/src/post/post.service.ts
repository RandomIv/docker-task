import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const { authorId, ...postData } = createPostDto;
    return this.prisma.post.create({
      data: {
        ...postData,
        author: {
          connect: { id: authorId },
        },
      },
      include: {
        author: true,
      },
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }
}
