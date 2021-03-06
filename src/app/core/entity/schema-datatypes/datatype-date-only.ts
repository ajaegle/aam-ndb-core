/*
 *     This file is part of ndb-core.
 *
 *     ndb-core is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     ndb-core is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ndb-core.  If not, see <http://www.gnu.org/licenses/>.
 */

import { EntitySchemaDatatype } from "../schema/entity-schema-datatype";

/**
 * Datatype for the EntitySchemaService transforming Date values to/from a date string format ("YYYY-mm-dd").
 *
 * Throws an exception if the property is set to something that is not a Date instance and cannot be cast to Date either.
 *
 * For example:
 *
 * `@DatabaseField({dataType: 'date-only'}) myDate: Date = new Date('2020-01-15'); // will be "2020-01-15" (without time) in the database`
 */
export const dateOnlyEntitySchemaDatatype: EntitySchemaDatatype = {
  name: "date-only",

  transformToDatabaseFormat: (value: Date) => {
    if (!value) {
      return undefined;
    }

    return (
      value.getFullYear() +
      "-" +
      (value.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      value.getDate().toString().padStart(2, "0")
    );
  },

  transformToObjectFormat: (value) => {
    if (!value) {
      return undefined;
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new Error("failed to convert data to Date object: " + value);
    }
    return date;
  },
};
