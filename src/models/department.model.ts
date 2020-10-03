import {Entity, model, property} from '@loopback/repository';

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
    required: true,
    id: true,
  })
  id: string;


  constructor(data?: Partial<Department>) {
    super(data);
  }
}

export interface DepartmentRelations {
  // describe navigational properties here
}

export type DepartmentWithRelations = Department & DepartmentRelations;
