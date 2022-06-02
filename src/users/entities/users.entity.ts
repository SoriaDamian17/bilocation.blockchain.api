import { Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class UsersTable {
  @PrimaryGeneratedColumn()
  public Userid: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;
}
