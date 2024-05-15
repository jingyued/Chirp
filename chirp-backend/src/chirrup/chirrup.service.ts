import { Injectable } from '@nestjs/common';
import { CreateChirrupDto } from './dto/create-chirrup.dto';
import { UpdateChirrupDto } from './dto/update-chirrup.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Chirrup } from './entities/chirrup.entity';


@Injectable()
export class ChirrupService {

  @InjectModel(Chirrup.name)
  private chirrupModel: Model<Chirrup>;

  create(createChirrupDto: CreateChirrupDto) {
    const chirrup = new this.chirrupModel(createChirrupDto);
    return chirrup.save();
    // return 'This action adds a new chirrup';
  }

  findAll() {
    return this.chirrupModel.find();
    // return `This action returns all chirrup`;
  }

  findOne(id: number) {
    return this.chirrupModel.findById(id);
    // return `This action returns a #${id} chirrup`;
  }

  update(id: number, updateChirrupDto: UpdateChirrupDto) {
    return this.chirrupModel.findByIdAndUpdate(id, updateChirrupDto);
    // return `This action updates a #${id} chirrup`;
  }

  remove(id: number) {
    // return `This action removes a #${id} chirrup`;
    return this.chirrupModel.findByIdAndDelete(id);
  }
}
