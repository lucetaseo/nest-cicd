import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({unsigned:true})
  id:number

  /**
   * 이메일
   * @example 'example@sparta.com'
   */
  @ApiProperty()
  @IsNotEmpty({message:'이메일을 작성해주세요.'})
  @IsEmail({}, {message:'이메일 형식에 맞게 작성해주세요.'})
  @Column({unique:true})
  email:string 

    /**
   * 패스워드
   * @example '!123Example'
   */
  @ApiProperty()
  @IsNotEmpty({message:'패스워드를 작성해주세요.'})
  @IsStrongPassword({}, {message:'비밀번호는 영문 알파벳 대,소문자,숫자, 특수문자등을 사용해주세요.'})
  @Column()
  password:string 

      /**
   * 설명
   * @example '안녕하세요. 반갑습니다'
   */
  @ApiProperty()
  @IsNotEmpty({message:'소개를 작성해주세요.'})
  @IsString()
  @Column()
  bio:string

        /**
   * 이미지
   * @example 'asdkfweif.img'
   */
  @ApiProperty()
  @IsString()
  @Column()
  profileImg:string

  @CreateDateColumn()
  createAt:Date

  @UpdateDateColumn()
  updateAt:Date
}