/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryOfWorkWhereUniqueInput } from "./CategoryOfWorkWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CategoryOfWorkUpdateInput } from "./CategoryOfWorkUpdateInput";

@ArgsType()
class UpdateCategoryOfWorkArgs {
  @ApiProperty({
    required: true,
    type: () => CategoryOfWorkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryOfWorkWhereUniqueInput)
  @Field(() => CategoryOfWorkWhereUniqueInput, { nullable: false })
  where!: CategoryOfWorkWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CategoryOfWorkUpdateInput,
  })
  @ValidateNested()
  @Type(() => CategoryOfWorkUpdateInput)
  @Field(() => CategoryOfWorkUpdateInput, { nullable: false })
  data!: CategoryOfWorkUpdateInput;
}

export { UpdateCategoryOfWorkArgs as UpdateCategoryOfWorkArgs };
