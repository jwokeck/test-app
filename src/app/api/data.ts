import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export function GET() {
  const filePath = path.join(process.cwd(), "public/data.csv");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const records = parse(fileContent, { columns: true, skip_empty_lines: true });
  return Response.json(records);
}
