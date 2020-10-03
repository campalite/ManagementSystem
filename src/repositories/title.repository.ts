import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Title, TitleRelations} from '../models';

export class TitleRepository extends DefaultCrudRepository<
  Title,
  typeof Title.prototype.id,
  TitleRelations
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Title, dataSource);
  }
}
