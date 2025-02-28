import { Column, Table, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: false,
})
export class Customer extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  fullname: string;

  @Column({
    defaultValue: true,
  })
  isActive: boolean;
}
