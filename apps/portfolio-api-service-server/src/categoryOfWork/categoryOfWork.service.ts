import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryOfWorkServiceBase } from "./base/categoryOfWork.service.base";

@Injectable()
export class CategoryOfWorkService extends CategoryOfWorkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
