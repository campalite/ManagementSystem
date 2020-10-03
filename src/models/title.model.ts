import {Entity, model, property} from '@loopback/repository';

@model()
export class Title extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  startDate: string;

  @property({
    type: 'date',
    required: true,
  })
  finishDate: string;

  @property({
    type: 'string',
    required: true,
  })
  department: string;

  @property({
    type: 'number',
    required: true,
    id: true,
  })
  id: string;


  constructor(data?: Partial<Title>) {
    super(data);
  }
}

export interface TitleRelations {
  // describe navigational properties here
}

export type TitleWithRelations = Title & TitleRelations;
