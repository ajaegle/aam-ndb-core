import { Injectable } from "@angular/core";
import { School } from "./model/school";
import { EntityMapperService } from "../../core/entity/entity-mapper.service";
import { from, Observable } from "rxjs";
import { Database } from "../../core/database/database";
import { Child } from "../children/model/child";
import { EntitySchemaService } from "../../core/entity/schema/entity-schema.service";
import { ChildrenService } from "../children/children.service";

@Injectable()
export class SchoolsService {
  constructor(
    private entityMapper: EntityMapperService,
    private entitySchemaService: EntitySchemaService,
    private db: Database,
    private childrenService: ChildrenService
  ) {}

  getSchools(): Observable<School[]> {
    return from(this.entityMapper.loadType<School>(School));
  }

  async getChildrenForSchool(schoolId: string): Promise<Child[]> {
    const relations = await this.childrenService.queryRelationsOf(
      "school",
      schoolId
    );
    const children: Child[] = [];
    for (const relation of relations) {
      children.push(
        await this.childrenService.getChild(relation.childId).toPromise()
      );
    }
    return children;
  }
}
