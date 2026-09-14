// Minimal RFC 4180 CSV helpers for the mapping manifest (all_services.csv).

export const MAPPING_COLUMNS = ['stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key'];

export function rowKey(row) {
  return `${row.filename}::${row.path}::${row.verb}`;
}

function parseLine(line) {
  const out = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; } else { quoted = false; }
      } else {
        cur += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ',') {
      out.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out;
}

export function parseCsv(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n').filter((l) => l.length > 0);
  if (lines.length === 0) return { header: [], rows: [] };
  const header = parseLine(lines[0]);
  const rows = lines.slice(1).map((l) => {
    const cells = parseLine(l);
    const row = {};
    header.forEach((h, i) => { row[h] = cells[i] ?? ''; });
    return row;
  });
  return { header, rows };
}

function formatCell(v) {
  const s = v == null ? '' : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function formatCsv(header, rows) {
  const lines = [header.map(formatCell).join(',')];
  for (const r of rows) lines.push(header.map((h) => formatCell(r[h])).join(','));
  return lines.join('\n') + '\n';
}
