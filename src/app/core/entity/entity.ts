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

import { EntitySchema } from "./schema/entity-schema";
import { DatabaseField } from "./database-field.decorator";
import {
  WarningLevel,
  WarningLevelColor,
} from "../../child-dev-project/warning-level";

/**
 * This represents a static class of type <T>.
 * It can be used for passing a class from which new objects should be created.
 * For example usage check the {@link EntityMapperService}.
 */
export type EntityConstructor<T extends Entity> = new (id: string) => T;

/**
 * "Entity" is a base class for all domain model classes.
 * It implements the basic general properties and methods that are required for all Entity types
 * e.g. supporting the Entity Schema system or basic database logic.
 *
 * Entity classes do not deal with database actions, use {@link EntityMapperService} with its find/save/delete functions.
 *
 * Do not use the Entity class directly. Instead implement your own Entity types, writing classes that extend "Entity".
 * A How-To Guide on how to implement your own types is available:
 * - [How to Create a new Entity Type]{@link /additional-documentation/how-to-guides/create-a-new-entity-type.html}
 */
export class Entity {
  /**
   * The entity's type.
   * In classes extending Entity this is usually overridden by the class annotation `@DatabaseEntity('NewEntity')`.
   */
  static ENTITY_TYPE = "Entity";

  /**
   * EntitySchema defining property transformations from/to the database.
   * This is auto-generated from the property annotations `@DatabaseField()`.
   *
   * see {@link /additional-documentation/how-to-guides/create-a-new-entity-type.html}
   */
  static schema: EntitySchema;

  /**
   * Extract the ENTITY_TYPE from an id.
   * @param id An entity's id including prefix.
   */
  static extractTypeFromId(id: string): string {
    const split = id.indexOf(":");
    return id.substring(0, split);
  }

  /**
   * Extract entityId without prefix.
   * @param id An entity's id including prefix.
   */
  static extractEntityIdFromId(id: string): string {
    const split = id.indexOf(":");
    return id.substring(split + 1);
  }

  /**
   * Create a prefixed id by adding the type prefix if it isn't already part of the given id.
   * @param type The type prefix to be added.
   * @param id The id to be extended with a prefix.
   */
  static createPrefixedId(type: string, id: string): string {
    id = String(id);
    const prefix = type + ":";
    if (!id.startsWith(prefix)) {
      return prefix + id;
    } else {
      return id;
    }
  }

  /**
   * Internal database id.
   * This is usually combined from the ENTITY_TYPE as a prefix with the entityId field `EntityType:entityId`
   * @example "Entity:123"
   */
  @DatabaseField() _id: string;

  /** internal database doc revision, used to detect conflicts by PouchDB/CouchDB */
  @DatabaseField() _rev: string;

  /** actual id without prefix */
  get entityId(): string {
    return Entity.extractEntityIdFromId(this._id);
  }

  /**
   * Set id without prefix.
   * @param newEntityId The new id without prefix.
   */
  set entityId(newEntityId: string) {
    this._id = Entity.createPrefixedId(this.getType(), newEntityId);
  }

  /**
   * Creates an entity object with the given id. This id is final and won't be changeable after this object has been
   * created.
   *
   * @param id a unique id for this entity
   */
  constructor(id: string) {
    this.entityId = id;
  }

  /**
   * Get the class (Entity or the actual subclass of the instance) to call static methods on the correct class considering inheritance
   */
  getConstructor(): typeof Entity {
    return <typeof Entity>this.constructor;
  }

  /**
   * Returns the id of this entity.
   *
   * Note that an id is final and can't be changed after the object has been instantiated, hence there is no
   * <code>setId()</code> method.
   *
   * @returns {string} the unique id of this entity
   */
  public getId(): string {
    return this.entityId;
  }

  /**
   * Returns the type which is used to categorize this entity in the database.
   *
   * <b>Important: Do not overwrite this method! Types are handled internally.</b>
   *
   * @returns {string} the entity's type (which is the class name).
   */
  public getType(): string {
    return this.getConstructor().ENTITY_TYPE;
  }

  /**
   * Returns a string representation or summary of the instance.
   *
   * <b>Important: Overwrite this method in subtypes!</b>
   *
   * @returns {string} the instance's string representation.
   */
  public toString(): string {
    return this.getId();
  }

  /**
   * Returns an array of strings by which the entity can be searched.
   *
   * By default the parts of the "name" property (split at spaces) is used if it is present.
   *
   * <b>Overwrite this method in subtypes if you want an entity type to be searchable by other properties.</b>
   *
   * @returns {string[]} an array of strings through which the entity can be searched.
   */
  public generateSearchIndices(): string[] {
    let indices = [];

    // default indices generated from "name" property
    if (this.hasOwnProperty("name")) {
      indices = this["name"].split(" ");
    }

    return indices;
  }

  /**
   * Used by some generic UI components to set the color for the entity instance.
   * Override this method as needed.
   */
  public getColor() {
    return WarningLevelColor(this.getWarningLevel());
  }

  /**
   * Override getWarningLevel() to define when the entity is in a critical condition and should be color-coded
   * and highlighted in generic components of the UI.
   */
  public getWarningLevel(): WarningLevel {
    return WarningLevel.NONE;
  }
}
