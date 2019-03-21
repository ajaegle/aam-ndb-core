import { ChildrenService } from './children.service';
import {EntityMapperService} from '../entity/entity-mapper.service';
import {ChildSchoolRelation} from './childSchoolRelation';
import {Child} from './child';
import {ChildWithRelation} from './childWithRelation';
import {MockDatabaseManagerService} from '../database/mock-database-manager.service';

describe('ChildrenService', () => {
  let service: ChildrenService;
  beforeEach(() => {
    const database = new MockDatabaseManagerService().getDatabase();
    service = new ChildrenService(new EntityMapperService(database), database)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: test getChildren

  // TODO: test getChild

  // TODO: test getAttendances

  it('should find latest ChildSchoolRelation of a child', (done: DoneFn) => {
    service.getChildren().subscribe(children => {
      const promises: Promise<any>[] = [];
      expect(children.length).toBeGreaterThan(0);
      children.forEach(child => promises.push(verifyLatestChildRelations(child, service)));
      Promise.all(promises).then(() => done())
    })
  });

  it('should return ChildSchoolRelations of child in correct order', (done: DoneFn) => {
    service.getChildren().subscribe(children => {
      const promises: Promise<any>[] = [];
      expect(children.length).toBeGreaterThan(0);
      children.forEach(child => promises.push(verifyChildRelationsOrder(child, service)));
      Promise.all(promises).then(() => done())
    })
  })
});

function compareRelations(a: ChildSchoolRelation, b: ChildSchoolRelation) {
  expect(a.getId()).toBe(b.getId());
  expect(a.class).toBe(b.class);
  expect(a.schoolId).toBe(b.schoolId);
  expect(a.childId).toBe(b.childId);
  expect(a.start).toBe(b.start);
  expect(a.end).toBe(b.end);
}

async function verifyChildRelationsOrder(child: Child, childrenService: ChildrenService) {
  const relations = await childrenService.queryRelationsOfChild(child.getId());
  const sorted = relations.sort((a, b) => {
    const aValue = new Date(a.start);
    const bValue = new Date(b.start);
    return aValue > bValue ? -1 : aValue === bValue ? 0 : 1;
  });
  const res = await childrenService.querySortedRelations(child.getId());
  expect(res.length).toBe(sorted.length);
  for (let i = 0; i < res.length; i++) {
    compareRelations(res[i], sorted[i]);
  }
}

async function verifyLatestChildRelations(child: Child, childrenService: ChildrenService) {
  const relations = await childrenService.queryRelationsOfChild(child.getId());
  const latest: ChildSchoolRelation = relations.sort((a, b) => {
    const aValue = new Date(a.start);
    const bValue = new Date(b.start);
    return aValue > bValue ? -1 : aValue === bValue ? 0 : 1;
  })[0];
  const childWithRelation = new ChildWithRelation(child, latest);
  const res = await childrenService.queryLatestRelation(child.getId());
  compareRelations(res, childWithRelation.getRelation());
}
