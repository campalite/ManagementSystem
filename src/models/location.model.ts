import {Entity, model, property} from '@loopback/repository';

@model()
export class Location extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  locationName: string;

  @property({
    type: 'string',
    required: true,
  })
  locationAddress: string;

  @property({
    type: 'number',
    required: true,
  })
  postCode: number;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'number',
    required: false,
    generated: true,
    id: true,
  })
  id: number;


  constructor(data?: Partial<Location>) {
    super(data);
  }
}

export interface LocationRelations {
  // describe navigational properties here
}

export type LocationWithRelations = Location & LocationRelations;
