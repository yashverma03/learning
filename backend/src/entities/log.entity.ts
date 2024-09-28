import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { LogTypeEnum } from '../interfaces/log-type.enum';

@Entity('logs')
export class Log {
  @PrimaryGeneratedColumn()
  logId: string;

  @Column()
  message: string;

  @Column()
  type: LogTypeEnum;

  @Column()
  timestampAdded: Date;
}
