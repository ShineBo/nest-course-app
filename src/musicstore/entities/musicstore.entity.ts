import { Column, Table, Model, DataType } from 'sequelize-typescript';
import { CreateMusicstoreDto } from '../dto/create-musicstore.dto';

@Table({
  tableName: 'musicstore',
  timestamps: false,
})
export class Musicstore extends Model<Musicstore, CreateMusicstoreDto> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  music_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_new: boolean;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  brand: string;
}
