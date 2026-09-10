import type { NextFunction, Request, Response } from "express";

/**
 * middleware/ — Express middleware (auth, logging, errors, rate limits).
 * Sample: catch unhandled errors and return JSON.
 */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(err);
  res.status(500).json({
    error: "Internal server error",
    // Team: avoid leaking stack traces in production
  });
}
