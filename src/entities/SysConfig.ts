import { Column, Entity } from "typeorm";

@Entity("sys_config", { schema: "sys" })
export class SysConfig {
  @Column("varchar", { primary: true, name: "variable", length: 128 })
  variable: string;

  @Column("varchar", { name: "value", nullable: true, length: 128 })
  value: string | null;

  @Column("timestamp", {
    name: "set_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  setTime: Date | null;

  @Column("varchar", { name: "set_by", nullable: true, length: 128 })
  setBy: string | null;
}
