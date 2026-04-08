import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import type { ArtchetypeData } from "../../utils/types";

export function loadCsvData() {
  const filePath = path.join(process.cwd(), "public/data.csv");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const records: ArtchetypeData[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}
