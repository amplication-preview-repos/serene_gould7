/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Products as PrismaProducts,
  CategoryOfWork as PrismaCategoryOfWork,
} from "@prisma/client";

export class ProductsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProductsCountArgs, "select">): Promise<number> {
    return this.prisma.products.count(args);
  }

  async productsItems(
    args: Prisma.ProductsFindManyArgs
  ): Promise<PrismaProducts[]> {
    return this.prisma.products.findMany(args);
  }
  async products(
    args: Prisma.ProductsFindUniqueArgs
  ): Promise<PrismaProducts | null> {
    return this.prisma.products.findUnique(args);
  }
  async createProducts(
    args: Prisma.ProductsCreateArgs
  ): Promise<PrismaProducts> {
    return this.prisma.products.create(args);
  }
  async updateProducts(
    args: Prisma.ProductsUpdateArgs
  ): Promise<PrismaProducts> {
    return this.prisma.products.update(args);
  }
  async deleteProducts(
    args: Prisma.ProductsDeleteArgs
  ): Promise<PrismaProducts> {
    return this.prisma.products.delete(args);
  }

  async getCategoryOfWork(
    parentId: string
  ): Promise<PrismaCategoryOfWork | null> {
    return this.prisma.products
      .findUnique({
        where: { id: parentId },
      })
      .categoryOfWork();
  }
}
