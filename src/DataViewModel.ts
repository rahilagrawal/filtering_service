import {
    IsNumber,
    IsString,
    ValidateNested,
} from 'class-validator';
import {
    ApiModelProperty,
} from '@nestjs/swagger';

export class DataViewModel {
    @ApiModelProperty()
    @IsString()
    name: string;

    @ApiModelProperty()
    @IsString()
    address: string;

    @ApiModelProperty()
    @IsNumber()
    reviews: number;

    @ApiModelProperty()
    @ValidateNested({ each: true })
    filters: number[];

    @ApiModelProperty()
    @ValidateNested({ each: true })
    type: string[];

    @ApiModelProperty()
    @IsString()
    image: string;

    @ApiModelProperty()
    @IsString()
    price: string;
}
