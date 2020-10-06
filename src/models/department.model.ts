import {Entity, hasMany, model, property} from '@loopback/repository';
import {Person} from './person.model';

@model()
export class Department extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  departmentName: string;

  @property({
    type: 'string',
    required: true,
  })
  departmentManager: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @property({
    type: 'number',
    required: false,
    generated: true,
    id: true,
  })
  id: number;

  @property({
    type: 'number',
  })
  m_id: number;

  @property({
    type: 'number',
    generated: true,
    required: false,
  })
  d_id: number;

  @hasMany(() => Person, {keyTo: 'd _id'})
  personid: Person;

  constructor(data?: Partial<Department>) {
    super(data);
  }
}

export interface DepartmentRelations {
  // describe navigational properties here
}

export type DepartmentWithRelations = Department & DepartmentRelations;
