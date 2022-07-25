import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Email_UNIQUE", ["email"], { unique: true })
@Index("IDX_f73ebcea50dd1c375f20260dbe", ["email"], { unique: true })
@Entity("users", { schema: "sys" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "Nickname", length: 45 })
  nickname: string;

  @Column("varchar", { name: "Email", unique: true, length: 100 })
  email: string;

  @Column("varchar", { name: "Password", length: 30 })
  password: string;
}
