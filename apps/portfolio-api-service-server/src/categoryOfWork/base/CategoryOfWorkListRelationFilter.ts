/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryOfWorkWhereInput } from "./CategoryOfWorkWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CategoryOfWorkListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CategoryOfWorkWhereInput,
  })
  @ValidateNested()
  @Type(() => CategoryOfWorkWhereInput)
  @IsOptional()
  @Field(() => CategoryOfWorkWhereInput, {
    nullable: true,
  })
  every?: CategoryOfWorkWhereInput;

  @ApiProperty({
    required: false,
    type: () => CategoryOfWorkWhereInput,
  })
  @ValidateNested()
  @Type(() => CategoryOfWorkWhereInput)
  @IsOptional()
  @Field(() => CategoryOfWorkWhereInput, {
    nullable: true,
  })
  some?: CategoryOfWorkWhereInput;

  @ApiProperty({
    required: false,
    type: () => CategoryOfWorkWhereInput,
  })
  @ValidateNested()
  @Type(() => CategoryOfWorkWhereInput)
  @IsOptional()
  @Field(() => CategoryOfWorkWhereInput, {
    nullable: true,
  })
  none?: CategoryOfWorkWhereInput;
}
export { CategoryOfWorkListRelationFilter as CategoryOfWorkListRelationFilter };
