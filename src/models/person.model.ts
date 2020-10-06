import {Entity, hasOne, model, property} from '@loopback/repository';
import {Department} from './department.model';
@model()

export class Person extends Entity {
  @property({
    type: 'string',
    generated: false,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  surname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'date',
    required: true,
  })
  startDate: string;

  @property({
    type: 'number',
    required: true,
  })
  salary: number;

  @property({
    type: 'string',
    required: true,
  })
  department: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  manager: string;

  // @property({
  //   id: true,
  //   type: 'number',
  //   generated: true,
  // })
  // id: number;

  @property({
    id: true,
    type: 'number',
    generated: true,
    required: false,
  })
  id: number;

  @property({
    type: 'number',
    generated: true,
    required: false,
  })
  m_id: number;

  @hasOne(() => Department, {keyTo: 'm_id'})
  managerId: Department;

  @property({
    type: 'number',
  })
  d_id: number;




  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
