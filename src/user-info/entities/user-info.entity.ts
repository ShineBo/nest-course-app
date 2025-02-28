import { Column, Table, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'userInfos',
  timestamps: false,
})
export class UserInfo extends Model {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  firstname: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  lastname: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  hobby: string;
}
