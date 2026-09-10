/**
 * types/ — shared frontend TypeScript models (sample).
 * Team: align with packages/shared when ready.
 */
export type UserRole = "admin" | "director" | "student" | "none";

export type Certificate = {
  id: string;
  studentName: string;
  course: string;
  institution: string;
  metadataUri?: string;
};
