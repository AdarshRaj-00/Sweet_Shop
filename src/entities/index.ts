/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: mithai
 * Interface for Mithai
 */
export interface Mithai {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType boolean */
  isAvailable?: boolean;
  /** @wixFieldType text */
  servingSize?: string;
}
