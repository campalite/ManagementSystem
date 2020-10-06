import {inject} from '@loopback/core';
import {DefaultCrudRepository, FilterExcludingWhere, Options} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Person, PersonRelations} from '../models';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.name,
  PersonRelations
  > {
  findBymId(m_id: string, filter?: FilterExcludingWhere<Person>, options?: Options): Promise<Person> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Person, dataSource);
  }
}
